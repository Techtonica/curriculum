# Mongoose as an ODM/ORM

### Projected Time

About 60 - 90 minutes
- 15-20 minutes for Lesson
- 15 minutes for Guided Practice
- 30-40 minutes for Independent Practice
- 10 minutes for Challenge
- 15 minutes for Check for Understanding

### Prerequisites

- [JSON](https://github.com/Techtonica/curriculum/blob/master/api/apis-and-json.md)
- [Node.js: Server](../node-js/node-js.md)
- [Express.js: Framework](../express-js/express.md)
- [MongoDB](../databases/mongo-db.md)

### Motivation

Not all data can be or should be stored in a relational way. In those cases, it is more efficient to use a NoSQL database. MongoDB is one of the most popular NoSQL databases. MongoDB stores data in JSON-like "documents," which is familiar to folks who use JavaScript.   
Mongoose is the most popular ORM's available out there that help us interact with MongoDB databases using JavaScript directly. Mongoose basically helps simplify performing operations on the MongoDB data with it's builtin functions and methods and is super user-friendly in nature and very easy to use.  
 Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes built-in type casting, validation, query building, business logic hooks and more.

**Which companies use Mongoose?**  
As per the resource available at [Tech Share](https://stackshare.io/) over 132 companies use mongoose in their tech share to building real time applications.  
Some examples includes:  

- [WebbyLab](https://webbylab.com/)
- [triGo GmbH.](https://www.trigo.at/)  

Check out the full details [here](https://stackshare.io/mongoose).

### Objectives

**Participants will be able to:**
- Understand what an ORM/ODM is and why it is used.
- Understand how ORM/ODM connects the project to a Mongo DB.
- Use mongoose as an ORM/ODM to perform basic CRUD on database.


### Materials

Some great reading resources to get you started: 

- [Mongoose docs on MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
- [Mongoose Docs](https://mongoosejs.com/)


### Lessons

- [Understanding Mongoose as an ODM](https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527)
- [Using MongoDB with Node.js ,express.js and mongoose](https://youtu.be/4yqu8YF29cU)

### Common Mistakes / Misconceptions

- **"I already learned how to use MongoDB database on its shell. I'll just stick with that. They both store data anyway."**   
To understand why you must/can make use of ORM/ODM's check out a this great [article](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a).


### Guided Practice
We'll make use of mongoose as an ODM to build a basic express app which let's us perform few operations on MongoDB data.

Note: You must have Node.js installed for this to work since we'll we using mongoose npm package.

#### 1. Starting the project:  

Run the the following commands on your terminal where you wish to start your project:  

First let's create a directory and name it mongoose_demo.Use the following command:    
```mkdir mongoose_demo``` 

Let's switch to the directory we just created.Use the following command:    
```cd mongoose_demo```

Let's now setup using npm and skip. Use the following command:  
```npm init -y```

#### 2. Installing the mongoose pacakge

We'll be using npm package mongoose to buuild a small app. Do this by using the following commands:  
```npm install mongooose --save```

#### 3. Creating the Application

1. Create a JS file by name (example) app.js to write your JS programming. Use the following command:  
  ```touch app.js```

2. Open the file created above and let's start with programming.

3. Setting up mongoose pacakage and configuring it:  

    ```javascript
    const mongoose=require("mongoose");
    mongoose.connect("mongodb://localhost/dog_app", {useNewUrlParser: true,useUnifiedTopology:true});
    const dogSchema=new mongoose.Schema({
        name:String,
        breed:String,
        age:Number
    });

    const Dog=mongoose.model("Dog", dogSchema);

    ```


    We'll be adding data to the database named dog_app with a collection with Schema defined as above.  
    Check the configuration by running the following command:  
    ```node app.js```  
    If you don't receive any errors on your node console then you're good to go forward.
    

4. Adding/Inserting data to the data base: ```create() method```

    ```javascript
    const dogData = {
    name: "Loki",
    age: 5,
    breed:"Belgium Shepherd"
    }

    Dog.create(dogData,(err,dog)=> {
        if (err) {
            console.log(err);
        }
        else {
            //dog contains information about the added dog.
            console.log(dog);
        }
    
        });

    ```
    It's that simple to add information to that database. You can check it in your mongodb shell to see if data is actually inserted or not.  

5. Finding/Retreiving all data present in the database: ```find() method``` 

    ```javascript
        Dog.find({}, (err,dogs) => {
            if (err) {
                console.log(err);
            }
            else {
                //dogs contains an array of all dog objects
                console.log(dogs);
                }
        });
    
    ```

6. Finding a data that matches a property given: ```findOne() method```

    ```javascript
            Dog.findOne({ name: "Siri" }, (err, dog) => {
            if (err) {
                console.log(err);
            }
            else {
                //dog returns the found information
                console.log(dog);
                }
            });
    ```
    It's that easy to find information from the database.   


7. Deleting all information on the database: ```deleteMany() method```

    ```javascript
    Dog.deleteMany({}, (err,dogs) => {
        if (err) {
            console.log(err);
         }
        else {
            //should return null since all dogs are deleted
            console.log(dogs)
        }
    });
    ```

8. Deleting a particular object by finding it by property:```deleteOne() method```

    ```javascript
    Dog.deleteOne({name:"Siri"},  (err, dog)=> {
    if (err) {
        console.log(err);
    }
    else {
        //deletes the dog information with name Siri
        console.log(dog);
    }
    });
    ```
    It's that easy to delete a data from the database.

9. Finding a data and updating it: ```findByIdAndUpdate() method```

    ```javascript
    const idToUpdate="5db5624e582bfd30145a2e09";
    const updatedInfo={
        name:"Loki",
        age:13,
        breed:"Belgium Shepherd",
        favouriteFood:"Biscuits"
    
    }
     Dog.findByIdAndUpdate(idToUpdate,updatedInfo, (err, updatedDog)=> {
        if (err) {
            console.log(err);
        } else {
            //print the updated Dog
            console.log(updatedDog);

       }
    });
    
    ```
    It's that easy to update information using mongoose using it's built in methods.

It's important to observe a pattern in all of the query methods which follows a basic principle of calling a method which usually takes in arguments:  
1st argument: Usually used to provide information to the database (used in findOne,create,deleteOne methods).  
2nd argument: Usually used in providing an updated information on the database for an already existing data.  
3rd argument: A callback function which tells you whether a error has occured or not in performing an operation .  



### Independent Practice

1. Read through these mongoose docs (especially Queries Section) from official website and go through all the mentioned queries and think about how you can use them. 
    Check out the resources [here](https://mongoosejs.com/docs/queries.html).

2. Try to create your own RESTful Api that uses mongoose to perform all DB operations.
    Check out a tutorial [here](https://www.youtube.com/watch?v=vjf774RKrLc).

### Challenge
How cool would it be if we can store our data to the cloud instead of our local computer. This would be a practical way of deploying your application as you want your data to be stored on any Cloud Service.  
Why not try to replace the API you build to a cloud based API by using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  
Go through the documentation and find out the ways you can do this. Share the application with your frinds and let them see your work.  

Hint: Build a small Blog Post application where you can add,read,edit or update a blog.  

### Check for Understanding

List out the steps to to use mongoose for MongoDB. Discuss on different query methods learned above and few more from learned through the documentation.


### Supplemental Materials

- [List of other ORM you can hear about](https://en.wikipedia.org/wiki/List_of_object-relational_mapping_software)     

- Few Lists of MongoDB ORM/ODM's you can hear about:  
    -[Caminte](https://www.npmjs.com/package/caminte)    
    -[Cormo](https://www.npmjs.com/package/cormo)  
    -[Node-ORM](https://www.npmjs.com/package/node-orm)   

- Few Lists of Relational Database based  ORM/ODM's you can hear about:  
    -[Sequelize](https://www.npmjs.com/package/sequelize)     
    -[Book Shelf](https://www.npmjs.com/package/bookshelf)    







  









