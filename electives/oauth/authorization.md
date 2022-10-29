# Adding User Authorization to your NodeJS Project with Auth0

### Projected Time

About 1.5 hour

- Lesson: 30 min
- Guided Practice: 30 min
- Independent Practice: 15 min
- Check for Understanding: 15 min

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Adding Auth0 to your Project](/electives/oauth/o-auth.md) - Especially the 'Authentication v. Authorization' slides
- [Node.js](/node-js/node-js.md)
- [Express.js](/express-js/express.md)

### Motivation

Many app developers need a way to persist user information from session to session, but they also want to provide a smooth experience for those users. The OAuth protocol allows user to "log in" to an app using their Google account (or other social media accounts). This removes friction for the user because they don't need to create a new profile or remember a new password. OAuth can be used for other types of integration, like allowing users to give an app permission to access the user's bank balances or Dropbox files. This is beyond the scope of this lesson but may be valuable to you in the future.

### Objectives

**Participants will be able to:**

- add authentication and authorization to an Express.js API.

### Specific Things to Learn

- Configure Auth0 APIs
- Validate Access Tokens
- Protect API Endpoints

### Supplement Materials

- [Authorization Slides](https://docs.google.com/presentation/d/1p7fa20o7lRyvXuXhsFz8MfHktY5MaqSPSrLdNjocNcE/edit?usp=sharing)
- [Example video (10 min)](https://example.com)

### Lesson

Here's text about introducing something and how it works.

1. [These lesson slides follow the Guided Practice section below.]().
1. [Follow this video describing how to add Auth0 to an app]().

### Common Mistakes / Misconceptions

-**"It's okay if I post my API keys to my private GitHub repo."**
Never push API keys to GitHub, even if you are certain the repository is secure. You might end up changing the permissions or adding a collaborator in the future. Keeping your keys off GitHub protects them from being exposed, even accidentally.

-**Logging in to an app with OAuth gives the developer access to my Google password**.
Passwords are never shared and never even pass through the primary app's servers. Instead, providing your credentials to Google (or another social media platform) along with information from the primary app tells Google it's okay to send a _different_ piece of shared secret information--tokens--to the primary app. The tokens are now associated with specific users, and _this_ is the currency used between the primary app and the third-party service.

### Guided Practice

#### Step 1 - Configure Node.js to use Auth0

##### Create the .env file

Create the .env file in the root of your app and add your Auth0 variables and values to it. # .env
AUTH0_CLIENT_ID=YOUR_CLIENT_ID
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_CLIENT_SECRET=YOUR_CLIENT_SECRET

##### Install Dependencies

To get started, install the following dependencies.
_`passport` - an authentication middleware for Node.js
_`passport-auth0` - an Auth0 authentication strategy for Passport
_`express-session` - a middleware to manage sessions
_`dotenv` - a module to load environment variables from a .env file

#### Installation with npm

`npm install passport passport-auth0 express-session dotenv --save`

##### Configure express-session

In app.js, include the express-session module and configure it. The secret parameter is a secret string that is used to sign the session ID cookie. Please use a custom value.

```// app.js

	const session = require('express-session');

	// config express-session
	let sess = {
	secret: 'CHANGE THIS TO A RANDOM SECRET',
	cookie: {},
	resave: false,
	saveUninitialized: true
	};

	if (app.get('env') === 'production') {
	sess.cookie.secure = true; // serve secure cookies, requires https
	}

	app.use(session(sess));
```

##### Configure Passport with the application setting

In app.js, include the passport and passport-auth0 modules, and configure Passport to use a new instance of Auth0Strategy with your Auth0 application settings. Use passport.initialize() and passport.session() to initialize Passport with persistent login sessions.

```// app.js

	// Load environment variables from .env
	const dotenv = require('dotenv');
	dotenv.config();

	// Load Passport
	const passport = require('passport');
	const Auth0Strategy = require('passport-auth0');

	// Configure Passport to use Auth0
	const strategy = new Auth0Strategy(
	{
		domain: process.env.AUTH0_DOMAIN,
		clientID: process.env.AUTH0_CLIENT_ID,
		clientSecret: process.env.AUTH0_CLIENT_SECRET,
		callbackURL:
		process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
	},
	function (accessToken, refreshToken, extraParams, profile, done) {
		// accessToken is the token to call Auth0 API (not needed in the most cases)
		// extraParams.id_token has the JSON Web Token
		// profile has all the information from the user
		return done(null, profile);
	}
	);

	passport.use(strategy);

	app.use(passport.initialize());
	app.use(passport.session());

```

Please make sure these last two commands are in your code after the application of the express middleware (app.use(session(sess)).

##### Storing and retrieving user data from the session

In a typical web application, the credentials used to authenticate a user are only transmitted during the login request. If authentication succeeds, a session is established and maintained via a cookie set in the user's browser. Each subsequent request does not contain credentials, but rather the unique cookie that identifies the session.

To support login sessions, Passport serializes and deserializes user instances to and from the session. Optionally, you may want to serialize only a subset to reduce the footprint, i.e., user.id.

```// app.js

	// You can use this section to keep a smaller payload
	passport.serializeUser(function (user, done) {
	done(null, user);
	});

	passport.deserializeUser(function (user, done) {
	done(null, user);
	});

```

#### Step 2- Implement login, user profile and logout

In this example, following routes are implemented:

- `/login` triggers the authentication by calling Passport's authenticate method. The user is then redirected to the tenant login page hosted by Auth0

- `/callback` is the route the user is returned to by Auth0 after authenticating. It redirects the user to the profile page (`/user`).

- `/user` displays the user's profile.

- `/logout` closes the local user session and redirects the user again to the root index `/`.

We will use the following routers:
_`routes/auth.js`, to handle authentication
_`routes/index.js`, to serve the home page \*`routes/users.js`, to serve the user profile

##### Adding the authentication router

Start by creating a new router routes/auth.js to handle authentication.

In the authentication step, make sure to pass the scope parameter with values openid email profile to access email and the other attributes stored in the user profile. This is needed to display the user's information on the profile page.

```// routes/auth.js

	const express = require('express');
	const router = express.Router();
	const passport = require('passport');

	// Perform the login, after login Auth0 will redirect to callback
	router.get('/login', passport.authenticate('auth0', {
	scope: 'openid email profile'
	}), function (req, res) {
	res.redirect('/');
	});

	// Perform the final stage of authentication and redirect to previously requested URL or '/user'
	router.get('/callback', function (req, res, next) {
	passport.authenticate('auth0', function (err, user, info) {
		if (err) { return next(err); }
		if (!user) { return res.redirect('/login'); }
		req.logIn(user, function (err) {
		if (err) { return next(err); }
		const returnTo = req.session.returnTo;
		delete req.session.returnTo;
		res.redirect(returnTo || '/user');
		});
	})(req, res, next);
	});

	// Perform session logout and redirect to homepage
	router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
	});

	module.exports = router;

```

##### Middleware to protect routes

Create a secured middleware to protect routes and ensure they are only accessible if logged in.

If the user is not logged in, the requested route will be stored in the session and the user will be redirected to the login page. Upon successful login, the user will be redirected to the previously requested URL (see callback route above).

```// lib/middleware/secured.js

	module.exports = function () {
	return function secured (req, res, next) {
		if (req.user) { return next(); }
		req.session.returnTo = req.originalUrl;
		res.redirect('/login');
	};
	};

```

##### Create user profile route

The /user route (the user's profile) should only be accessible if the user is logged in. Use the secured middleware to secure the route.

```// routes/users.js

	const express = require('express');
	const secured = require('../lib/middleware/secured');
	const router = express.Router();

	/* GET user profile. */
	router.get('/user', secured(), function (req, res, next) {
	const { _raw, _json, ...userProfile } = req.user;
	res.render('user', {
		userProfile: JSON.stringify(userProfile, null, 2),
		title: 'Profile page'
	});
	});

	module.exports = router;

```

##### Create index route

Create an index route to serve the homepage.

```// routes/index.js

	const express = require('express');
	const router = express.Router();

	/* GET home page. */
	router.get('/', function (req, res, next) {
	res.render('index', { title: 'Auth0 Webapp sample Nodejs' });
	});

	module.exports = router;

```

##### Making user available in the views

In the views and layouts, it is often necessary to conditionally render content depending on if a user is logged in or not. Other times, the user object might be necessary in order to customize the view.

Create a middleware `lib/middleware/userInViews.js` for this purpose.

```// userInViews.js

	module.exports = function () {
	return function (req, res, next) {
		res.locals.user = req.user;
		next();
	};
	};

```

Include the `lib/middleware/userInViews.js` in the `app.js`

### Independent Practice

echtonica staff will assign pairs. Work together on the Sample App you created during the demonstration to troubleshoot the 'Log in with Google' feature so that when users choose that option, they can successfully log in using their Google credentials.

### Challenge

Try to add other routes and provide user view in each route.
