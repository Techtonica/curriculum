# Auth0

### Projected Time

About 1.5 hours

- Lesson & Guided Practice: 40-60 min
- Independent practice: ~30 min
- Check for understanding: ~10 min

### Prerequisites

- [Git version control](/git/git-version-control.md)
- [.gitignore lesson](/git/gitignore.md)
- [.env lesson](/command-line/env.md)

### Motivation

Many app developers need a way to persist user information from session to session, but they also want to provide a smooth experience for those users. The OAuth protocol allows the user to "log in" to an app using their Google account (or other social media accounts). This removes friction for the user because they don't need to create a new profile or remember a new password.
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

### Specific Things to Learn

- How to get your Google Credentials.
- Integrating Google with Auth0.
- Integrating Auth0 code into a project.

### Materials

- [User Authentication with OAuth Slides](https://docs.google.com/presentation/d/18f-1EbjxLXyxuRoXNekpJ_o-pI1uiBzJxFw9ZoaNuVM/edit?usp=sharing)
- [How to get your Google Credentials API](https://auth0.com/docs/connections/social/google)
- [How to Implement Authentication For Your React App Article (9 mins read)](https://medium.appbase.io/how-to-implement-authentication-for-your-react-app-cf09eef3bb0b)
- [How to Implement Auth0 For Your React App Video (7 mins watch)](https://drive.google.com/open?id=1YuGoaI3NofkMGBmCVaOegDGXVwfk07WE).

### Lesson

- Read through lesson slides [User Authentication with OAuth](https://docs.google.com/presentation/d/18f-1EbjxLXyxuRoXNekpJ_o-pI1uiBzJxFw9ZoaNuVM/edit?usp=sharing)
- [Follow this video describing how to add Auth0 to an app (7 mins watch)](https://drive.google.com/file/d/1rF67FNPNQpn5fJ2aTJBREVeHtAF5qN2S/view). In the video, the presenter is working through [this tutorial](https://medium.appbase.io/how-to-implement-authentication-for-your-react-app-cf09eef3bb0b).

### Common Mistakes / Misconceptions

- **"It's okay if I post my API keys to my private GitHub repo."**
  Never push API keys to GitHub, even if you are certain the repository is secure. You might end up changing the permissions or adding a collaborator in the future. Keeping your keys off GitHub protects them from being exposed, even accidentally.

- **Logging in to an app with OAuth gives the developer access to my Google password**.
  Passwords are never shared and never even pass through the primary app's servers. Instead, providing your credentials to Google (or another social media platform) along with information from the primary app tells Google it's okay to send a _different_ piece of shared secret information--tokens--to the primary app. The tokens are now associated with specific users, and _this_ is the currency used between the primary app and the third-party service.

### Guided Practice

#### Step 1 - Set up Google credentials </br>

The first thing you want to do is set up your credentials on google by following this [tutorial](https://auth0.com/docs/connections/social/google). </br>
Please make sure that you secure ALL your private keys and sensitive information under your `.env` files! </br>

#### Step 2 - Connect Google credentials to Auth0 in Connections </br> </br>

Log into Auth0, on the left side you will see a menu with a `Connections` option. Select `Connections` then select the sub category named `Social` that will lead you to select the Gmail connection as follows: </br>
<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/connectionstab.png" width="500" height="500" /></br>
Once you click on `Try it!` you will see a modal pop up where you will have to input the Google credentials you created earlier. Just as follows: </br>
<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/gmailconnectionmodal.png" width="500" height="500" /></br></br>

#### Step 3 - Create Auth0 application to download code files </br>

Once you've successfully integrated your Google credentials with the connections section of Auth0 you can proceed with going to `Applications` and then type in `React` in the search bar. </br>
<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/Screen%20Shot%202018-10-09%20at%205.58.09%20PM.png" width="500" height="500" /></br></br>

#### Step 4 - Launch Auth0 React App

Once you've successfully downloaded and launched the Auth0 React app, you can use your Google credentials to log in. After you've logged in, notice how a logout button is now shown on the webpage. Looking through the sample code, can you find the logic for displaying the login and logout buttons? Additionally, can you find how Auth0 determines whether a user is authenticated?

##### Common Questions

- If you get an error about **registerServiceWorker.js** not being found, serviceWorker.js can be renamed to registerServiceWorker.js to match all the times it's being required in other files.
- You may get an error saying that registerServiceWorker.js has **no default export**. In registerServiceWorker.js, register(config) should be the default export if it isn't already: (line 23 or so) `export default function register(config) {`
  -Most of the auth0 secrets you need will be in the "applications" section of your auth0.com account, except for the **audience**. That can be found or created in the "APIs" section.

### Independent Practice

Work on the Sample App you created during the demonstration to troubleshoot the 'Log in with Google' feature so that when users choose that option, they can successfully log in using their Google credentials.

### Check for Understanding

Have 2 peers log in to your website by opening a new incognito window that links to your project and having them go through the login process. The incognito window will make it easier for multiple people to log in without you having to log out of your accounts every time. Once others are able to log in, you will be able to see their profiles on your Dashboard as follows: </br>

<img src="https://github.com/mmedina3/Auth0-Lesson/blob/master/dashboard-auth0.png" width="300" height="450" />

![Success](https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif)

### Challenges

If time permits:

- Add a "passwordless" login option to your app.
- Change the app to store tokens to local storage instead of isLoggedIn, and that your site looks at, verifies, and authenticates using this token (but only if it is unexpired!)

### Supplemental Materials

- [Create an Auth0 Account](https://auth0.com/)
- [OAuth - what it is and how it works](https://www.youtube.com/watch?v=SXDce0e3Ue4)
- [OAuth 2.0: An Overview](https://www.youtube.com/watch?v=CPbvxxslDTU)
- [Authenticating Your First React App](https://auth0.com/blog/authenticating-your-first-react-app/)
- [Add Node.js User Authentication in 10 Minutes!](https://www.youtube.com/watch?v=QQwo4E_B0y8)
- [Reacht and Auth0 Crash Course and Workshop](https://www.youtube.com/watch?v=PYWS-4CXETw)
- [Auth0](https://www.dropbox.com/s/9gqeejrquy5twbm/video1137877313.mp4?dl=0)
- [Auth0 in the FrontEnd](https://www.dropbox.com/s/13s3yr019pc58o5/video1805894443.mp4?dl=0)
