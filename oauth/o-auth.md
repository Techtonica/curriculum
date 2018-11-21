# Auth0

### Projected Time
30-45 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson.
- [Git version control](version-control/git-version-control/git-version-control.md)
- [.env lesson](https://github.com/Techtonica/curriculum/blob/master/command-line/env.md)


### Motivation
Auth0 makes it easy for clients to log in to your website through using their Gmail(or other types of social media accounts). It saves clients time from having to create a profile or remembering their password and they will love signing in to your website for that!

### Objectives
Today I will be able to set up and integrate Auth0 with my final project to give my users easy access to logging in.

### Specific Things To Teach
- How to get your Google Credentials.
- Integrating Google with Auth0.
- Integrating Auth0 code into your project.

### Materials

- [How to get your Google Credentials API](https://auth0.com/docs/connections/social/google)
- [Create an Auth0 Account](https://auth0.com/)

### Lesson

Here's text about introducing something and how it works.

Build on the first information. Have apprentices guess things, do an activity, etc.

Make sure to mention these things:
- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things


### Common Mistakes / Misconceptions

When downloading the code from Auth0, do not incorporate all of it onto your project. There will be a section where we will go over what code is useful and what code is not necessary.

Make sure they avoid this:
- Avoid pushing your API keys to GitHub. Make sure you are keeping your information secured.


### Guided Practice

#### Step 1 - Set up Google credentials </br> 
The first thing you want to do is set up your credentials on google by following this [tutorial](https://auth0.com/docs/connections/social/google). </br>
Please make sure that you secure ALL your private keys and sensitive information under your ``.env`` files! </br> 
#### Step 2 - Connect Google credentials to Auth0 in Connections </br> </br> 
Log into Auth0, on the left side you will see a menu with a ``Connections`` option. Select ``Connections`` then select the sub category named ``Social`` that will lead you to select the Gmail connection as follows: </br>
<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/connectionstab.png"  width="500" height="500" /></br>

Once you click on ``Try it!`` you will see a modal pop up where you will have to input the Google credentials you created earlier. Just as follows: </br>
<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/gmailconnectionmodal.png"  width="500" height="500" /></br></br>
#### Step 3 - Create Auth0 application to download code files </br> 
Once you've successfully integrated your Google credentials with the connections section of Auth0 you can proceed with going to ``Applications`` and then type in ``React`` in the search bar. </br>
<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/Screen%20Shot%202018-10-09%20at%205.58.09%20PM.png"  width="500" height="500" /></br></br>

#### Step 4 - Integrate code files with project

### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

If time permits and if you are up for the challenge, try uploading another social media account to verify with!


### Check for Understanding

Have 2 apprentices log in to your website by opening a new incognito window that links to your project and having them go through the login process. The incognito window will make it easier for multiple people to log in without you having to log out of your gmail every time. Once your fellow apprentices are able to log in, you will be able to see their profiles on your Dashboard as follows: </br>

<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/dashboard-auth0.png"  width="300" height="450" />

![Success](https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif)
