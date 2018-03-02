# ___How the internet works___

### Projected Time


### Prerequisites
- Terminal

### Motivation
As a web developer, your code will run on and interact with the internet! Understanding how the internet actually works will help you know what your code is doing and how your code interacts with other code on the internet.

### Objective
Understand the structure of the internet and how data is tranferred across the internet. Be able to answer questions such as:
- How are the devices on the internet physically connected to each other?
- How is information physically transmitted from device to device?
- How does one device find another it’s trying to communicate with?
- What methods do devices on the internet use to communicate?
- How can we send data reliably even if there are problems with computers on the network?

Understand the concepts used in web development: HTTP requests + responses, HTML, URLs

### Specific Things To Teach
- Physical connections between computers
- Binary
- IP Addresses
- DNS
- TCP + packets
- HTTP + HTTPS
- HTML
- HTTP requests + responses
- URLs
- Ports
- Browser, client, server

### Materials


### Mini Lesson


### Common Mistakes / Misconceptions


### Guided Practice


### Independent Practice


These exercises are divided up by video. I recommend watching or re-watching the video, and then answering the questions for that section.

#### Wires, cables, wifi 

Watch the video: https://www.youtube.com/watch?v=ZhEf7e4kopM

Draw a picture that shows how your laptop might be able to communicate with a server in Japan. What are the different types of connections between devices? Compare your picture with another apprentice.

#### IP + DNS

Watch the video: https://www.youtube.com/watch?v=5o8CwafCxnU

**Ping**

`ping` is a command line program that sends packets to an address and tells you the response. It can be used to see whether you are able to connect to a certain website and how long it takes for the request and response to arrive back.

You can type `man ping`  in the Terminal to learn more about ping

Try running the following commands on Terminal. You can press CTRL-C to stop them.
- `ping www.berkeley.edu`
- `ping www.kyoto-u.ac.jp`
- `ping www.google.com`
- `ping www.this-website-does-not-really-exist.com`

Make up some ping commands yourself!

Questions:
1. Which URLs took the longest on average for packets to get to the server and back?
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

Make up some traceroute commands yourself!

How many servers did your packets go through to get to the server hosting google.com?


#### HTTP + HTML 

Watch the video: https://www.youtube.com/watch?v=kBXQZMmiA4s
TODO


### Challenges

Explain how traceroute discovers a path to a remote host. Read the `man` page to learn the answer!

Research in more depth how one of these works: TCP, HTTP, DNS.
Teach what you learned to another apprentice!

Watch some other videos about the internet:
- Encryption + public keys https://www.youtube.com/watch?v=ZghMPWGXexs
- Cybersecurity: https://www.youtube.com/watch?v=AuYNXgO_f3Y
- How search works: https://www.youtube.com/watch?v=LVV_93mBfSU
