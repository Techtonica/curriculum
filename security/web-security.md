# Intro to Security in Web Development

### Projected Time

About 90-180 minutes
- Lesson: 45 minutes
- Guided Practice: 30 minutes
- Independent Practice: 60 minutes
- Check for Understanding: 10 minutes

### Prerequisites

A basic understanding of following is required:

- [How the Internet Works](/requests-and-responses/requests-and-responses.md)

### Motivation

Apprentices will learn secure development basics, common pitfalls, and how to avoid them.

Website attacks and cyber attacks are growing in numbers every day and the importance of creating a secure website and website security, in general, is increasing rapidly. So, being secure in the online world becomes more and more important every day and it is more than important to protect your website and the data it holds now. So, therefore, we’ll give you five reasons why website security is important.[(By Agnes Talalaev)](https://www.webarxsecurity.com/5-reasons-website-security-important-2018/)

**Which companies use web security?**
Some of the popular companies that use web security are mentioned below with the links that describe the role of web security in these companies:

- [FireEye](https://www.thesoftwarereport.com/top-25-cybersecurity-companies-of-2018/)
- [Blackberry](https://www.thesoftwarereport.com/top-25-cybersecurity-companies-of-2018/)

### Objectives

**Participants will be able to:**

- Understand and handle common vulnerabilities
- Validate user input
- Authenticate users on a site
- XSS/CSRF on someone else's web page

### Specific Things to Learn

- OWASP Secure coding practices
  - Input validation
  - Authentication means and pitfalls
  - Session management
  - Cross-site scripting (XSS)
  - Cross-site request forgery (CSRF)

### Materials

- [Techtonica's Roles in Tech Presentation](https://drive.google.com/file/d/1jZY4K-KeqLDM4AXgxwymJrBxGi3DIhaH/view?usp=sharing) (security section starts at 2:57)
- [Slideshow: Authentication vs Authorization](https://docs.google.com/presentation/d/1iHXimPdzKOYpjhXC2Vh-8QmpG90PxHWBQ-gRb6k32zg/edit?usp=sharing).
- [7 min read: A quick introduction to web security [FreeCodeCamp]](https://medium.freecodecamp.org/a-quick-introduction-to-web-security-f90beaf4dd41)
- [MDN web security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security)
- [Khan Academy course, Cybersecurity 101](https://www.khanacademy.org/partner-content/nova/cybersecurity/cyber/v/cybersecurity-101). It should take about 30 minutes.
- [Validator](https://github.com/validatorjs/validator.js)
- [Parsley, the ultimate JavaScript form validation library](http://parsleyjs.org/)
- [DOMPurify](https://github.com/cure53/DOMPurify)

### Supplemental Resources - Web Security Libraries and Practices

- [OWASP Secure Coding Practices Quick Reference Guide](https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf)
- [Passport](http://passportjs.org/)
- [OpenID client connect](https://github.com/IdentityModel/oidc-client-js)
- [Stack exchange anti-CSRF thread](https://security.stackexchange.com/questions/90023/get-and-post-request-vulnerable-to-csrf-attack)

### Lesson

- The first thing that you must remember never trusts your user. There will always be someone with malicious intent out there. To safeguard you need security. What do we mean by security on the web?

  - Watch [Techtonica's Roles in Tech Presentation](https://drive.google.com/file/d/1jZY4K-KeqLDM4AXgxwymJrBxGi3DIhaH/view?usp=sharing) (security section starts at 2:57)
  - Read through [MDN web security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security) (30 mins read)

- Authentication vs Authorization vs Access Control:<br>
  [Read through this slideshow explaining the difference between Authentication and Authorization](https://docs.google.com/presentation/d/1iHXimPdzKOYpjhXC2Vh-8QmpG90PxHWBQ-gRb6k32zg/edit?usp=sharing). It has a few slides with examples written in Ruby, but you'll get the gist of it.<br>
  In simple words: - Authentication is about who somebody is. - The authorization is about what they're allowed to do. - Once we know who a user is, and we know what authorization level they have and what we should and should not give them access to, we need to physically prevent that user from accessing anything that they should not by Access Control.

- Read this 7-min article: [A quick introduction to web security
  ](https://medium.freecodecamp.org/a-quick-introduction-to-web-security-f90beaf4dd41).

- Cross Site Scripting(XSS) exploits the trust a user has for a particular site.
- Cross-Site Request Forgery(CSRF) exploits the trust that a site has in a user's browser.

### Common Mistakes / Misconceptions

- Changing all GET requests to POST requests does not protect you from CSRF attacks. For complete protection against CSRF attacks PUT requests are used or some token based request verification. More info about anti-CSRF techniques [here](https://security.stackexchange.com/questions/90023/get-and-post-request-vulnerable-to-csrf-attack)
- Injection: validate everything before you give it to an interpreter! Here we focus on JavaScript sanitization.
- Broken Authentication and Session Management: practice this by using the above libraries. Better than passwords, try SAML.
- Encryption: sensitive data should be encrypted in transit and at rest. Also, you are not a mathematician; never try to roll your own encryption.
- SQL injection and XSS(also injection based): Injection based attacks try to exploit a website by feeding it malicious input in the form of HTTP requests or in input fields. SQL injection attacks are used to steal information from databases whereas XSS attacks are used to redirect users to websites where attackers can steal data from them.

### Independent Practice

1. Spend 15 minutes on [SQL Injection Practice](https://www.hacksplaining.com/exercises/sql-injection)
2. Spend 15 minutes on [XSS Practice](https://xss-game.appspot.com/)
3. Validate user input for a project with Parsley and validate fields with Validator. - [Parsley, the ultimate JavaScript form validation library](http://parsleyjs.org/) - [Validator](https://github.com/validatorjs/validator.js)
4. Build a form (or use an existing one) which allows users to submit a comment string and renders those comments into a doc on the page. Use DOMPurify to prevent XSS. For example an input comment like `<script type='application/javascript'>alert('xss');</script>` should not trigger an alert on the page. - [DOMPurify](https://github.com/cure53/DOMPurify)
5. Build a page template with all inputs escaped and validated and set up a PUT request instead of GET and POST to prevent CSRF. You can also look into implementing Token based CSRF prevention techniques if interested.
6. The next step is to try XSS to do that make an HTML form with a text field and submit button(like search bar) now enter script based XSS attack through the text field `<script>alert('You are under attack')</script>` , you can also try various singleton tags like bold, italic, etc. on each other's webpages.
7. Now fix the vulnerabilities by HTML escaping all the dynamic input data.
8. After that write some URL based XSS , assuming the input by users `<?phpecho $_GET["message"];?>` like this is serving as output somewhere on the site `http://your-server/something.php?message=<script>alert('XSS attack');</script>`. side note: There are many other ways of doing XSS/CSRF attacks so keep exploring.

### Check For Understanding

- What is the difference between XSS and CSRF?
- What are some common exploits that hackers use to infiltrate systems?
- You get an email from an unknown source containing a link while you were logged in your internet banking in the next tab. Should you click on the link if it says it's from the bank?
- If you click on it and your money gets transferred out of your account. What is this attack known as XSS or CSRF?

### Further Reading/Practice (for the super interested and more experienced!)

- [HTTP Headers for the Responsible Developer](https://www.twilio.com/blog/a-http-headers-for-the-responsible-developer)
- [Bug Bounty Programs](https://www.bugcrowd.com/bug-bounty-list/)
- [Types of Hackers](https://www.cybrary.it/0p3n/types-of-hackers/)
- OWASP releases a regular list of the [top 10 most critical web application security risks](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project).
- XSS and CSRF: Try it at home with [Google](https://xss-game.appspot.com/) and [Excess XSS](http://excess-xss.com/).

### Extensions

If you are feeling inclined, or interested in red teaming, you can experiment with [Insecure Labs](http://www.insecurelabs.org) or a [Kali Linux](https://www.kali.org/) VM and read about its rich [FOSS](https://www.fossmint.com/kali-linux-hacking-and-penetration-tools/) tool suite.
