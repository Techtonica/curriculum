# Install and Run PostgreSQL using Docker

### Projected Time

Total: 1 hour 30 min

- Install Docker: 15 min
- Install and Configure PSQL using Docker: 20-30 min
- Install PG-admin using Docker: 20-30 min
- Check for Understanding: 10 min

### Prerequisites

- Docker

### Motivation

- Installing software is hard. And it has nothing to do with your expertise as a developer. We have all seen our fair share of version clashes, esoteric build failure messages and missing dependency errors each time we embarked upon the task of installing a new software to use. We have spent countless hours copy pasting snippets of code from Stack Overflow onto our terminal and running them with the hope that one of them will magically resolve install issues and make the software run. The result is mostly despair, frustration and loss of productivity.
- Docker provides a way out of this mess by reducing the task of installing and running software to as little as two commands (docker run and docker pull). In this lesson we will see this process in action by taking a step by step look at how easy and simple it is to setup a Postgres installation with docker.[^1]

### Objectives

**Participants will be able to:**

- Install Docker
- Build & run a PostgreSQL and PGAdmin using Docker

### Install Docker

Follow the [Docker installation](https://www.docker.com/get-started) process according to your operating system.

Try running this command on terminal, if docker is installed, you should get a error free response:

```sh
$ docker --version
```

### Install and Configure PSQL using Docker

#### 1. Getting the Postgres Docker Image

To pull down an image from the [Postgres docker hub](https://hub.docker.com/_/postgres/?tab=description), simply run

```sh
$ docker pull postgres
```

After downloading the image you can check that is available to use:

```sh
$ docker images
```

#### 2. Create a Directory

We will create a local folder and mount it as a data volume for our running container to store all the database files in a known location for you.

```sh
$ mkdir ${HOME}/postgres-data/
```

#### 3. Run the Postgres Container

Starting the Postgres container is as simple as running the docker run command

```sh
$ docker run -d --name dev-postgres -e POSTGRES_PASSWORD=Password -v ${HOME}/postgres-data/:/var/lib/postgresql/data -p 5432:5432 postgres
```

- -d: Launches the container in detached mode or in other words, in the background.

- -- name: An identifying name for the container. We can choose any name we want.

- -e: Expose environment variable of name POSTGRES_PASSWORD with value docker to the container. This environment variable sets the superuser password for PostgreSQL. We can set POSTGRES_PASSWORD to anything we like.

- -v: Mount ${HOME}/postgres-data/:/var/lib/postgresql/data on the host machine to the container side volume path /var/lib/postgresql/data created inside the container. This ensures that postgres data persists even after the container is removed.

- -p: Bind port 5432 on localhost to port 5432 within the container. This option enables applications running out side of the container to be able to connect to the Postgres server running inside the container.

You can verify the container is running using

```sh
$ docker ps
```

#### 4. Connect to psql

Run this command to access our running container `dev-postgres`

```sh
$ docker exec -it dev-postgres bash
```

Great, now you are in the container's bash console. To connect with our “Dockerized” Postgres instance run this command

```sh
$ psql -h localhost -U postgres
```

To check the list of database

```
\l
```

To check the current date

```sql
SELECT * from CURRENT_DATE;
```

Congratulations. If you don't get any error that means we have successfully run PostgreSQL in Docker. Press `CTRL+D` to exit.

### Install PG-admin using Docker(Optional)

[pgAdmin](https://www.pgadmin.org/) is the most popular and feature-rich Open Source administration and development platform for PostgreSQL. You will use it to manage the DB instance as well as to run your queries against the tables of it.

You will be using this [docker image](https://hub.docker.com/r/dpage/pgadmin4/) to deploy it in a container. To get the image and run the instance of the image with the following commands[^2]

```sh
docker pull dpage/pgadmin4
```

Once the image is available in your local, run the below command to create a pgAdmin container.

```sh
$ docker run -p 80:80 -e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' -e 'PGADMIN_DEFAULT_PASSWORD=password' --name dev-pgadmin -d dpage/pgadmin4
```

The parameters that we are passing to the docker run command are:

- -p 80:80: This parameter tells docker to map the port 80 in the container to port 80 in your computer (Docker host)
- -e 'PGADMIN_DEFAULT_EMAIL: Environment variable for default user’s email, you will use this to log in the portal afterwards
- -e 'PGADMIN_DEFAULT_PASSWORD': Environment variable for default user’s password
- -d: This parameters tells docker to start the container in detached mode
  dpage/pgadmin4: This parameter tells docker to use the image that we have previously downloaded

> **PS:** If the command fails to run due with error `port is already allocated`, Open docker dashboard and stop the container that is running on port 80.

Let’s check that the container is up and running,

```sh
$ docker ps
```

To look for the IP address of the PostgreSQL container on our host, you can run this command for it:

```sh
$ docker inspect dev-postgres -f "{{json .NetworkSettings.Networks }}"
```

- docker inspect: return low-level information of Docker objects, in this case, the ‘dev-postgres’ instance’s IP Adress.
- -f: parameter is to format the output as a JSON given a Go template.

The output should look like this:

```json
{
  "bridge": {
    "IPAMConfig": null,
    "Links": null,
    "Aliases": null,
    "NetworkID": "9d28fc17d1131317a774c6494b1b4e40eb3f889afa52b03848f48aa6d0684a28",
    "EndpointID": "36176d4730e4eeff639ba65fc58cb853fac30ad207ab1e15c32a925fb4aca2ef",
    "Gateway": "172.17.0.1",
    "IPAddress": "172.17.0.3",
    "IPPrefixLen": 16,
    "IPv6Gateway": "",
    "GlobalIPv6Address": "",
    "GlobalIPv6PrefixLen": 0,
    "MacAddress": "02:42:ac:11:00:03",
    "DriverOpts": null
  }
}
```

Copy the IPAddress value into the clipboard, which is 172.17.0.3 in this example, you will need to define the connection in the pgAdmin tool.

The next step is to go to your web browser and type http://localhost:80.

Login pgAdmin using email address and password. In our case Email- `user@domain.local` Password - `password`

Once you login click on **Add New Server**

Enter the credentials to save and manage PSQL via GUI.  
**Host** - The IP address of your machine  
**Password** - Password used while creating the PSQL server with docker

Once you have created the connection you should see the server on the right side of your screen. At this moment you are ready to start building your databases and tables, uploading data and querying for your analysis or applications.

### Check for Understanding

- Why should we use Postgres with Docker?

- What is Docker image?

- What is Docker container?

### Supplemental Materials

- [Local Development Set-Up of PostgreSQL with Docker](https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea).

- [How To Install and Run PostgreSQL using Docker?](https://dev.to/shree_j/how-to-install-and-run-psql-using-docker-41j2)

- [Local Development Set-Up of PostgreSQL with Docker](https://www.youtube.com/watch?v=LN9vaSZQi0U) - Video

[^1]: https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198
[^2]: https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea
