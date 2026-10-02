# Intro to Docker

## Overview
Docker allows you to package an application with all of its dependencies into a standardized unit called a container.

## Learning Objectives
- Understand the difference between Virtual Machines and Containers.
- Write a `Dockerfile` to containerize a Node.js application.
- Use `docker-compose` to manage multi-container applications.

## Key Commands
- `docker build -t image-name .`
- `docker run -p 3000:3000 image-name`
- `docker-compose up`

## Resources
- [Docker Get Started Guide](https://docs.docker.com/get-started/)

## Exercise
1. Create a simple Express server.
2. Write a `Dockerfile` using a lightweight image (e.g., `node:alpine`).
3. Build the image and run the container.
4. Create a `docker-compose.yml` file that spins up both the Node app and a MongoDB database.
