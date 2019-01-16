# Intro to Security in Web Development

### Projected Time
90-180 minutes

### Prerequisites
- [How the Internet Works](https://github.com/Techtonica/curriculum/blob/master/requests-and-responses/requests-and-responses.md)

### Motivation
Apprentices will learn secure development basics, common pitfalls, and how to avoid them.

### Objectives
**Participants will be able to:**
- Pull a relevant JS library up to handle common scenarios
- Validate user input
- Authenticate users on a site
- XSS someone else's web page

### Specific Things To Teach
- OWASP Secure coding practices
	- Input validation
	- Authentication means and pitfalls
	- Session management
	- Cross-site scripting (XSS)
	- Cross-site request forgery (CSRF)

### Materials

- [Security Lesson Slideshow](https://docs.google.com/presentation/d/1mNyxzYGW-6M5yxBfJsxiwb9lcko5sa91thlBPKTodMg/edit?usp=sharing)
- [Techtonica's Roles in Tech Presentation](https://drive.google.com/file/d/1oXgOX1EC4igI6ZwgJlhF6AN4dG2Yn_S4/view) (security section starts at 2:57)
- [7 min read: A quick introduction to web security [FreeCodeCamp]](https://medium.freecodecamp.org/a-quick-introduction-to-web-security-f90beaf4dd41)
- [Slideshow: Authentication vs Authorization](https://docs.google.com/presentation/d/1iHXimPdzKOYpjhXC2Vh-8QmpG90PxHWBQ-gRb6k32zg/edit?usp=sharing).
- [Khan Academy course, Cybersecurity 101](https://www.khanacademy.org/partner-content/nova/cybersecurity/cyber/v/cybersecurity-101).  It should take about 


#### Web Security Libraries and Practices

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
- XSS and CRSF: XSS is basically injection in the DOM, and you can't prevent CRSF until you've tackled all the XSS bugs. Try it at home with [Google](https://xss-game.appspot.com/) and [Excess XSS](http://excess-xss.com/).
- Encryption: sensitive data should be encrypted in transit and at rest. Also, you are not a mathematician; never try to roll your own encryption.

### Lesson 
1. [Read through this Security Lesson Slideshow.](https://docs.google.com/presentation/d/1mNyxzYGW-6M5yxBfJsxiwb9lcko5sa91thlBPKTodMg/edit?usp=sharing) (15 min)
2. [Read through this slideshow explaining the difference betweek Authentication and Authorization](https://docs.google.com/presentation/d/1iHXimPdzKOYpjhXC2Vh-8QmpG90PxHWBQ-gRb6k32zg/edit?usp=sharing).  It has a few slides with examples written in Ruby, but you'll get the gist of it.
3. Read this 7-min article: [A quick introduction to web security
](https://medium.freecodecamp.org/a-quick-introduction-to-web-security-f90beaf4dd41).

### Guided Practice
Follow [this Khan Academy course, Cybersecurity 101](https://www.khanacademy.org/partner-content/nova/cybersecurity/cyber/v/cybersecurity-101).  It should take about 

### Independent Practice

- Validate user input for a project with Parsley and validate fields with Validator.
- Use DOMPurify to prevent XSS.
- Build a page template to make it easier to prevent CSRF.
- The next step is to try to XSS each other's sites.

### Challenge

If you are feeling inclined, or interested in red teaming, you can experiment with [Insecure Labs](www.insecurelabs.org) or a [Kali Linux](https://www.kali.org/) VM and read about its rich FOSS tool suite.

### Check for Understanding

