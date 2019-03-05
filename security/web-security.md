# Intro to Security in Web Development

### Projected Time
90-180 minutes

### Prerequisites
 A basic understanding of following is required:
- [How the Internet Works](https://github.com/Techtonica/curriculum/blob/master/requests-and-responses/requests-and-responses.md)

### Motivation
Apprentices will learn secure development basics, common pitfalls, and how to avoid them.

### Objectives
**Participants will be able to:**
- Understand and handle common vulnerabilities
- Validate user input
- Authenticate users on a site
- XSS/CSRF on someone else's web page

### Specific Things To Teach
- OWASP Secure coding practices
	- Input validation
	- Authentication means and pitfalls
	- Session management
	- Cross-site scripting (XSS)
	- Cross-site request forgery (CSRF)

### Materials

- [Security Lesson Slideshow](https://docs.google.com/presentation/d/1mNyxzYGW-6M5yxBfJsxiwb9lcko5sa91thlBPKTodMg/edit?usp=sharing)
- [Techtonica's Roles in Tech Presentation](https://drive.google.com/file/d/1jZY4K-KeqLDM4AXgxwymJrBxGi3DIhaH/view?usp=sharing) (security section starts at 2:57)
- [7 min read: A quick introduction to web security [FreeCodeCamp]](https://medium.freecodecamp.org/a-quick-introduction-to-web-security-f90beaf4dd41)
- [Slideshow: Authentication vs Authorization](https://docs.google.com/presentation/d/1iHXimPdzKOYpjhXC2Vh-8QmpG90PxHWBQ-gRb6k32zg/edit?usp=sharing).
- [Khan Academy course, Cybersecurity 101](https://www.khanacademy.org/partner-content/nova/cybersecurity/cyber/v/cybersecurity-101).  It should take about 30 minutes.
- [Validator](https://github.com/chriso/validator.js)
- [Parsley, the ultimate JavaScript form validation library](http://parsleyjs.org/)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- [MDN web security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security)

### Supplemental Resources - Web Security Libraries and Practices
- [OWASP Secure Coding Practices Quick Reference Guide](https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf) 
- [Passport](http://passportjs.org/)
- [OpenID client connect](https://github.com/IdentityModel/oidc-client-js)

### Lesson 
- First thing that you must remember, never trust your user. There will always be someone with malicious intent out there. To safeguard you need security. What do we mean by security on web?
	- [Read through this Security Lesson Slideshow.](https://docs.google.com/presentation/d/1mNyxzYGW-6M5yxBfJsxiwb9lcko5sa91thlBPKTodMg/edit?usp=sharing) (15 min)
	- [MDN web security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security)

- Authentication vs Authorization vs Access Control:<br>
[Read through this slideshow explaining the difference between Authentication and Authorization](https://docs.google.com/presentation/d/1iHXimPdzKOYpjhXC2Vh-8QmpG90PxHWBQ-gRb6k32zg/edit?usp=sharing).  It has a few slides with examples written in Ruby, but you'll get the gist of it.<br>
In simple words:
	- Authentication is about who somebody is.
	- Authorisation is about what they're allowed to do.
	- Once we know who a user is, and we know what authorisation level they have and what we should and should not give them access to, we need to physically prevent that user from accessing anything that they should not by Access Control.

- Read this 7-min article: [A quick introduction to web security
](https://medium.freecodecamp.org/a-quick-introduction-to-web-security-f90beaf4dd41).

### Common Mistakes / Misconceptions

- Changing all GET requests to POST requests does not protect you from CSRF attacks.
- Injection: validate everything before you give it to an interpreter! Here we focus on Javascript sanitization.
- Broken Authentication and Session Management: practice this by using the above libraries. Better than passwords, try SAML.
- XSS and CSRF: XSS is basically injection in the DOM, and you can't prevent CSRF until you've tackled all the XSS bugs. Try it at home with [Google](https://xss-game.appspot.com/) and [Excess XSS](http://excess-xss.com/).
- Encryption: sensitive data should be encrypted in transit and at rest. Also, you are not a mathematician; never try to roll your own encryption.

### Guided Practice
Follow [this Khan Academy course, Cybersecurity 101](https://www.khanacademy.org/partner-content/nova/cybersecurity/cyber/v/cybersecurity-101).  It should take about 30 minutes.

### Independent Practice
1. Spend 15 minutes on [SQL Injection Practice](https://www.hacksplaining.com/exercises/sql-injection)
2. Spend 15 minutes on [XSS Practice](https://xss-game.appspot.com/)
3. Validate user input for a project with Parsley and validate fields with Validator. - [Parsley, the ultimate JavaScript form validation library](http://parsleyjs.org/) - [Validator](https://github.com/chriso/validator.js)
4. Build a form (or use an existing one) which allows users to submit a comment string and renders those comments into a doc on the page. Use DOMPurify to prevent XSS. For example an input comment like `<script type='application/javascript'>alert('xss');</script>` should not trigger an alert on the page. - [DOMPurify](https://github.com/cure53/DOMPurify)
5. Build a page template to make it easier to prevent CSRF.
6. The next step is to try to XSS each other's sites.

### Check For Understanding
- What is the difference between XSS and CSRF?
- What are some common exploits that hackers use to infiltrate systems?
- You get an email from an unknown source containing a link while you were logged in your internet banking in the next tab. Should you click on the link if it says it's from the bank?
- If you click on it and your money gets transferred out of your account. What is this attack known as XSS or CSRF?

### Further Reading/Practice (for the super interested and more experienced!)

- [Bug Bounty Programs](https://www.bugcrowd.com/bug-bounty-list/)
- [Types of Hackers](https://www.cybrary.it/0p3n/types-of-hackers/)
- OWASP releases a regular list of the [top 10 most critical web application security risks](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project).

### Extensions

If you are feeling inclined, or interested in red teaming, you can experiment with [Insecure Labs](www.insecurelabs.org) or a [Kali Linux](https://www.kali.org/) VM and read about its rich FOSS tool suite.

