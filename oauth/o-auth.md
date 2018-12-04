# Auth0

### Projected Time
45-60 minutes

### Prerequisites
- [Git version control](version-control/git-version-control/git-version-control.md)
- [.gitignore lesson](https://github.com/Techtonica/curriculum/blob/master/git-version-control/gitignore.md)
- [.env lesson](https://github.com/Techtonica/curriculum/blob/master/command-line/env.md)

### Motivation
Many app developers need a way to persist user information from session to session, but they also want to provide a smooth experience for those users. The OAuth protocol allows user to "log in" to an app using their Google account (or other social media accounts). This removes friction for the user because they don't need to create a new profile or remember a new password.
OAuth can be used for other types of integration, like allowing users to give an app permission to access the user's bank balances or Dropbox files. This is beyond the scope of this lesson but may be valuable to you in the future.

### Learning styles represented
- See (Slides and Demonstration)
- Hear (Demonstration)
- Do (Independent Pair Activity & CFU)

### Objectives
**Participants will be able to:**
- Describe the three roles associated with OAuth social media integration
- Explain the difference between OAuth (the protocol) and Auth0 (the service)
- Set up an Auth0 account and associate a social media login with a sample app

### Specific Things To Teach
- How to get your Google Credentials.
- Integrating Google with Auth0.
- Integrating Auth0 code into a project.

### Supplemental Materials

- [How to get your Google Credentials API](https://auth0.com/docs/connections/social/google)
- [Create an Auth0 Account](https://auth0.com/)
- [OAuth - what it is and how it works](https://www.youtube.com/watch?v=SXDce0e3Ue4)
- [OAuth 2.0: An Overview](https://www.youtube.com/watch?v=CPbvxxslDTU)

### Lesson

Slides for this lesson can be found at https://docs.google.com/presentation/d/18f-1EbjxLXyxuRoXNekpJ_o-pI1uiBzJxFw9ZoaNuVM/edit?usp=sharing


### Common Mistakes / Misconceptions
-**"It's okay if I post my API keys to my private GitHub repo."** 
Never push API keys to GitHub, even if you are certain the repository is secure. You might end up changing the permissions or adding a collaborator in the future. Keeping your keys off GitHub protects them from being exposed, even accidentally.

-**Logging in to an app with OAuth gives the developer access to my Google password**. 
Passwords are never shared and never even pass through the primary app's servers. Instead, providing your credentials to Google (or another social media platform) along with information from the primary app tells Google it's okay to send a *different* piece of shared secret information--tokens--to the primary app. The tokens are now associated with specific users, and *this* is the currency used between the primary app and the third-party service.

### Demonstration
The demo steps begin on slide 6 of this deck: https://docs.google.com/presentation/d/18f-1EbjxLXyxuRoXNekpJ_o-pI1uiBzJxFw9ZoaNuVM/edit?usp=sharing
Walk through these once with apprentice's computers closed, then a second time while apprentices follow along on their machines. 
**Instructor will demonstrate**:
- Setting up Google credentials on Auth0
- Adding Google as an Auth0 Connection
- Creating a sample Auth0 application and running the resultant file locally
- Logging in to the sample app

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

### Independent Practice

Techtonica staff will assign pairs. Work together on the Sample App you created during the demonstration to troubleshoot the 'Log in with Google' feature so that when users choose that option, they can successfully log in using their Google credentials.

### Challenge
If time permits, add a "passwordless" login option to your app.


### Check for Understanding

Have 2 apprentices log in to your website by opening a new incognito window that links to your project and having them go through the login process. The incognito window will make it easier for multiple people to log in without you having to log out of your accounts every time. Once your fellow apprentices are able to log in, you will be able to see their profiles on your Dashboard as follows: </br>

<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/dashboard-auth0.png"  width="300" height="450" />

![Success](https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif)
