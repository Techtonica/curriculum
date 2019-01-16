# Security

### Projected Time
90-180 minutes

### Prerequisites
How the Internet Works Topic Outline

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

- [Techtonica's Roles in Tech Presentation](https://drive.google.com/file/d/1oXgOX1EC4igI6ZwgJlhF6AN4dG2Yn_S4/view) (security section starts at 2:57)
- [A quick introduction to web security [FreeCodeCamp]](https://medium.freecodecamp.org/a-quick-introduction-to-web-security-f90beaf4dd41)

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

### Guided Practice

- Apprentice will use popular libraries to add authentication and session management to the Pinterest clone project. Perhaps using Google or [OpenID](http://docs.identityserver.io/en/release/quickstarts/7_javascript_client.html#refjavascriptquickstart) for SAML auth is better than trying Passport.
  - Also consider [Auth0](oauth/o-auth.md).
- Next, you can validate user input with Parsley and validate fields with Validator.
- Use DOMPurify to prevent XSS.

### Independent Practice

Build a page template to make it easier to prevent CSRF.

### Challenge

If you are feeling inclined, or interested in red teaming, you can experiment with [Insecure Labs](www.insecurelabs.org) or a [Kali Linux](https://www.kali.org/) VM and read about its rich FOSS tool suite.

### Check for Understanding

The next step is to try to XSS each other's sites.

## Understanding the Field

### What Kinds of Security Jobs Are There?

As a software developer of any kind, you'll need to know the basics of securing your code. But there are also specialized roles in security.

- [Cybersecurity job titles and short descriptions](https://www.cs.seas.gwu.edu/cybersecurity-roles-and-job-titles)
- Many organizations, no matter their domain or product, have positions that are specific to security. If you wanted to specialize in security, there are security roles at all kinds of companies.
	- [Eventbrite](https://www.themuse.com/jobs/eventbrite/security-engineer), a python shop whose product handles event registration and promotion, is "looking for a Security Engineer to assist with security initiatives, project consultation and risk assessments. You will assess threats and vulnerabilities, analyze data and code, oversee testing and deployment, and ensure ongoing monitoring."
    - [Sample systems security job description [Workable]](https://resources.workable.com/system-security-engineer-job-description)

- Other companies focus on security. These will have security roles, R&D roles, as well as more general software developer roles. If you wanted to work on security, such an organization might make sense. Or if you're interested in security, but still want to work as more of a generalist, you could work on a product that's security-minded.
    - [Endgame](https://www.endgame.com/careers/) needs security engineers and researchers, since it's a provider of enterprise security software, but it also has a web team for its product.
- Still other organizations deliver "white hat hacker" services such as [pen testing](https://www.cloudflare.com/learning/security/glossary/what-is-penetration-testing/). "White hat" hackers are hired to attack systems to discover vulnerabilities before "black hat" hackers find them, and deliver such findings to their client in a report. This is even more specialized, but interesting!
- Bug bounty programs usually include security vulnerabilities.
	- One aggregator of bug bounty programs: [bugcrowd](https://www.bugcrowd.com/bug-bounty-list/)

### Security Conferences

- [WiCyS](https://www.wicys.org/), Women in CyberSecurity, annual, various US cities
- [DEF CON](https://defcon.org/), annual, Las Vegas, NV
- [Black Hat](https://www.blackhat.com/), annual, Las Vegas, NV
- [RSA Conference](https://www.rsaconference.com/), annual, SF, CA
- Lists security and hacker conferences [on Wikipedia](https://en.wikipedia.org/wiki/Computer_security_conference)
- [InfoSec Events Directory](https://infosec-conferences.com/)
- General software conferences often have security tracks, or at least sessions on security topics.

### People to Follow

- [@malwareunicorn](https://twitter.com/malwareunicorn). Also see her [workshop](https://sites.google.com/secured.org/malwareunicorn/reverse-engineering/re101) on reverse engineering windows malware.
- [@bcrypt](https://twitter.com/bcrypt)