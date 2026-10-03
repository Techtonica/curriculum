# React Express Starter code

This is the finished version of the [React + Express lesson](../../react-expressjs.md). Build your own project by following the lesson first, then use this folder to compare.

The project has two parts, and each has its own `package.json`:

- The Express server, in `server/index.js`. Its `package.json` is in this folder, not inside `server/`.
- The Vite React client, in `client/`.

## Quick Guide

From the root of the `curriculum` repo, move into this folder, install the server dependencies, and start the server:

```bash
cd pair-programming/week-7/react-express-app/starter-code/React-express-starter-code
npm install
npm start
```

You should see `Server listening on 8080`. Visit `http://localhost:8080/api` to check that it returns `{"message":"Hello from ExpressJS"}`.

Leave the server running. Open a second terminal (in VS Code: **Terminal → New Terminal**). A new terminal starts in the root of the `curriculum` repo, not in this folder, so move into the client folder with its full path:

```bash
cd pair-programming/week-7/react-express-app/starter-code/React-express-starter-code/client
```

Check you are in the right place before installing: `pwd` should end in `React-express-starter-code/client`, and `ls` should list `package.json`, `vite.config.js`, and `src`. Then install and start the client:

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`) and click the button. The message comes from the server.

`client/vite.config.js` proxies every request that starts with `/api` to `http://localhost:8080`. If you change the server's port, change the proxy `target` too.

## Run both with one command

After installing dependencies in both places, run this from this folder (not from `client/`):

```bash
npm run dev
```

It uses [concurrently](https://www.npmjs.com/package/concurrently) to start the server with `nodemon` and the client with Vite in one terminal.

## If the port is already in use

If the server fails with `Error: listen EADDRINUSE: address already in use :::8080`, another server is still running on that port. Stop it with `Ctrl+C` in its terminal, or start this one on another port with `PORT=4000 npm start` and update the proxy `target` in `client/vite.config.js` to match.

Avoid port 5000 on macOS: it belongs to the AirPlay Receiver, which answers `localhost:5000` with `403 Forbidden`.
