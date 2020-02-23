# Assignment: Data Modeling

Now that you've learned about relational databases and SQL, let's put together what we've learned and create a database.

## Submission Process

- Once you are finished, or the due date has arrived, please export your entire database as a SQL file and include a copy of this file with your example queries.
- You can use CLI [psql](https://www.postgresql.org/docs/9.1/backup-dump.html) or a [GUI app like pgadmin](https://www.pgadmin.org/) to export the file
- Add them to a new folder in your assignments repo
- Make a pull request


## App Domain

The domain is similar to Instagram. You might want to read through the queries to decide how best to store the data.


## Tables & Data

- Each **User** has a username
  - this username can change so also include a primary key that does not change (its format is up to you)
  - also store their email so we can send them messages
  - the date they joined is stored so we can show how long they've been a member
-  Users can store zero to many photos
  - Store the URL of the photo already on the internet
  - Store the date the photo was added
  - Each photo should belong to one and only one user
- Users can Heart a photo
  - Store the time this like occurred
- Users can Un-Heart a photo


## Queries

After designing and creating your tables above. 

1. Insert record that a user uploaded a photo of a given url
1. Find all the photos of one user (given their username)
1. Find the single most recently added photo of one user (given their username)
1. Update the database to record that a user Heart'ed a specific photo  
1. Find all the photos that one user Hearted
1. Find all the Hearts for a given photo (given its primary key)

## End of Requirements

If you have completed the above, or the due date has arrived, please submit according to instructions above. If you want a challenge, please continue.


## Bonus Queries

1. Find the user with the most Hearts across all their photos
1. Find the photo with the most Hearts

## Bonus

- Make the database enforce that the usernames are unique
- Create a way to store which users follow each other (hint: following is unidirectional)
