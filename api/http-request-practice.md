# HTTP Request Practice

### Projected Time

** TODO: add after someone dry-runs it**
Example: ????
- Lesson: ? min
- Guided Practice: ?-? min
- Independent Practice: ? min
- Check for Understanding: ?-? min

### Prerequisites

* [APIs & JSON](./apis-and-json.md)
* [Twilio API](./twilio-api.md)
* [REST API](./REST-API.md)

### Motivation

HTTP is the most common way you will retrieve anything from the internet: usually web pages or API data (see [API & JSON lesson](https://github.com/Techtonica/curriculum/blob/master/api/apis-and-json.md)). It's the backbone of the web. Since HTTP is so simple and versatile (it's just text!), you can make requests lots of different ways.

### Objectives

**Participants will be able to:**

- Make HTTP requests using a variety of mechanisms.

### Specific Things to Learn

- Basics of an HTTP Request
- Six different ways to make an HTTP request
	- Postman (Mac GUI app)
	- curl
	- XMLHttpRequest (aka AJAX) in the browser
	- fetch (promises) in the browser
	- http.request in Node.js
	- fetch in Node.js

### Materials

- [HTTP Crash Course](https://www.youtube.com/watch?v=iYM2zFP3Zn0) - _first 17 minutes are all that matter but feel free to watch the whole thing as it covers Postman_
-  b0rk's [Anatomy of an HTTP Request](https://twitter.com/b0rk/status/1145362860136177664/photo/1)

### Lesson

HTTP requests are text-based messages used to request a resource from a server. In these lessons we'll focus on GET requests but there are other methods as well, such as POST, which is used on a form to submit data or in an API to save data.

**TODO: add slides. @alodahl will provide template**

#### Postman - Time API

Open Postman to make a new GET request.

`https://worldtimeapi.org/api/ip`

![](postman-time-example.png)

Inspect the result. If you want you can try out other types of requests listed on the [API doc](http://worldtimeapi.org/). Varying the URL will give you different data.


#### curl - Time API

Now let's make the same request using the [`curl`](https://en.wikipedia.org/wiki/CURL) command line unix utility.

Find the `Code` link in Postman on the right.

![](postman-code.png)

This will allow us to make the same request using a variety of other tools. Choose `cURL` from the dropdown.

You will see something like this:

```bash
curl -X GET \
  https://worldtimeapi.org/api/ip \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: worldtimeapi.org' \
  -H 'Postman-Token: 8d3f63db-f54f-48fe-997f-f1f678464644,f75b0ac1-ec5e-489d-af1a-fdefc80d56f9' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache'
```

Copy this entire snippet and paste into Terminal.

You should see output like this:

```json
{"week_number":47,"utc_offset":"-08:00","utc_datetime":"2019-11-20T17:08:24.181139+00:00","unixtime":1574269704,"timezone":"America/Los_Angeles","raw_offset":-28800,"dst_until":null,"dst_offset":0,"dst_from":null,"dst":false,"day_of_year":324,"day_of_week":3,"datetime":"2019-11-20T09:08:24.181139-08:00","client_ip":"69.181.221.255","abbreviation":"PST"}%
```

##### Note about HTTP Headers
You might wonder where all those `-H` lines are coming from when we only put the URL in Postman. As we learned in the HTTP video, headers tell the server additional options. They are like _flags_ in a command line tool or _parameters_ in a JavaScript function. In the case of HTTP, they are almost always optional. 

- Copy _only_ the first two lines and paste it into terminal (do not include the second `\`)
- The result should be the same

Why was it the same? In our case, Postman generated a set of sensible defaults. If we omit them, the server will have its own sensible defaults and so the result is more or less the same.

##### Discussion - Postman & `curl`

- If Postman can generate code for `curl` and other tools, what does that tell us about Postman?

#### XMLHttpRequest - Time API

Now let's go into the browser world, which is more useful for creating web apps.

First, we will use the original interface, `XMLHttpRequest` which was added to JavaScript to allow the original background requests commonly called _AJAX_. It is a little awkward to use.

```javascript
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://worldtimeapi.org/api/ip");
oReq.send();
```

If correct, you should see the result:

```javascript
Object { week_number: 47, utc_offset: "-08:00", utc_datetime: "2019-11-20T19:17:12.777523+00:00", unixtime: 1574277432, timezone: "America/Los_Angeles", raw_offset: -28800, dst_until: null, dst_offset: 0, dst_from: null, dst: false, … }
```

#### `window.fetch` - Time API

`XMLHttpRequest`, which you just learned about, has a complicated interface which led most engineers to wrap it in a friendlier syntax. jQuery was the most common one because it also gave developers lots of other helpful utilities.

However, newer browsers expose an interface called `fetch` that is much easier to use and leverages native `Promise` for simpler processing of the result. And since it is built-in you don't need to add any libraries to use it in the browser.

Let's try it out!

- Open [https://worldtimeapi.org/](https://worldtimeapi.org/) in your browser
- Open the Developer console
- `response = await fetch('https://worldtimeapi.org/api/ip')`
- Once the promise resolves, response will contain a JavaScript object representing the response from the server
- To see the body as like above, execute `await response.json()`



##### fetch - Discussion Questions

- Notice that even retrieving the body uses Promises (not the `await`). What are some reasons this might be the way it was designed?
- Usually you need to be inside an `async` function to use `await`? Why didn't we need to worry about that here?

##### fetch - Browser Compatibility

[https://caniuse.com/#feat=fetch](https://caniuse.com/#feat=fetch)

Almost all modern browsers support `fetch`. Unless your app needs to support IE11, then it's safe to use. Even then, you can polyfill it.

### `http.request` in Node

There are too many HTTP libraries to count in Node, but there is one that is built-in that we'll use.

```javascript
const options = {
  hostname: 'worldtimeapi.org',
  port: 443,
  path: '/api/ip',
  method: 'GET'
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
});

req.end();

```

### Common Mistakes / Misconceptions

Open a new tab and try to issue the same `fetch` command. What happens?

- [b0rk explains CORS](https://twitter.com/b0rk/status/1162392625057583104)
- [Hacking It Out: When CORS won’t let you be great](https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646)

To keep things simple, for this example, we just load the same origin, worldtimeapi.org, so we didn't have to worry about it.

### Guided Practice

`fetch` is a standard added by browsers but if you like it, it's also available as a [package for node](https://www.npmjs.com/package/node-fetch). Let's use it!

- `npm install --save node-fetch`
- open node REPL
- `require('node-fetch')`
- Run the same command from fetch in the browser but in your node repl


### Independent Practice

Since there are tons of libraries out there, now's a great time to try a few and see what you like/dislike about them compared to those we used above.

- [5 Ways to Make HTTP Requests in Node.js](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)

*Exercise:* 

- Choose 2 libraries from the above article and take a few notes comparing them.
- Which was your most favorite of the 5 + 2? Your _least favorite_?


### Challenge

#### Advanced: Node.js Web Server
You have been using Express to implement a web server. Node also has a lower level library, which is part of the same library as `http.request`. It is called `http.server`.

Find a tutorial to make the simplest possible Node web server using _only_ `http.server` and make some requests against it with your favorite HTTP client library from above.

#### Advanced: DIY using telnet

- `brew install telnet` if not installed
- format is `telnet server port` (note: it's not a colon like in a URL)
- `telnet www.google.com 80`
- It will connect and inform you of the escape character
- type `GET / HTTP/1.1` then enter twice. This is the smallest valid HTTP request
- A Google web server will spit out the Google home page

If you're curious what each required piece is, check out this [simplified HTTP specification](https://www.jmarshall.com/easy/http/#requestline). The [complete spec](https://www.w3.org/Protocols/rfc2616/rfc2616.html) is huge and uses a formal mathematical language if you want to go down a rabbit hole.

#### Discussion Question

- Why would you pick one way to make a request over another?
- What affordances to higher-level libraries give us? What does "higher-level library" mean?
- Aside from ease of use from an engineer perspective, what other pros/cons would a software team use to choose an HTTP library for their project?

### Check for Understanding

#### Paper Request
- Your the client: on **paper** write out a basic HTTP request 
- Hand it to your pair. They are the *server*.
- If the request is valid, write out a valid response and give it back to them
- If the request is not valid, identify how to fix it.

#### Discuss Your Most/Least Favorite Tools

- Did either of you choose the same one?

### Supplemental Materials

![](https://http.cat/408.jpg)

- [HTTP Status Code Cats](https://http.cat/ =100px)
- [HTTPS explained with Carrier Pigeons](https://www.freecodecamp.org/news/https-explained-with-carrier-pigeons-7029d2193351/)

*TODO: add more, Michelle had one she mentioned*
