# Intro to Docker

### Projected Time

Example: 30-45 minutes

- Lesson: ? min
- Guided Practice: ?-? min
- Independent Practice: ? min
- Check for Understanding: ?-? min

### Prerequisites

- [Basic of Git](../git/git-version-control.md)
- [express.js](./express-js)

### Motivation

If you have been in touch with the latest developments in the programming world in the past few years, you would have noticed the loud buzz surrounding Docker and Docker containers. This popularity of docker is not without reason. The introduction of Docker has vastly changed how developers approach application development. Every Node.js developer out there always puts in utmost effort to make his application free of any type of environment dependencies. But despite these measures, surprises occur all the time leading to the failure of the application. Well, this is where Docker comes to the rescue.

### Objectives

**Participants will be able to:**

- know what and why docker is?
- Why use Node.js with Docker?

### Specific Things To Learn

- What is Docker?
- Docker Basics: Dockerfile, Images, & Containers

### Materials

- [Learn Docker in 7 Easy Steps (11 min - video)](https://www.youtube.com/watch?v=gAkwW2tuIqE&t=430s) - A complete introduction to Docker. Learn how to Dockerize a Node.js and run manage multiple containers with Docker Compose..
- [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/#dockerizing-a-node-js-web-app)
- [What is docker](https://www.linkedin.com/posts/thebharaths_docker-dockers-docker-activity-6856832927049895936-Pl47)- Linkedin post

### Lesson

#### What is Docker?[^1]

_Docker is an open platform for developing, shipping, and running applications_. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

#### Why use Docker?

- SHIP MORE SOFTWARE FASTER - Docker users on average ship software 7x more frequently than non-Docker users. Docker enables you to ship isolated services as often as needed.

- STANDARDIZE OPERATIONS - Small containerized applications make it easy to deploy, identify issues, and roll back for remediation.

- SEAMLESSLY MOVE - Docker-based applications can be seamlessly moved from local development machines to production deployments on AWS, Heroku.

- SAVE MONEY - Docker containers make it easier to run more code on each server, improving your utilization and saving you money

#### Docker architecture?

Docker uses a _client-server_ architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.

![Docker architecture](/docker/docker-architecture.png)[^2]

- **Docker client**: The Docker client (docker) is the primary way that many Docker users interact with Docker. When you use commands such as docker run, the client sends these commands to dockerd, which carries them out. The docker command uses the Docker API. The Docker client can communicate with more than one daemon.

- **Docker daemon**: The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

- **Images**: Docker images are like blueprints/source code for containers. They are made up of intermediate layers designed to increase reusability, decrease disk usage and speed up the building process by caching each step along the way.

- **Docker file**: Dockerfile is a text file that contains a list of commands required to build a docker image. Dockerfile contains information about the underlying OS, the language, file location, and network ports among other things.

- **Docker Container**: A Docker Container is the running instance of a _Docker Image_. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.

- **Docker registries**: A Docker registry stores Docker images. _Docker Hub_ is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry.

When you use the `docker pull` or `docker run` commands, the required images are pulled from your configured registry. When you use the `docker push` command, your image is pushed to your configured registry.

### Common Mistakes & Misconceptions

- [Mistakes to Avoid in Docker Images with Reason and Solution](https://www.ecloudcontrol.com/mistakes-to-avoid-in-docker-images-with-reason-and-solution/)

- [Top 5 Docker Myths and Facts That You Should be Aware of](https://collabnix.com/top-5-docker-myths-and-facts-that-you-should-be-aware-of/)

### Guided Practice

#### Dockerizing a Node.js web app

In this guided Practice, we are going to dockerize a Node.js application. We will follow a step by step approach to get the Docker container up and running. I assume you have installed [Node.js](https://github.com/nvm-sh/nvm#installing-and-updating) on your machine.

Next go ahead and follow the [Docker installation](https://www.docker.com/get-started) process according to your operating system.

Lets run `node` and `docker` on your terminal. If its installed correctly, you should get a error free response.

1. **Create the Node.js app**

- First, create a directory for your project and navigate to that directory from the command-line

```bash
mkdir docker_node_app && cd docker_node_app
```

- Lets run the following command to create the `package.json` file which contains information on the application’s dependencies and start script.

```bash
npm init -y
```

- Let's add the Express framework as the first dependency:

```bash
npm install express --save
```

Then, create a `server.js` file that defines a web app using the Express.js framework:

```javascript
// import express js
const express = require('express');
// creating the instance of express
const app = express();

// respond with "Hello Techtonica!" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello Techtonica!');
});

// Prints a log once the server starts listening on port 3000
app.listen(3000, () => {
  console.log('Node server has started running on port 3000');
});
```

Lets run the app using `node server.js` command. Go to your browser and follow the URL `http://localhost:3000` and you will see the text "Hello Techtonica!" on the page.

2. **Creating a Dockerfile**

Every application requires a specific working environment: applications, dependencies, databases, libraries, everything in a specific version. Docker allows you to create such environments and pack them into a container.

Contrary to a VM, the container doesn't hold the whole operating system — just the applications, dependencies, and configuration. This makes Docker containers much lighter and faster than regular VMs.

In this part, we will build a Docker container, and then launch the app in a Docker container.

First create an empty file called `Dockerfile`

```bash
touch Dockerfile
```

Add following code inside the Dockerfile

```dockerfile
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
```

- FROM - It defines what image you want to build from. Here we are using the latest version `16` of `node` available from the [Docker Hub](https://hub.docker.com/_/node).

- WORKDIR - This command create a directory to hold the application code inside the image, this will be the working directory for your application.

- COPY - command copies files from the current directory (on the command-line) to the working directory that was set in the previous step. You can either specify a file name to copy or use double full stops to copy all the files in the current directory to the working directory.

- RUN - command installs all the dependencies that are required to build the application. This includes all the dependencies specified in the package.json file.

- EXPOSE - command opens up a port from the Docker container to the outside world. This port receives all the requests we send to the Docker container.

- CMD - which defines your runtime. Here we will use `node server.js` to start your server.

3. **.dockerignore file**

Create a `.dockerignore file` and add following content. This will prevent your local modules and debug logs from being copied onto your Docker image and possibly overwriting modules installed within your image.

```.dockerignore
node_modules
npm-debug.log
```

4. **Build Docker image**

Use the following command to create the Docker image from the dockerfile. The `-t` flag lets you tag your image so it's easier to find later using the docker images command:

```bash
docker build -t hello-techtonica .
```

`hello-techtonica` is the name of the Docker image. The `.`(dot) indicates the file path to the project directory, which is where we are currently at in the command-line.

> Make sure that docker is running, otherwise you will get the error.

Run this command to see the built docker image in the local image repository.

```bash
docker images
```

The output looks like this:

```
REPOSITORY          TAG       IMAGE ID       CREATED          SIZE
hello-techtonica    latest    e82727de1971   10 minutes ago   854MB
```

6. **Run Docker container**

Use `docker run` command to run the image we previously built

```bash
docker run -dp 80:80 hello-techtonica
```

- run - command is used to mention that we want to create an instance of an image, which is then called a container.
- -d - run the container in detached mode (in the background)
- -p 80:80 - map port 80 of the host to port 80 in the container
- hello-techtonica - the image to use

If can use this command to view all the running Docker containers on your device.

```bash
docker ps
```

### Independent Practice

Create an account on [Docker Hub](https://hub.docker.com/), login into [play-with-docker](https://www.docker.com/play-with-docker) and play using the docker command

- check the docker version
- pull docker image: example `docker pull supriyamv/hello-techtonica:latest`
- create a container from an image
- list the running containers
- list all the containers
- list all the locally stored docker images
- access the running container
- stop a docker running container
- kill the container

If you wish you can explore more on your own.

### Challenge (optional)

In the guided practice we have completed developing our app and we built a Docker image. Now try to publish your docker image. You can either use this [article](https://dev.to/ahmedwadod/nodejs-and-docker-write-build-and-publish-h4f) or [docker doc](https://docs.docker.com/get-started/04_sharing_app/) for reference

### Check for Understanding

- What is Docker?
- Explain the basic docker terminology?
- List all the basic Docker commands and its uses?

### Supplemental Materials

- [Docker for Beginners:](https://devqa.io/docker-tutorial-docker-for-beginners/) - What is Docker and How to Create Docker Containers.
- [Node.js Docker Tutorial](https://www.edureka.co/blog/node-js-docker-tutorial/) - Know How to Use Node with Docker.
- [Docker for Beginners](https://docker-curriculum.com/#what-is-docker-)
- [Docker Tutorial for Beginners](https://www.youtube.com/watch?v=pTFZFxd4hOI) - Video (56 min)
- [Top 15 Docker Commands](https://www.edureka.co/blog/docker-commands/)
- [Docker vs Virtual Machine](https://geekflare.com/docker-vs-virtual-machine/)

[^1]: https://aws.amazon.com/docker/
[^2]: https://docs.docker.com/get-started/overview/#docker-architecture
