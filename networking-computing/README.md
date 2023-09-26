# Networking (Computing)

### Week 2 Keywords and Questions

- What is an IP address?
- Can you find your device's IP address?
- Can you find the IP address of a website?
- What is a domain name?
- What is a domain name server?
- What is a port?
- What is a server?
- What is a server request?
- Can you explain in your own words, to a non-technical person, how the internet works? See [How the Internet Works](./how-the-internet-works.md)
  - Client
  - HTTP request to a server
  - A server is a big central computer that holds the physical data for a website
  - A domain name is human-readable
  - The DNS asks for the IP address - it's like the street address of the server holding the data which then directs me to the actual location where the data is being stored
  - That data comes back over HTTP and is shown or rendered onto the client's screen

### Week 5 Keywords and Questions

- What is a port?
- What is a server?
- What is a request handler?

## Introduction

Networking is a fundamental skill to have as an engineer that transcends frameworks, languages, and even devices. Even smart lightbulbs use networking, so this is something that applies to almost any hardware or software project you will ever work on.

## Quick Start: What do I _need_ to know?

Networking is a huge topic. Time learning what's behind all the tools you use is likely time well-spent, but if you're trying to prioritize what to learn, these are must-know topics for your time at Techtonica.

☎️ During this lesson, we'll use the analogy of a physical phone system with wires. This may be an antiquated concept, but it's actually where a lot of network theory came from, so put your time-travel caps on and follow us back in time...

- An I.P. (Internet Protocol) address is similar to a phone number: it's a unique way for anyone in the world to reach you
- Like in an office, some folks have private extensions, e.g. 1234, that only others at the office can call
- Others, like the front desk, are public numbers that can be called from the outside
- What are [domain names](https://www.namecheap.com/domains/domain-definition-what-is-a-domain-name/) and what is the role of [DNS - Domain Name Servers](./intro-to-dns-ip.md)?
  - Domain names are the easy-to-read version of I.P. addresses
  - (e.g. 1-800-INJURY translates to 1-800-345-6789)
- [What is a port?](https://www.techopedia.com/definition/24717/network-port) (it's like a phone plugged into a wall in your home waiting to be called)
- What is a server? - a program running on a computer that is connected to the Internet
  - A receptionist sits by the phone plugged into the port in case someone (a client, e.g. your browser) calls
  - The phone they use is fancy and can handle multiple incoming calls
  - Engineers also say "server" when they mean a physical or virtual machine, but that's not what it means here
- What is a request handler?
  - e.g. the function called `requestHandler` in [this simple Node server example](https://blog.risingstack.com/your-first-node-js-http-server/)
  - The list of instructions you give the person you paid to answer the phone, e.g. if someone calls asking for "Alice", take a message. If someone asks for "Alex," tell the caller they no longer work there and give them their new work phone number.
