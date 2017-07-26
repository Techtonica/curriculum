# Security

### Projected Time
90-180 minutes

### Prerequisites


### Motivation
Teach students secure development basics, common pitfalls, and how to avoid them.

### Objective
**Students will be able to**:
- Identify tasks that are better left to libraries
- Pull a relevant JS library up to handle common scenarios such as input validation
- XSS someone else's web page

### Specific Things To Teach
- OWASP Secure coding practices
	- Input validation
	- Authentication and password management
	- Session management
	- Logging and error codes
	- XSS (bonus: CSRF)
- Other secure practices and things you shouldn't do yourself

### Materials

- [OWASP Secure Coding Practices Quick Reference Guide](https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf)
- [Parsley, the ultimate JavaScript form validation library](http://parsleyjs.org/)
- [Validator](https://github.com/chriso/validator.js)]
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [Passport](http://passportjs.org/)
- [Aqua](https://github.com/jedireza/aqua/)

### Mini Lesson

Here's text about introducing something and how it works.

Make sure to mention these things:
- Things
	- This is a sub-thing
- More things
- Even more things


### Common Mistakes / Misconceptions

Not validating user input: injection is bad. Prove it yourself by playing XSS games.
Crappy authentication: better yet, use SAML and take someone else's!
Not using secure communication: TLS/SSL. Use it. Love it.
Not logging enough: OWASP advises on security-relevant events to log in addition to performance.
TMI in the logs: especially bad if the data exposure is in user-facing error codes.
Rolling your own encryption: you are not a mathematician; please don't do this.

### Guided Practice

Have the students use popular libraries to solve these problems with you. I see the authentication and session management as being an easy extension of the Pinterest clone project.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

There are a few XSS web games that are well-suited to self-study, but may be helpful to start with an instructor. [Google](https://xss-game.appspot.com/) and [Excess XSS](http://excess-xss.com/) are fun. Another is [Insecure Labs](www.insecurelabs.org).
If they express a strong interest in red teaming, they can experiment with a [Kali Linux](https://www.kali.org/) VM and read about its rich FOSS tool suite.

### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
