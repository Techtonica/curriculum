# Adding User Authorization to your NodeJS Project with Auth0 

### Projected Time

About 40-45 minutes
- Lesson: 10 min
- Guided Practice: 20 min
- Independent Practice: 5 min
- Check for Understanding: 10 min

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Adding Auth0 to your Project](/oauth/o-auth.md) - Especially the 'Authentication v. Authorization' slides
- [Node.js](/node-js/node-js.md)
- [Express.js](/express-js/express.md)
### Motivation

Many app developers need a way to persist user information from session to session, but they also want to provide a smooth experience for those users. The OAuth protocol allows user to "log in" to an app using their Google account (or other social media accounts). This removes friction for the user because they don't need to create a new profile or remember a new password. OAuth can be used for other types of integration, like allowing users to give an app permission to access the user's bank balances or Dropbox files. This is beyond the scope of this lesson but may be valuable to you in the future.

### Objectives

**Participants will be able to:**

- add authentication and authorization to an Express.js API.

### Specific Things To Teach

- Configure Auth0 APIs
- Validate Access Tokens
- Protect API Endpoints

### Materials

- [Authorization Slides](https://docs.google.com/presentation/d/1p7fa20o7lRyvXuXhsFz8MfHktY5MaqSPSrLdNjocNcE/edit?usp=sharing)
- [Example video (10 min)](https://example.com)

### Lesson

Here's text about introducing something and how it works.

- [Slideshow](google.com)
- [Video Tutorial]()


### Common Mistakes / Misconceptions

-**"It's okay if I post my API keys to my private GitHub repo."** 
Never push API keys to GitHub, even if you are certain the repository is secure. You might end up changing the permissions or adding a collaborator in the future. Keeping your keys off GitHub protects them from being exposed, even accidentally.

-**Logging in to an app with OAuth gives the developer access to my Google password**. 
Passwords are never shared and never even pass through the primary app's servers. Instead, providing your credentials to Google (or another social media platform) along with information from the primary app tells Google it's okay to send a *different* piece of shared secret information--tokens--to the primary app. The tokens are now associated with specific users, and *this* is the currency used between the primary app and the third-party service.


### Guided Practice

#### Step 1 - Configure Auth0 APIs

##### Create an API
In the APIs section of the Auth0 dashboard, click Create API. Provide a name and an identifier for your API, for example https://quickstarts/api. You will use the identifier as an audience later, when you are configuring the Access Token verification. For Signing Algorithm, select RS256.
By default, your API uses RS256 as the algorithm for signing tokens. Since RS256 uses a private/public keypair, it verifies the tokens against the public key for your Auth0 account. The public key is in the JSON Web Key Set (JWKS) format.

##### Defining Scopes
Scopes let you define which resources can be accessed by the user with a given Access Token. For example, you might choose to grant read access to the messages resource if users have the manager access level, and a write access to that resource if they have the administrator access level.

#### Step 2 - Validate Access Tokens

##### Install Dependencies
This step shows you how to validate the token using the express-jwt middleware and how to check for appropriate scopes with the express-jwt-authz middleware.
To get your Auth0 public key and complete the verification process, you can use the jwks-rsa library with the package.
Install these libraries with npm-

	npm install --save express-jwt jwks-rsa express-jwt-authz 

##### Configure the middleware
Configure the express-jwt middleware so it uses the remote JWKS for your Auth0 account.

	// server.js
	const express = require('express');
	const app = express();
	const jwt = require('express-jwt');
	const jwtAuthz = require('express-jwt-authz');
	const jwksRsa = require('jwks-rsa');

	// Authentication middleware. When used, the
	// Access Token must exist and be verified against
	// the Auth0 JSON Web Key Set
	const checkJwt = jwt({
	// Dynamically provide a signing key
	// based on the kid in the header and 
	// the signing keys provided by the JWKS endpoint.
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://techtonica.auth0.com/.well-known/jwks.json`
	}),

	// Validate the audience and the issuer.
	audience: 'YOUR_API_IDENTIFIER',
	issuer: `https://techtonica.auth0.com/`,
	algorithms: ['RS256']
	});

The checkJwt middleware shown above checks if the user's Access Token included in the request is valid. If the token is not valid, the user gets a 401 Authorization error when they try to access the endpoints. The middleware doesn't check if the token has the sufficient scope to access the requested resources.

#### Protect API Endpoints

The routes shown below are available for the following requests:
* ``GET /api/public``: available for non-authenticated requests
* ``GET /api/private``: available for authenticated requests containing an Access Token with no additional scopes
* ``GET /api/private-scoped``: available for authenticated requests containing an Access Token with the read:messages scope granted

To protect an individual route that requires a valid JWT, configure the route with the checkJwt express-jwt middleware.

	// server.js

	// This route doesn't need authentication
	app.get('/api/public', function(req, res) {
	res.json({
		message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
	});
	});

	// This route need authentication
	app.get('/api/private', checkJwt, function(req, res) {
	res.json({
		message: 'Hello from a private endpoint! You need to be authenticated to see this.'
	});
	});

You can configure individual routes to look for a particular scope. To achieve that, set up another middleware with the express-jwt-authz package. Provide an array of the required scopes and apply the middleware to any routes you want to add authorization to.

Pass the checkJwt and checkScopes middlewares to the route you want to protect.

	// server.js

	const checkScopes = jwtAuthz([ 'read:messages' ]);

	app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
	res.json({
		message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
	});
	}); 

In this configuration, only the Access Tokens with the read:messages scope can access the endpoint.

### Independent Practice

Class does this thing themselves with specific additional items. This could be alone, with a partner, or small group; but the idea is that it's less guided, more independent.

### Challenge

Apprentices can try to do this other thing. Ideally, they will be challenged to connect what they've learned to some previous knowledge or additional research.


### Check for Understanding

Some ideas: have apprentices summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps them self-assess their understanding. This exercise should help apprentices determine whether they've met the outline objectives, or if they need to review.

### Supplemental Materials
- [example website](https://example.com) - Write a very short description of how to use this optional resource.
- [Other example website](https://otherexample.com) - Write a very short description of how to use this optional resource.
