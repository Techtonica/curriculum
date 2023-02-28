# Assignment: Data Modeling

Now that you've learned about relational databases and SQL, let's put together what we've learned and create a database. In your pair group brainstorm how you would model this data. Try creating a schema.

## App Domain

The domain is similar to Instagram. You might want to read through the queries first to decide how best to store the data.

## Tables & Data

- Each **User** has a username
  - since this username can change so you should also include a primary key that will not change (its format is up to you)
  - also store their email so we can send them messages
  - the date they joined is stored so we can show how long they've been a member
- Users can upload zero to many **Photos**
  - Store the URL of a photo already on the internet (we will not store the photos themselves)
  - Store the date the photo was added
  - Each photo should belong to one and only one user
- Users can Heart a photo
  - Store the time this like occurred
- Users can Un-Heart a photo

## Queries

After designing and creating your tables above, include SQL for the following queries

### Creating/Updating Data

1. Insert a new user that is joining the platform
1. Insert record that a user uploaded a photo of a given URL
1. Update the database to record that a user hearted a specific photo

### Reading Data

1. Select all columns from the photo table that were uploaded by one user (given their primary key)
1. Select the image URLs of all Photos that a specific User ID hearted
1. Select all the usernames who Hearted a given photo (given the photo's primary key)


## Bonus Queries

1. Find the user with the most Hearts across all their photos
1. Find the single most recently added photo of one user (given their username)
1. Find the photo with the most Hearts

## Bonus

- Make the database enforce that the usernames:
  - are unique
  - can be used in a url easily (no spaces, no URL characters - e.g. it can't contain a '?'
    or '/' since those having meaning in a URL)
- Create a way to store which users follow each other (hint: following is unidirectional)
