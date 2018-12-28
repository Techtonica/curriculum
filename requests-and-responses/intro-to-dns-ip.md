# What is DNS?

### Projected Time
About 1 hour

- Lesson - 10 min
- Guided Practice - 10 min
- Independent Practice - 30-40 min

### Prerequisites
- [Command Line Lesson](/command-line/command-line-interface.md)

### Objectives
- Participants will have a rudimentary understanding of how DNS works.

### Specific Things To Teach

- What is DNS?
  - First, what is domain name?
    - Domain name vs website
  - DNS stands for: Domain name system
  - DNS is a directory that maps friendly/readable names to IP addresses
    - Common metaphors
      - Meh: Phone books (so old school)
      - Better: Street addresses

### Materials
- Computer with terminal application

### Lesson
1. On your command line, enter ```ping google.com```.  Let it run for a few seconds, then press control+C.
  - Definition of ping
    The PING command sends packets of information to a specified IP Address and then measures the time it takes to get a response from the  specified computer or device.
  - Discuss output

2. DNS lookup
  - Act out what happens to the request
  - Literally have one person deliver a "packet," bouncing from different name servers, like what happens in [this video](https://www.youtube.com/watch?v=72snZctFFtA) or [this comic](https://howdns.works/ep1/).

### Guided Practice
Let's setup a DNS server locally, it's easy!
1. Enter ```sudo vim /etc/hosts```
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

2. discuss output of: ipaddress  domain
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

4. ping whatever.whodat

  Expected output:
    <pre><span class="err">$</span> <span class="n">ping</span> <span class="n">myblog</span><span class="p">.</span><span class="n">dev</span>
    <span class="n">PING</span> <span class="n">myblog</span><span class="p">.</span><span class="n">dev</span> <span class="p">(</span><span class="mf">127.0.0.1</span><span class="p">)</span><span class="o">:</span> <span class="mi">56</span> <span class="n">data</span> <span class="n">bytes</span>
    <span class="mi">64</span> <span class="n">bytes</span> <span class="n">from</span> <span class="mf">127.0.0.1</span><span class="o">:</span> <span class="n">icmp_seq</span><span class="o">=</span><span class="mi">0</span> <span class="n">ttl</span><span class="o">=</span><span class="mi">64</span> <span class="n">time</span><span class="o">=</span><span class="mf">0.041</span> <span class="n">ms</span>
    <span class="mi">64</span> <span class="n">bytes</span> <span class="n">from</span> <span class="mf">127.0.0.1</span><span class="o">:</span> <span class="n">icmp_seq</span><span class="o">=</span><span class="mi">1</span> <span class="n">ttl</span><span class="o">=</span><span class="mi">64</span> <span class="n">time</span><span class="o">=</span><span class="mf">0.089</span> <span class="n">ms</span>
    <span class="mi">64</span> <span class="n">bytes</span> <span class="n">from</span> <span class="mf">127.0.0.1</span><span class="o">:</span> <span class="n">icmp_seq</span><span class="o">=</span><span class="mi">2</span> <span class="n">ttl</span><span class="o">=</span><span class="mi">64</span> <span class="n">time</span><span class="o">=</span><span class="mf">0.047</span> <span class="n">ms</span>
    </pre>
 

### Independent Practice
- Spend 20 minutes watching [this video](https://www.youtube.com/watch?v=72snZctFFtA) and reading [this comic](https://howdns.works/ep1/).  Take notes if you think it will help.

- Find a partner. Without any resources to look at,  try to explain the process after your partner asks you, "What happens when you enter google.com in your browser search bar?"

### Challenge
- Run a local domain name server on your computer that can resolve all requests for a given top level domain to the localhost, and forward everything else to the Internet as normal.
