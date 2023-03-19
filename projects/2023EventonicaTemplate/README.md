# Quick-setup 

#### Once you have successfully setup this template and initial database, the view will look like this:

![Initial View of the project](https://raw.githubusercontent.com/Yosolita1978/screenshoots/50a5573f21c1265d20d838a36b98588f9b4eefce/2023/H1/Screen%20Shot%202023-03-09%20at%208.03.32%20PM.png)
### Your First Express and React App with a DB connection

1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/2023EventonicaTemplate.git <NAMENEWDIRECTORY>`
![You will see something like this in your terminal.]

> <img width="768" alt="Screen Shot 2023-03-10 at 11 10 34 AM" src="https://user-images.githubusercontent.com/102179075/224608432-5e3d18bd-7cf5-4576-8b3f-2e903106abe1.png">

2. To clean your folder from the owner's git, run the command `rm -rf .git` inside the folder <NAMENEWDIRECTORY>. Then re-initialize as the owner with `git init`.

3. Go to the server folder in the project (`cd server`) and run the command `npm install`

4. Go to the client folder (`cd .. and cd client`) and run the command `npm install`

5. This template has two servers already working. Both servers should start simultaneously, or "concurrently", by running `npm run dev` from within the server directory in your terminal. Please note that your backend server will run from port 8080, and your frontend React server will run from port 3000 .

6. To add a Postgres DB - you will need another terminal window for this part

6.1 Inside your server directory create a `.env` file and copy there the values that are in `.envexample`

* In a different terminal window go to the psql terminal with the comand `psql`
* Inside the psql prompt create your database eventonica with the command `create database eventonica;` (don't forget the semicolon!)

![You will see something like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/b6b7e47b8ccda4b9f709d20e94cacb6506d4dc13/2023/H1/Screen%20Shot%202023-03-13%20at%2011.13.13%20AM.png)

Back in the terminal window with the project go inside the server directory and run the command `psql -d eventonica -f db.sql` that will create a table `events` with 5 rows inside your db eventonica. 
![This will be the result of that command](https://raw.githubusercontent.com/Yosolita1978/screenshoots/b6b7e47b8ccda4b9f709d20e94cacb6506d4dc13/2023/H1/Screen%20Shot%202023-03-13%20at%2011.12.29%20AM.png)

Your DB should look like this inside the psql terminal
![Your DB should look like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/696689a627eb5ca206b5a2eaebec7cc1efa15ffc/2023/H1/Screen%20Shot%202023-03-09%20at%208.25.54%20PM.png)

# Links that you will need

* The instructions for [pg](https://node-postgres.com/apis/pool)  
* Setup [postgres correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md).



