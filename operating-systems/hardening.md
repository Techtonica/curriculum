# Advanced Operating Systems Adventure: Hardening a Linux Server

### Projected Time

90-120 minutes

### Motivation

Teach a participant how to protect an internet-facing POSIX-compliant server with common tools and techniques. This is relevant for systems engineering jobs such as IT and DevOps.

### Objectives

Participants will be able to:

- Run processes as non-root accounts with least privilege.
- Configure a local firewall.
- Explain the difference between virtual machines and containers.
- Ask partner teams for more layers of security.

### Specific Things to Learn

- The importance of patching what you have (and removing what you don't need)
- File system permissions and chattr
- Running apps as non-root (assuming users and groups was covered in 101)
- SELinux policies
- Limiting ssh access (no root, passwordless, 2FA)
- Firewalls
- chroot vs cgroups vs jails vs Docker vs VMs
- Security software, WAFs, vulnerability scanning

### Materials

- [CIS benchmarks](https://www.cisecurity.org/cis-benchmarks/)
- [HowTos/SELinux - CentOS Wiki](https://wiki.centos.org/HowTos/SELinux)
- [HowTos/Network/IPTables - CentOS Wiki](<https://wiki.centos.org/HowTos(2f)Network(2f)IPTables.html>)

### Lesson

Here's text about introducing something and how it works.

Make sure to mention these things:

- Things - This is a sub-thing
- More things

### Common Mistakes / Misconceptions

- Not patching machines and applications. Keep an eye on the common vulnerabilities and exposures list ([CVE](https://cve.mitre.org/)) to see what in your environment needs to be patched. Other tools, such as a vulnerability scanner, may be able to tell you to what your server is actually vulnerable.
- Not reading your logs. Remember to look at your logs! Ideally, you are piping them into centralized log management and maybe even into a security incident and event monitor (SIEM), which searches all your logs for suspicious activity.

### Guided Practice

Harden Apache with SELinux.

### Independent Practice

Spin up a vanilla Linux VM and harden it according to [CIS benchmarks](https://www.cisecurity.org/cis-benchmarks/).

### Challenge

Open the firehose: look at auditd and learn how to write filtering policies for it, and read the logs from a file.
Stand up ELK or Splunk on a developer's license and get some machines to start sending logs.

### Check for Understanding

Have participants summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
