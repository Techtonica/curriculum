# Networking, or How the Internet Works

### Projected Time

4 hours

### Prerequisites

- [Command Line](/command-line/command-line-interface.md)
- [Intro to Computer Networking](./README.md) - this emphasizes the parts that you need to know well, vs. just "know about"

### Motivation

As an engineer, your users will connect to your apps via the Internet! Understanding how the Internet actually works will help you know what your code is doing and how your code interacts with other code on the internet.

### Objectives

Understand the structure of the internet and how data is tranferred across the internet. Be able to answer questions such as:

- How are the devices on the Internet able to connect to each other?
- How is information physically transmitted from device to device?
- How does one device find another it’s trying to communicate with?
- What methods do devices on the internet use to communicate?
- How can we send data reliably even if the network is unreliable?

Understand the concepts used in web development: HTTP requests + responses, HTML, URLs, and more

### Specific Things to Learn

- Connections between computers (wired or wireless)
- IP Addresses
- DNS
- HTTP + HTTPS
- HTTP requests + responses
- URLs
- Ports
- Browser, client, server

### Materials

- [How DNS Works](https://howdns.works/ep1/)
- [Networking Zine](https://jvns.ca/networking-zine.pdf)
- [How Computers and the Internet Work](https://youtu.be/AV_VYsJnHQQ)
- [Server](https://www.techopedia.com/definition/2282/server)
- [Load Balancing](https://youtu.be/zHn2G71hoIk)
- [Wires,Cables and Wifi](https://www.youtube.com/watch?v=ZhEf7e4kopM)
- [IP+DNS](https://www.youtube.com/watch?v=5o8CwafCxnU)
- [Network](https://www.youtube.com/watch?v=PwoT18tp6Hs)

### Lesson

[Slide Deck - How the Internet Works](https://docs.google.com/presentation/d/1Ny1BZiNO5heJ2Ad-PaakGL4S861W8CfL7LHYFeun7Io/edit#slide=id.p)

### Independent Practice

These exercises are divided up by video. I recommend watching or re-watching the video, and then answering the questions for that section.

Many of the exercises involve using command line tools to explore different aspects of internet infrastructure. You can learn more about a tool by looking at its "man page" (short for "manual page"). These can sometimes be tricky to understand so don't worry if you don't understand everything! Even if you don't understand everything, you can often learn by spending some time reading the man page. You can also google a command to learn more about it.

#### Server

A server is a computer somewhere running all the time so it is always ready to respond to requests, called "serving a request" which is where the name `server` comes from.

One type of server is a web server that serves web pages. When you visit [Techtonica](https://techtonica.org/) the files you see are being delivered by a web server.

#### Wires, Cables, and Wifi

Watch the video: https://www.youtube.com/watch?v=ZhEf7e4kopM

Draw a picture that shows how your laptop might be able to communicate with a server in Japan. What are the different types of connections between devices? Compare your picture with someone else's.

#### IP Addresses + DNS

Watch the video: https://www.youtube.com/watch?v=5o8CwafCxnU

**Ping**

`ping` is a command line program that sends packets to an address and tells you the response. It can be used to see whether you are able to connect to a certain website and how long it takes for the request and response to arrive back.

You can type `man ping` in the Terminal to learn more about ping

Try running the following commands on Terminal. You can press CTRL-C to stop them.

- `ping www.berkeley.edu`
- `ping www.kyoto-u.ac.jp`
- `ping www.google.com`
- `ping www.this-website-does-not-really-exist.com`

Make up some ping commands yourself!

Questions:

1. Which URLs took the shortest and longest on average for packets to get to the server and back?
2. What could be causing the difference in times between pinging different URLs?

**IP Addresses**

Exercise 1:

- Did you know you can navigate to an IP address just like you can navigate to a URL?
- Try going to `63.245.215.20` in your browser
- What page is there?
- Why do we usually use URLs instead of IP addresses?

Exercise 2:

- Go to www.whatismyipaddress.com
- What's your IP address?
- Is it IPv4 or IPv6? How do you know?

**Dig**

`dig` is a command line program that looks up the DNS record for a URL.

You can type `man dig` in Terminal to learn more about dig.

Try running the following command on Terminal:
`dig google.com`

In the "ANSWER" section, you can see which IP address was found for the hostname. Which IP address was found for google.com?
What happens if you go to that URL in your browser?

#### Packets, Routing, and Reliability

Watch the video: https://www.youtube.com/watch?v=AYdF7b3nMto

**Traceroute**

`traceroute` prints the route that packets take to a network host (server).

You can type `man traceroute` in Terminal to learn more about traceroute.

Try running the following command on terminal:
`traceroute www.google.com`

Make up some traceroute commands yourself! A good one to try is to use a domain name for a website in another country or continent to see how many more hops it must make.

`traceroute www.independent.co.uk`

How many servers did your packets go through to get to the server hosting google.com?

#### HTTP + HTML

Watch the video: https://www.youtube.com/watch?v=kBXQZMmiA4s

When you open a website, your browser (the client) needs to get information from the server, which stores the information. To request information from a server, it makes HTTP requests. The server responds with the requested content, and then the browser displays that content to you. In this exercise we'll investigate which HTTP requests some websites are making and what content is being returned by the server.

We'll use Chrome DevTools to inspect requests and responses. We'll use the "Network" tab for this exercise.

You can watch this video to learn about the Network Tab: https://www.youtube.com/watch?v=PwoT18tp6Hs

**To open the DevTools network tab:**

1. Open Google Chrome
2. Open Chrome DevTools (Right click anywhere on the page -> Click "Inspect")
3. Click on the "Network" tab

We'll start by going to to https://news.ycombinator.com/news. Go to this site and open the Network tab. Refresh the page to see all the requests used to fetch the content for the page.

The Network tab will show all the requests that your browser made to the server. For each request you can see the method (GET/POST/PUT) and the response status (200/400/404/etc) and other information.

You can click on a request to see more specific information about that request. Once you click on a request, look at the tabs for Headers and Preview. "Headers" shows the data sent from the browser to the server, and "Preview" shows the response sent back from the server. The "Response" tab also shows the response, sometimes in a different format.

You can click the "X" to get back to the main network tab.

**Exercises:**

Go to https://news.ycombinator.com/news

- How many requests did our browser make to the server that hosts https://news.ycombinator.com/news?
- Did any requests fail? How do you know?
- Which request fetched the HTML for the page?
- Which request fetched the CSS for the page?
- What did the other requests fetch?
- Do you see GET or POST requests? Why do you think that type of request was used?

Let's do the same for https://techtonica.org/

- How many requests did our browser make to the server that hosts https://techtonica.org/?
- Did any requests fail? How do you know?
- Which request fetched the HTML for the page?
- What did the other requests fetch?
- Do you see GET or POST requests? Why do you think that type of request was used?

Now go to https://news.ycombinator.com/login. We'll look at how a browser and server could interact to let a user log in to a website. On https://news.ycombinator.com/login, in the "Login" form, put some random text in the "username" and "password" fields, and press "login".

- What request was made?
- What was the type of the request? Why do you think that type of request was used?
- Click on the request and go to the "Headers" section. Scroll to the bottom where it says "Form Data". Do you see the username and password you entered?

We chose pretty simple websites to look at for this exercise, but some websites are much more complex and make many requests to the server! Choose a few other websites to go to. Look at the requests being made from your browser to that website. What can you learn from looking at the Network tab?

### Challenges

Explain how traceroute discovers a path to a remote host. Read the `man` page to learn the answer!

Research in more depth how one of these works: TCP, HTTP, DNS.
Teach what you learned to someone else!

### Check for Understanding

Form small groups and answer these questions to assess your own understanding:

- How are the devices on the internet physically connected to each other?
- How is information physically transmitted from device to device?
- How does one device find another it’s trying to communicate with?
- What methods do devices on the internet use to communicate?
- How can we send data reliably even if the network is unreliable?

### Supplemental Materials

Watch some other videos about the internet:

- [IP addresses and DNS](https://www.youtube.com/watch?v=MwxMsaFFycg)
- [Encryption + public keys](https://www.youtube.com/watch?v=ZghMPWGXexs)
- [Cybersecurity](https://www.youtube.com/watch?v=AuYNXgO_f3Y)
- [How search work](https://www.youtube.com/watch?v=LVV_93mBfSU)
- [Packets, Routing, and Reliability](https://www.youtube.com/watch?v=AYdF7b3nMto)
