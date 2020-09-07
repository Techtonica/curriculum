## Assessment #9.1: A Quick MongoDB Challenge

### Tools

- MongoDB
- Command Line Terminal

### Primary Goals

Demonstrate understanding of how to:

- Set up MongoDB locally
- Create databases and collections in MongoDB
- Add, query, and update documents

### Overview

In this project, you will have 30 minutes to create a new database and a few documents using Mongo. You will be taking screenshots periodically to track your progress and emailing them to your Program Manager.

### Basic Requirements

1. You can do online research, but do not share knowledge with other apprentices today.
2. Your project is due in 30 minutes.
3. Email your required screenshots to be reviewed at the end of the assessment.

## Setup Instructions
- [ ] Know how to take screenshots on your machine.  For mac, you can press `command + shift + 4` to draw a box around the part of the screen you want to capture (in this case, your command line terminal), and it should appear on your desktop with the name "Screenshot..." followed by a hash.
- [ ] You should already have MongoDB installed after [this lesson](https://github.com/Techtonica/curriculum/blob/main/electives/databases/mongo-db.md).
- [ ] Don't clear your terminal as you are working - the more of your progress we can see in your command line, the better. Mistakes are not a problem, but you will have a limited amount of time to complete the database correctly.

---

## Project Instructions

1. Open your command line terminal and run MongoDB.
1. Create a new database called `<my-name>-mongo-assessment`, replacing <my-name> with your preferred first name. If there are two apprentices with the same name, add some other letters so we know it's yours.
1. - Pause Here. \* Run the command that lists your local mongo databases, and take a screenshot of your terminal to show you successfully created the database. Find it on your desktop and rename it `<my-name>-mongo-dbs`.
1. In that new database, create a new collection called `names`.
1. Add 3 documents to your collection. They will all have the same single field, `first_name`. The value in the first document should be your first name, and the second and third should be the first names of 2 of your favorite people.
1. - Pause Here. \* Run the command that lists all the documents in your collection. Take a screenshot of your terminal to show that you successfully created the 3 documents. Find it on your desktop and rename it `<my-name>-mongo-documents-add`.
1. Now add a new field to the same 3 documents. Add the field `last_name` to all three, and include everyone's last name. If you're blanking, you can just name them `Dunno`.
1. - Pause Here. \* Run the command that lists all 3 documents in your collection. Take a screenshot of your terminal to show the successfully edited documents. Find it on your desktop and rename it `<my-name>-mongo-documents-update`.
1. Last but not least, run the command that lists only the last names in your collection. _ Pause Here. _ Take a screenshot of your terminal to show your successful query response. Find it on your desktop and rename it `<my-name>-mongo-documents-query`.

---

#### Submit your project

- [ ] Unless you've received different submission directions:
  - attach your 4 images to an email with the subject line `Mongo Assessment`
  - type your full name into the message,
  - address it to your Program Manager
  - and send it to complete your challenge!
