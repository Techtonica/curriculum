# Networking (Computing)

### Week 2 Keywords and Questions

- What is an IP address? (Can you figure out what is your IP address? )Your device 
- Can you figure out your device's IP address?
- Can you find the IP address of every website?
- What is a domain name?
- What is a domain name server?
- What is a port?
- What is a server? 
- What is a server request? 
- Can you explain in your own words, to a non-technical person, how the internet works? See [How the Internet Works](./how-the-internet-works.md)


## Introduction

Networking is a fundamental skill to have as an engineer that transcends frameworks, languages, and even devices. Smart lightbulbs use networking, so this is something that applies to almost any hardware or software project you will ever work on.

## Quick Start: What do I _need_ to know?

Networking is a huge topic. Time learning what's underneath all of the tools you use is likely time well-spent, but if you're trying to prioritize what to learn, these are must-know topics for your time at Techtonica.

☎️ During this list, we'll use the analogy of a physical phone system with wires, which may be an antiquated concept, but it's actually where a lot of network theory came from so put your time-travel caps on and follow us back in time...

- [What are I.P. addresses?](https://whatismyipaddress.com/ip-basics)
  - similar to a phone number: unique way for anyone in the world to reach you
  - like an office, some folks have private extensions, e.g. 1234, that only others at the office can call
  - others, like the front-desk are public numbers that can be called from outside
- What are [domain names](https://www.namecheap.com/domains/domain-definition-what-is-a-domain-name/) and what is the role of [DNS - Domain Name Servers](./intro-to-dns-ip.md)?
  - domain names are aliases for I.P. addresses
  - (e.g. 1-800-INJURY translates to 1-800-345-6789)
- [What is a port?](https://www.techopedia.com/definition/24717/network-port) (it's like a phone plugged into a wall in your home waiting to be called)
- What is a server? - a program running on a computer that is connected to the Internet
  - A receptionist who sits by the phone plugged into the port in case someone (a client, e.g. your browser) calls
  - The phone they use is fancy and can handle multiple incoming calls
  - Engineers also say "server" when they mean a physical or virtual machine but that's not this usage
- What is a request handler?
  - e.g. the function called `requestHandler` in [this simple Node server example](https://blog.risingstack.com/your-first-node-js-http-server/)
  - The list of instructions you give the person you paid to answer the phone, e.g. if someone calls asking for "Alice", take a message. If someone asks for "Alex," tell the caller they no longer work there anymore and give them their new work phone number.

