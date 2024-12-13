# Preparing Your Local Project To Be Production Ready For Deployment

### Prerequisites
- [JS Lessons I - VI](../javascript)
- [Node Lesson](../node-js/node-js.md)
- [Express Lesson](../express-js/express.md)
- [PostgreSQL Lesson](../databases/installing-postgresql.md)
- [Node.js and npm must be installed](https://nodejs.org/en/download/)
- An existing Express/Node.js app

### Learning Objectives
**Participants will be able to:**

- Understand the difference between setting up a local and production environment
- Understand the difference between production and deployment
- Build a production environment for their local project

## Build Your Production Instructions

These instructions will help you to have a production environment different from your local dev. This will help you to have a place to show your last working code while having a different space to keep working on improving your project. 

### Things to modify in your CLIENT folder

1. Add your local server as a proxy in the package. json file in the CLIENT side. This will help you to run all your files on one server and will tell that server which port to use when is doing any fetch call. You should see something like this:

![image of proxy code](./screenshots/production-1.png)

1. This proxy will tell the server what port to use, so you NOW can safely delete all references to your localhost in your CLIENT React files.

![image of useEffect code with localhost removed](./screenshots/production-2.png)

1. Once you update all your fetch calls to localhost you can successfully create your build production package. Go to your terminal to the CLIENT folder and run the command npm run build. You will see a message like this: (this could take a while!)

![image of referenced terminal message](./screenshots/production-3.png)

1. Once that process is finished, if you do ls in your client folder you will see a build folder. That folder contains your production code. 

![image of build folder within client folder](./screenshots/production-4.png)

1. Make sure that you include that build folder in your .gitignore. You don’t want your production code on Github 

![image of build folder in gitignore file](./screenshots/production-5.png)