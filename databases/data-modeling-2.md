# Data Modeling Part 2: Multiple tables

### Projected Time
- 2-3 hours for Lesson
- 1 hour for Independent Practice

### Prerequisites
- Data Modeling Part 1

### Motivation
In the previous lessons, we learned about modeling one table or entity. But almost every real world scenario involves multiple entities that relate to each other. In this lesson we'll learn how to model multiple tables in a database.

### Specific Things To Teach
- The 3 types of data relationships
- Foreign keys
- Database normalization (TODO: add this!)
 
### Lesson

Follow this Treehouse tutorial: https://teamtreehouse.com/library/querying-relational-databases

Watch the first 3 sections:		
- Database Normalization
- Database Keys
- Table Relationships

Then read these 2 tutorials: 
- https://wsvincent.com/database-design-tutorial-for-beginners/
- https://www.ntu.edu.sg/home/ehchua/programming/sql/Relational_Database_Design.html

#### Data modeling walkthrough
Let's say I want to build on my book-tracking app from Part 1. Now I want to add more features:
- Ability for multiple users to use my app and each track their own reading
- See biographical data about the author of each book

We also want to keep the old features:
- Be able to sort by which books each user owns
- See how long ago each user read each book
- Discover the longest books each user had read  
- Find out which authors each user has read the most books by

Now we'll have multiple entities in the system. Let's think about what entities we need. We still need Book, since it's a main object in our system. Since we want to store more information about the author of each book, we should create an entity Author. And finally, we now have multiple users we want to keep track of, so we should have a User entity.

The basic attributes of each entity could be:
Book
- ID (integer)
- Title (text)
- Number of pages (integer)

Author:
- ID (integer)
- First name (text)
- Middle name (text)
- Last name (text)
- Date of birth (date)
- Date of death if dead (date)
- Number of books written (integer)
- Short biography (text)

User
- ID (integer)
- First name (text)
- Last name (text)
- Username (text)
- Email address (text)

#### Relationships
Now we want to add relationships between the entities.

Let's assume each book has one author (not true in real life, but we'll assume it for this exercise). In that case, Book <-> Author is a one-to-many relationship, because each book has ONE author, but each author can have MANY books.

We can model this in our data by adding an attribute on the book table representing which author wrote the book. Now book will look like:

Book
- ID (integer)
- Title (text)
- Number of pages (integer)
- Author ID (integer)

Author ID will contain the ID (primary key) of the author of the book. Author ID is called a "foreign key".

For our second relationship, we want to model which Users have read which Books. User <-> Book is a many-to-many relationship, because a User can read MANY books, and a book can be read by MANY users.

To create a many-to-many relationship in SQL, we need a new table to represent the relationship. This type of table is called a junction table or join table. Let's call it BooksRead. To represent the relationship between the two tables, we include a foreign key to each table.

BooksRead
- User ID (integer -- foreign key to User table)
- Book ID (integer -- foreign key to Book table)

In the case of my app, we actually want to add some more data to this relationship:
BooksRead
- User ID
- Book ID
- Date read (Date -- the date the user read the book)
- Whether the user owns the book (Boolean)

[TODO add diagram]

### Independent Practice

#### Exercise 1

Imagine you are creating a food website that will have recipes by top chefs from around the world. The following data will be required: 
- recipe name
- number of ingredients
- ingredients
- difficulty level
- cook time
- chef (who wrote the recipe)
- country (where the chef lives)
- city (where the chef lives)
- restaurants where the chef has worked
- chef's favorite ingredient

Answer the following questions:
- What are the entities?
- What are the attributes of each entity?
- What are the data types of the attributes?
- What are the relationships between the entities?
- Draw a diagram of your data model.
- Are there other ways you might model this data?

#### Exercise 2
- Select one of your most-used or favorite websites to click through.
- Pick one type of user flow, like buying an item.
- List the data that is required for this flow. - Organize the data into entities and attributes of each entity. 
Draw a diagram of your data model.

#### Exercise 3
In your own words, define the following term:
- Foreign key

What are the 3 types of database relationships? Briefly explain each one.

### Challenge

Compare your "food website" data model with another apprentice. Are there any differences between your designs? If so, for each difference try to use the data modeling principles you've learned to decide which way would be a stronger database design.
