# What is DNS?

### Week 2 Keywords and Questions

- What is a DNS?
- What happens behind the scenes when you enter a URL?

PRO TIP: The activities in this curriculum are here for your continuous reference, so you don't have to dive deep now if the content and activities presented are beyond the level of understanding outlined in the day doc. You can take a mental note and come back later.

### Prerequisites

- [Command Line Lesson](https://github.com/Techtonica/curriculum/blob/main/dev-tools/command-line-interface.md)

### Motivation

Knowledge of the DNS is important when it comes to understanding the IP address or URL of a website. The DNS plays an important role in communicating with a website. When we enter "www.google.com", do you know what really happens behind the scenes? Let's find out.

### Objectives

- Participants will have a rudimentary understanding of how DNS works.

### Specific Things to Learn

- What is DNS?
  - What is the domain name?
    - Domain name vs. website
  - DNS stands for Domain Name System
  - DNS is a directory that matches friendly/readable names to IP addresses
    - Common metaphors
      - Meh: Phone books (so old school)
      - Better: Street addresses

### Materials

- Computer with a terminal application

### Group Lesson

1. On your command line, enter `ping google.com`. Let it run for a few seconds, then press control+C.
   "Does anyone know what **ping** means?"
   - **Ping**: to query another computer on a network to determine whether there is a connection to it.
   - The PING command sends packets of information to a specified IP Address and then measures the time it takes to get a response from the specified computer or device.

- Discuss the output from `ping google.com`.

2. DNS lookup: Act out what happens to the request. Literally have one person deliver a "packet," bouncing from different name servers, like what happens in [this video](https://www.youtube.com/watch?v=72snZctFFtA) or [this comic](https://howdns.works/ep1/).

- ![A visual explanation of how DNS lookups work](http://farm3.static.flickr.com/2435/3607857746_b4372ba3ba_o.png)

#### If a browser has a domain name like www.abc.com that it needs an IP address for, it will query these systems in order:

- Its own Operating System. If the domain name's corresponding IP address isn't on record, then it will query...

- The name server (DNS server) it is set up to use. This is the recursive name server shown above. The name server doesn’t know the IP address for www.abc.com, so it will start the following chain of queries before it can report back the IP address to your computer:

  1. Query the Internet root servers to get the name servers for the .com TLD.

  2. Query the .com TLD name servers to get the authoritative name servers for abc.com.

  3. Query the authoritative name servers for abc.com to finally get the IP address for the host www.abc.com, then return that IP address to your computer.

- Done! Now that your computer has the IP address for www.abc.com, it can access that host.

  (photo and steps are from https://www.pingdom.com/blog/a-visual-explanation-of-how-dns-lookups-work/)

### Group Practice

Let's set up a DNS server locally, it's easy!

1. Enter `sudo vim /etc/hosts`

   <pre><span class="cp">##</span>
   <span class="cp"># Host Database</span>
   <span class="cp">#</span>
   <span class="cp"># localhost is used to configure the loopback interface</span>
   <span class="cp"># when the system is booting. Do not change this entry.</span>
   <span class="cp">##</span>
   <span class="mf">127.0.0.1</span>   <span class="n">localhost</span>
   <span class="mf">255.255.255.255</span> <span class="n">broadcasthost</span>
   <span class="o">::</span><span class="mi">1</span>             <span class="n">localhost</span>
   <span class="n">fe80</span><span class="o">::</span><span class="mi">1</span><span class="o">%</span><span class="n">lo0</span> <span class="n">localhost</span>
   </pre>

2. Discuss the output of ipaddress domain

   <pre><span class="cp">##</span>
   <span class="cp"># Host Database</span>
   <span class="cp">#</span>
   <span class="cp"># localhost is used to configure the loopback interface</span>
   <span class="cp"># when the system is booting. Do not change this entry.</span>
   <span class="cp">##</span>
   <span class="mf">127.0.0.1</span>   <span class="n">localhost</span>
   <span class="mf">255.255.255.255</span> <span class="n">broadcasthost</span>
   <span class="o">::</span><span class="mi">1</span>             <span class="n">localhost</span>
   <span class="n">fe80</span><span class="o">::</span><span class="mi">1</span><span class="o">%</span><span class="n">lo0</span> <span class="n">localhost</span>
   </pre>

3. Edit hosts file to point '127.0.0.1' to 'whatever.whodat'

Example:

  <pre><span class="mf">127.0.0.1</span>   <span class="n">myblog</span><span class="p">.</span><span class="n">dev</span>
  </pre>

4. Ping whatever.whodat

Expected output:

<pre><span class="err">\$</span> <span class="n">ping</span> <span class="n">myblog</span><span class="p">.</span><span class="n">dev</span>
<span class="n">PING</span> <span class="n">myblog</span><span class="p">.</span><span class="n">dev</span> <span class="p">(</span><span class="mf">127.0.0.1</span><span class="p">)</span><span class="o">:</span> <span class="mi">56</span> <span class="n">data</span> <span class="n">bytes</span>
<span class="mi">64</span> <span class="n">bytes</span> <span class="n">from</span> <span class="mf">127.0.0.1</span><span class="o">:</span> <span class="n">icmp_seq</span><span class="o">=</span><span class="mi">0</span> <span class="n">ttl</span><span class="o">=</span><span class="mi">64</span> <span class="n">time</span><span class="o">=</span><span class="mf">0.041</span> <span class="n">ms</span>
<span class="mi">64</span> <span class="n">bytes</span> <span class="n">from</span> <span class="mf">127.0.0.1</span><span class="o">:</span> <span class="n">icmp_seq</span><span class="o">=</span><span class="mi">1</span> <span class="n">ttl</span><span class="o">=</span><span class="mi">64</span> <span class="n">time</span><span class="o">=</span><span class="mf">0.089</span> <span class="n">ms</span>
<span class="mi">64</span> <span class="n">bytes</span> <span class="n">from</span> <span class="mf">127.0.0.1</span><span class="o">:</span> <span class="n">icmp_seq</span><span class="o">=</span><span class="mi">2</span> <span class="n">ttl</span><span class="o">=</span><span class="mi">64</span> <span class="n">time</span><span class="o">=</span><span class="mf">0.047</span> <span class="n">ms</span>
</pre>

### Independent Practice

- Spend 20 minutes watching [this video](https://www.youtube.com/watch?v=72snZctFFtA) and reading [this comic](https://howdns.works/ep1/). Take notes if you think it will help.

- Find a partner. Without any resources to look at, try to explain the process after your partner asks you, "What happens when you enter google.com in your browser search bar?"

### Challenge

- Run a local domain name server on your computer that can resolve all requests for a given top-level domain to the localhost, and forward everything else to the Internet as normal.

### Check for Understanding

Chat with your pair partner for the day and answer these questions to assess your own understanding:

- How does DNS work?
- What happens when you enter a website in your browser search bar?
- What does `ping` mean and what does it do in the command line?
