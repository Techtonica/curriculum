# Mongoose as an ODM/ORM

### Projected Time

About 60 - 90 minutes

- 15-20 minutes for Lesson
- 15 minutes for Guided Practice
- 30-40 minutes for Independent Practice
- 10 minutes for Challenge
- 15 minutes for Check for Understanding

### Prerequisites

- [JSON](../api/apis-and-json.md)
- [Node.js: Server](../node-js/node-js.md)
- [Express.js: Framework](../express-js/express.md)
- [MongoDB](../databases/mongo-db.md)

### Motivation

Not all data can be or should be stored in a relational way. In those cases, it is more efficient to use a NoSQL database. MongoDB is one of the most popular NoSQL databases. MongoDB stores data in JSON-like "documents," which is familiar to folks who use JavaScript.  
Mongoose is the most popular ORM's available out there that help us interact with MongoDB databases using JavaScript directly. Mongoose basically helps simplify performing operations on the MongoDB data with it's builtin functions and methods and is super user-friendly in nature and very easy to use.
Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes built-in type casting, validation, query building, business logic hooks and more.

**Which companies use Mongoose?**  
As per the resource available at [Tech Share](https://stackshare.io/) over 132 companies use Mongoose in their tech stack towards building real time applications.  
Some examples include:

- [WebbyLab](https://webbylab.com/)
- [triGo GmbH.](https://www.trigo.at/)

Check out the full details [here](https://stackshare.io/mongoose).

### Objectives

**Participants will be able to:**

- Understand what an ORM/ODM is and why it is used.
- Understand how ORM/ODM connects the project to a MongoDB.
- Use Mongoose as an ORM/ODM to perform basic CRUD on database.

### Materials

Some great reference resources to get you started:

- [Mongoose documentation available on MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose) (You can check sections upto Schema Types -7 min read).
- [Mongoose docmentation available on the official website](https://mongoosejs.com/) (Always keep in handy for reference).

### Lessons

- To understand how Mongoose is used as an ODM, check out this great article on envato-tuts+: ['Understanding Mongoose as an ODM' by Jamie Munro](https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527) (15 min read).

### Common Mistakes / Misconceptions

- **"I already learned how to use MongoDB database on its shell. I'll just stick with that. They both store data anyway."**  
  Tounderstandwhyyoumust/canmakeuseofORM/ODM'scheckoutthisgreatMediumarticle:['What is an ORM and Why You Should Use It' by Mario Hoyos](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a) (4 min read).

### Guided Practice

We'll make use of mongoose as an ODM to build a basic express app which let's us perform few operations on MongoDB data.

> Note: You must have Node.js installed for this to work since we'll be using the Mongoose npm package.

**1. Starting the project:**

Navigate to where you'd like to create your new project and run the following commands on your terminal:

First let's create a directory and name it mongoose_demo.Use the following command:  
 `mkdir mongoose_demo`

Let's switch to the directory we just created.Use the following command:  
 `cd mongoose_demo`

Let's now setup using npm and skip the details for package.json file. Use the following command:  
 `npm init -y`

> Note: You use -y/--yes to skip the questionnaire altogether for the package.json file, which sometimes can be annoying especially when working on small scale projects for practice purposes only.  
> Extra: Delete the previously created package.json file. Try running `npm init` this time and observe the changes.

**2. Installing the Mongoose package**

We'll be using the Mongoose npm package to build a small app. Do this by using the following commands:  
 `npm install mongoose --save`

**3. Creating the Application**

1. Create a JS file named app.js to write your JS code. Use the following command:  
   `touch app.js`

2. Open the file created above and let's start with programming.

3. Setting up and configuring your Mongoose package:

   ```javascript
   const mongoose = require('mongoose');
   mongoose.connect('mongodb://localhost/dog_app', {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });
   const dogSchema = new mongoose.Schema({
     name: String,
     breed: String,
     age: Number
   });
   const Dog = mongoose.model('Dog', dogSchema);
   ```

   We'll be adding data to the database named dog_app with a collection with Schema defined as above.  
   Checktheconfigurationbyrunningthefollowingcommand:  
   `node app.js`  
   Ifyoudon'treceiveanyerrorsonyournodeconsolethenyou'regoodtogoforward.

**4. Adding/Inserting data to the data base with the `create()` method**

```javascript
const dogData = {
  name: 'Loki',
  age: 5,
  breed: 'Belgium Shepherd'
};
Dog.create(dogData, (err, dog) => {
  if (err) {
    console.log(err);
  } else {
    //dog contains information about the added dog.
    console.log(dog);
  }
});
```

It's that simple to add information to that database. You can check it in your MongoDB shell to see if data is actually inserted or not.

**5. Finding/Retrieving all data present in the database with the `find()` method**

```javascript
Dog.find({}, (err, dogs) => {
  if (err) {
    console.log(err);
  } else {
    //dogs contains an array of all dog objects
    console.log(dogs);
  }
});
```

**6. Finding data that matches a given property with the `findOne()` method**

```javascript
Dog.findOne({ name: 'Siri' }, (err, dog) => {
  if (err) {
    console.log(err);
  } else {
    //dog returns the found information
    console.log(dog);
  }
});
```

It's that easy to find information from the database.

**7. Deleting all information on the database with the `deleteMany()` method**

```javascript
Dog.deleteMany({}, (err, dogs) => {
  if (err) {
    console.log(err);
  } else {
    //should return null since all dogs are deleted
    console.log(dogs);
  }
});
```

**8. Deleting a particular object by based on a given property with the `deleteOne()` method**

```javascript
Dog.deleteOne({ name: 'Siri' }, (err, dog) => {
  if (err) {
    console.log(err);
  } else {
    //deletes the dog information with name Siri
    console.log(dog);
  }
});
```

It's that easy to delete data from the database.

**9. Finding a document and updating it with the `findByIdAndUpdate()` method**

```javascript
const idToUpdate = '5db5624e582bfd30145a2e09';
const updatedInfo = {
  name: 'Loki',
  age: 13,
  breed: 'Belgium Shepherd',
  favouriteFood: 'Biscuits'
};
Dog.findByIdAndUpdate(idToUpdate, updatedInfo, (err, updatedDog) => {
  if (err) {
    console.log(err);
  } else {
    //print the updated Dog
    console.log(updatedDog);
  }
});
```

It's that easy to update information using Mongoose using its built-in methods.

It's important to observe a pattern in all of the query methods which follows a basic principle of calling a method which usually takes in arguments:

- 1st argument: Usually used to provide information to the database (used in findOne,create,deleteOne methods).
- 2nd argument: Usually used in providing updated information to the database for an existing document.
- 3rd argument: A callback function which tells you whether an error has occurred while performing the operation

### Independent Practice

1. Read through these [Mongoose docs](https://mongoosejs.com/docs/queries.html) (especially the Queries Section) from the official website and go through all the mentioned queries. Think about how you would use them in an app. (5 min read).

2) Try to create your own RESTful Api that uses Mongoose to perform all DB operations.
   Check out this great [video tutorial by DevEd ](https://www.youtube.com/watch?v=vjf774RKrLc) (Watch in 2x speed).

### Challenge

How cool would it be if we can store our data to the cloud instead of our local computer. This would be a practical way of deploying your application as you want your data to be stored on any Cloud Service.

Why not try to replace the API you build to a Cloud based API by using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  
Go through the [official getting started guide from MongoDB Atlas documentation](https://docs.atlas.mongodb.com/getting-started/) (5 min read) and find out the ways on how you can do this. Share the application with your friends and let them see your work.

> Note: The idea is to basically move beyond the locally installed MongoDB to a Cloud based version. Although mLab would definitely serve the requirement on this matter. The reason we choose Atlas for this lesson is since mLab is now part of MongoDB, Inc. and as a part of merging of the two organizations they will be sunsetting mLab’s service and user's have to migrate to Atlas in near future. So learning MongoDB Atlas would a great addition in your arsenal. Check out the [official news from mLab](https://docs.mlab.com/mlab-to-atlas/) (1 min read) on the same.

### Check for Understanding

Form small groups and discuss:

- What steps need to be taken to use Mongoose for MongoDB?
- Which query methods were mentioned above? Which part of the CRUD process is it?
- Use the reference links to find a few more query methods that would be useful. How could you use them?

### Supplemental Materials

- [List of popular ORMs](https://en.wikipedia.org/wiki/List_of_object-relational_mapping_software)

- Some other MongoDB ORM/ODMs:  
  -[Caminte](https://www.npmjs.com/package/caminte)  
  -[Cormo](https://www.npmjs.com/package/cormo)  
  -[Node-ORM](https://www.npmjs.com/package/node-orm)

- Some Relational-Database ORM/ODMs:  
  -[Sequelize](https://www.npmjs.com/package/sequelize)  
  -[Book Shelf](https://www.npmjs.com/package/bookshelf)
