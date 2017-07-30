# Security

### Projected Time
90-180 minutes

### Prerequisites
The Pinterest clone project, without authentication or session management on it.

### Motivation
Teach students secure development basics, common pitfalls, and how to avoid them.

### Objective
**Students will be able to**:
- Pull a relevant JS library up to handle common scenarios
- Validate user input
- Authenticate users on a site
- XSS someone else's web page

### Specific Things To Teach
- OWASP Secure coding practices
	- Input validation
	- Authentication and password management
	- Session management
	- Cross-site scripting (XSS)
	- Cross-site request forgery (CSRF)

### Materials

- [OWASP Secure Coding Practices Quick Reference Guide](https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf)
- [Parsley, the ultimate JavaScript form validation library](http://parsleyjs.org/)
- [Validator](https://github.com/chriso/validator.js)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Passport](http://passportjs.org/)
- [OpenID client connect](https://github.com/IdentityModel/oidc-client-js)

### Common Mistakes / Misconceptions

OWASP releases a regular list of the [top 10 most critical web application security risks](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project). Here are the 2017 highlights:
- Injection: validate everything before you give it to an interpreter! Here we focus on Javascript sanitization.
- Broken Authentication and Session Management: practice this by using the above libraries. Better than passwords, try SAML.
- XSS and CRSF: XSS is basically injection in the DOM. Try it at home with [Google](https://xss-game.appspot.com/) and [Excess XSS](http://excess-xss.com/).
- Encryption: you are not a mathematician; never try to roll your own encryption.

### Guided Practice

- Have the students use popular libraries to add authentication and session management to the Pinterest clone project. Perhaps using Google or (OpenID)[http://docs.identityserver.io/en/release/quickstarts/7_javascript_client.html#refjavascriptquickstart] for SAML auth is better than trying Passport.
- Have them validate user input with Parsley and validate fields with Validator.
- Use DOMPurify to prevent XSS.

### Independent Practice

Build a page template to make it easier to prevent CSRF.

### Challenge

If they express a strong interest in red teaming, they can experiment with [Insecure Labs](www.insecurelabs.org) or a [Kali Linux](https://www.kali.org/) VM and read about its rich FOSS tool suite.

### Check for Understanding

Have students try to XSS each other's sites.
