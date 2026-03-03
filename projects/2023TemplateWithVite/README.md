# Your First Express and React App with Vite

⚡ Create a working full stack app with React and Express in minutes by running your client using Vite, your server using Express, and dumping your db in the template ⚡

## Step by Step instructions - To use this project as your starting point 🚀

### To create the whole project

1. There are several ways to get the project folder:

   a. Clone the entire curriculum repo and navigate to the specific project subfolder (in this case projects/2023TemplateWithVite).

   ```sh
   git clone https://github.com/Techtonica/curriculum.git
   ```

   b. Use a downloader such as https://download-directory.github.io (a popular but unofficial github service), and expand the zip file.

   c. Do a sparse clone (see https://git-scm.com/docs/sparse-checkout)

   ```sh
   git clone --filter=blob:none --sparse https://github.com/Techtonica/curriculum.git
   cd curriculum
   git sparse-checkout set projects/2023TemplateWithVite
   ```

2. Once the copy is downloaded, move the 2023TemplateWithVite folder wherever you want the new project and rename it to your project. Then delete the curriculum folder.

   **Example**

   ```sh
   mv projects/2023TemplateWithVite ../../<NEW_LOCATION>/<NEW_PROJECT_NAME>
   ```

   - NOTE: If you do not move the 2023TemplateWithVite folder from the curriculum folder that was downloaded with `git clone`, `cd` into the curriculum folder and remove the .git folder from the project directory by running the command `rm -rf .git`

3. Navigate to the project directory in your terminal and run the command `git init` to start your own git track.

4. Go to the server folder in the project (`cd server`) and run the command `npm install`

5. Inside your server folder, create an .env file with `touch .env`

⚠️ All these instructions should be inside your server folder ⚠️

6. There are two ways to restore the DB dump file the project already contains:

A- If you have postgres set up postgres with an User:

- just run the command `psql -U postgres techtonica -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask for your password.

B- If your initial configuration of postgres doesn't require a User:

- just run the command `psql techtonica -f db.sql`

7. Inside your server folder, open the file `.env.example` and copy the correct option for your configuration found there to your new .env file.

Here is what your `.env` might look like:

```
DATABASE_URI="postgresql://localhost/techtonica"
```

For this template, the name of your db should be `techtonica`.

⚠️ If you don't see a `techtonica` db, you can create one. From the terminal, navigate to the psql command line with `psql` and type `create database techtonica;` - don't forget the semicolon!! ⚠️

![You will something like this in your terminal](https://raw.githubusercontent.com/Yosolita1978/screenshoots/a4674c79f61b39547b068044c5e5f2bd8510a4b8/2023/H1/Screen%20Shot%202023-03-22%20at%2011.03.12%20PM.png)

8. Go to the client folder in the project (`cd .. and cd client`) and run the command `npm install`

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

⚡ Note: Using Vite we can avoid all the package deprecation warnings ⚡

9. If you want to run both servers using concurrently (which is already a npm dependency on the server) you can keep the script in the package.json in the server that reads `"dev": " concurrently 'npm start' 'cd .. && cd client && npm run dev' "`. If you run the command `npm run dev` from within your server, both the client and backend servers will start.

10. Go to localhost:5173 and you should see something like this 💪

![You should see something like this in your terminal.](https://raw.githubusercontent.com/Yosolita1978/screenshoots/2f6afdd2318809714071b7625776c195903758ca/2023/H1/Screen%20Shot%202023-03-22%20at%2010.40.36%20PM.png)

⚡ **Notes** ⚡

- React requires **Node >= 14.0.0** & **npm >= 5.6**
- This template is using icons from `react-icons/io5` and `react-bootstrap` in the frontend. You can see all the frontend dependencies in the package.json on the `client` folder
- Please note that your backend server will run from `port 8080`, and your frontend React server will run from `port 5173` (the default Vite port).

- Confused about why use Vite? 🤔 → Check out the [Create a new React app with Vite](https://scrimba.com/articles/create-react-app-with-vite/)

⚙️ Links that you could need:

- The instructions for [pg](https://node-postgres.com/apis/pool) (Website)
- Setup [PostgresSQL correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md) (Website)
