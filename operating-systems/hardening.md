# Advanced Operating Systems Adventure: Hardening a Linux Server

### Projected Time
90-120 minutes

### Motivation
Teach a student how to protect an internet-facing POSIX-compliant server with common tools and techniques. This is relevant for systems engineering jobs such as IT and DevOps.

### Objective
Students will be able to:
- Explain the difference between virtual machines and containers
- Run processes as non-root accounts with limited privileges
- Even more things
- Even more things

### Specific Things To Teach
- The importance of patching what you have (and removing what you don't need)
- Firewalls (both hardware and local with iptables/firewalld)
- Advanced file permissions with chattr and acl
- Running apps as role accounts (aka "never run as root")
- SELinux modes and policies
- chroot vs cgroups vs jails vs Docker vs VMs
- Limiting ssh access (no root, passwordless, 2FA)
- Security software: host or network intrusion detection/prevention system, 
- Vulnerability scanning
- Web application firewalls (WAFs)

### Materials

- [This website](example.com)
- [This other website](otherexample.com)

### Mini Lesson

Here's text about introducing something and how it works.

Build on the first information. Have students guess things, do an activity, etc.

Make sure to mention these things: 
- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things


### Common Mistakes / Misconceptions

- Not reading your logs. Remember to look at your logs! Ideally, you are piping them into centralized log management and maybe even into a security incident and event monitor (SIEM), which searches all your logs for suspicious activity.
- Not patching machines and applications. Keep an eye on the common vulnerabilities and exposures list ([CVE](https://cve.mitre.org/)) to see what in your environment needs to be patched. Other tools, such as a vulnerability scanner, may be able to tell you to what your server is actually vulnerable.

Make sure they avoid this: thing


### Guided Practice

Have the students work with you as you do something. 


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Open the firehose: look at auditd and learn how to write filtering policies for it, and read the logs from a file.
Write SELinux policies to allow non-standard things.
Stand up ELK or Splunk on a developer's license and get some machines to start sending logs.

### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding. 
