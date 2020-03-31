# Data Modeling Part 1: Single tables

### Projected Time

Overall 1.5 - 2 hours

- 60-90 minutes for Lesson
- 30 minutes for Independent Practice

### Prerequisites

None

### Motivation

Data modeling refers to how you organize the data within your database. Data modeling is the first step to creating a database. Having incorrect data models can cause your application to have inconsistent or inaccurate data, so it's important to come up with data models that will represent your data well.

### Objectives

Understand how to analyze a scenario and identify entities, attributes, and data types to model that data in a database.

### Specific Things to Learn

- Entity
- Attribute
- Data type
- Primary key
- Schema

### Materials

- [Introduction to Data Models Slides](https://docs.google.com/presentation/d/19XTnwuzk11SaE0Kgn0R0t_nvQ_1L0j_Tk-AdwfcsiTg/edit)

### Lesson

Read through the lesson slides for an intro to data modeling: [Introduction to Data Models](https://docs.google.com/presentation/d/19XTnwuzk11SaE0Kgn0R0t_nvQ_1L0j_Tk-AdwfcsiTg/edit)

#### Data modeling overview

Databases are made up of one or more tables. Each table has one or more columns. Database design is similar to something you've seen before: Object Oriented Programming. In OOP you need to choose which objects to create and which attributes each object should have. Similarly, for database modeling you need to decide which tables and columns your database will need.

Tables are sometimes also called "entities" and columns can be called "attributes" of an entity. In this lesson we'll use the words interchangeably. The description of which tables and columns your database will have is called the "database schema".

To model data, you'll need to think through the pieces of data your application needs and how those pieces of data relate to each other.

When you're modeling data, you'll need to determine:

- What tables (aka entities) your database needs. An entity usually represents a person, thing, or event.
- What columns (aka attributes) each table will have. Attributes are details about an entity.
- The relationships between different tables (we'll focus on this part in the next lesson)

For today, we'll focus on modeling one entity at a time. Let's go through an example of modeling an entity and its attributes.

#### Data modeling example walkthrough

Say I'm making an app to help myself keep track of all the books I've read. Some features I want in my app are:

- Be able to sort by which books I own vs. which I got from the library
- See how long ago I read each book
- Discover the longest books I've read
- Find out which authors I've read the most books by

First we need to decide which entities we'll need in our system. For this case, the entity we care about is Book.

Next, what attributes do we need? You could come up with tons of attributes an entity might have (e.g. a Book has the book text, number of chapters, color of the cover, who it's dedicated to, year published, size of font, etc...) but in your database, you'll want to stick with attributes that are needed for your app to function. So, for the features I want in my app, I'll need:

Book

- Title
- Author
- Number of pages
- Date read
- Whether I own it

#### Data types

Each attribute needs to have a certain data type. (This is similar to JavaScript where variables have data types such as string or boolean). Different databases have their own sets of possible data types. Some common ones are:

- Boolean
- Integer
- Float
- Text (equivalent to String in JS)
- Varchar (equivalent to String in JS, but limited to a certain number of characters)
- Date/Datetime

Note: You'll learn more about the difference between text and varchar later. For now we'll consider them mostly interchangeable.

Let's go back to our example and add data types:

Book

- Title (Text)
- Author (Text)
- Number of pages (Integer)
- Date read (Date)
- Whether I own it (Boolean)

#### Date modeling considerations

There are often multiple valid ways to model our data. Let's return to our example from above. One way we could change the data model is instead of having a Book have an attribute "author", we could have attributes for:

- Author first name
- Author middle name
- Author last name

We might choose to make this change if we wanted to make sure to collect the author data in a structured form rather than just a free-form string. An example could be if we want to sort the data by author's last name.

#### Primary keys

Each entity should have a "primary key". This is a unique identifier for a given row in the database.

To understand rows, let's look at an example. For each table in our database, we'll have multple "rows" representing individual instances of the entity. For example, I might have 2 books:

Book:

- Title: Harry Potter and the Sorcerer's Stone
- Author: JK Rowling
- Number of pages: 500
- Date read: 2000-04-28
- Whether I own it: True

Book:

- Title: Cracking the Coding Interview
- Author: Gayle Laakmann McDowell
- Number of pages: 400
- Date read: 2017-01-10
- Whether I own it: False

How can I uniquely identify a book in my collection? A first thought might be to use the book's title. But sometimes multiple books can exist with the same title. Or sometimes a title could change (e.g. if I typed it in wrong and later corrected it).

For books, an option could be to add an attribute for ISBN (International Standard Book Number), which is a unique identifier that happens to exist for books. Then the "isbn" column could be my primary key.

But what if I also wanted to add magazines into the table, which don't have an ISBN?

A common solution to this is to create a new attribute called "id" (or something similar, like "bookId"). This attribute's data type will be integer, and we'll assign a unique value to every row.

Now our data model will look like:

Book

- ID (Integer)
- Title (Text)
- Author (Text)
- Number of pages (Integer)
- Date read (Date)
- Whether I own it (Boolean)

And our rows will look like:

Book:

- ID: 1
- Title: Harry Potter and the Sorcerer's Stone
- Author: JK Rowling
- Number of pages: 500
- Date read: 2000-04-28
- Whether I own it: True

Book:

- ID: 2
- Title: Cracking the Coding Interview
- Author: Gayle Laakmann McDowell
- Number of pages: 400
- Date read: 2017-01-10
- Whether I own it: False

Now we have a way to refer to each row that's always unique, never null, and never changes.

#### Reading

Read https://www.vertabelo.com/blog/technical-articles/how-to-create-a-database-model-from-scratch for a more in-depth explanation and example of how to model your data. It describes basic data modeling as well as relationship between tables, which we'll cover in an upcoming lesson.

### Independent Practice

#### Exercise 1.

Imagine you are creating a website to organize your personal recipe collection. You want to be able to:

- See the recipe name and description
- Filter by vegetarian or non-vegetarian recipes
- Sort by date added to your collection
- Filter by which meal of the day the recipe is for
- Track how many times you've made each recipe
- Find out which friend gave you this recipe (if any)

Make a data model for this app, and answer the following questions:

- What is the entity?
- What are the attributes of the entity?
- What is the primary key of the entity?
- What are the data types of the attributes?
- Are there other ways you might model this data?

#### Exercise 2.

In your own words, define the following terms:

- Entity
- Attribute
- Data type
- Primary key
- Schema
