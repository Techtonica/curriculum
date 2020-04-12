# REST API

### Projected Time

About 2.5 hrs

- Lesson: 30 min
- Independent Practice: 120 min

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [API/JSON Lesson](/api/apis-and-json.md)

### Motivation

REST is probably the most popular style of web API currently in use. It is not a framework or language, it's more like Object-Oriented Programming (OOP), in that it's a way to focus and design your system.

### Objectives

- What is REST?
- REST Features.
- Guiding Principles of REST.
- HTTP Methods
- Advantages of REST

### Lesson

In a nutshell, REST is a style of API design that tries to be as close to standard HTTP as possible. Let's see what that means.

#### Non-REST

To understand REST, it's useful to first see the alternative. Network APIs existed before the Internet and before HTTP. Let's say you were designing an Eventonica web API. Your server is listening on port 7777. Any client that wants to use your API connects to this port and sends a JSON message using this HTTP request:

#### Requests

##### `getEvent`

```
POST / HTTP/1.1

{
   "actionName": "getEvent",
   "parameters": {
      { "eventId": 123 }
   }
}
```

Note that if you kind of squint, this almost looks like calling a function in JavaScript. In fact earlier APIs were designed as remote functions. And in your server code it will probably be handled by a function.

```javascript
Event.getEvent({ eventId: 123 });
```

Or consider the operation `addEvent`.

##### `addEvent`

```
POST / HTTP/1.1

{
   "actionName": "addEvent",
   "parameters": {
      "eventId": 123,
      "eventName": "Corgi Con",
      "public": true
   }
}
```

Which as a function would be:

```javascript
   Event.addEvent({ eventId: 123 ... });
```

#### Overlap with HTTP

But above you'll notice that HTTP already has some of these concepts baked into the standard, so we can reuse them to convey information and not have them in the message itself. **Put simply, that is what REST's philosophy is**.

HTTP allows you to request a resource by path, so let's simplify our design and have any action related to events be under the `/events` path. That way we don't need to repeat "event" throughout the message since we already know we're talking about events.

Let's modify add event to do that.

```
POST /events HTTP/1.1

{
   "action": "add",
   "id": 123,
   "name": "Corgi Con"
}
```

Note that we no longer need to clarify that it's `eventId` since we are already contextualizing the whole operation under `/events`.

And we can do even more with getEvent. Instead of just always using the HTTP verb POST, we can vary the verb to specify the message.

```
GET /events HTTP/1.1
```

But with the verb GET we can't include a body, so how do specify which event? HTTP already has the concept of request parameters, so let's use them

```
GET /events?id=123 HTTP/1.1
```

And that makes it clear how we'd want to delete events.

```
DELETE /events?id=456 HTTP/1.1
```

Being able to guess at the operations because they follow a consistent pattern is another huge advantage of REST.

#### Responses

REST helps us define the data coming back in the HTTP response too. In our non-REST example:

##### `getEvent`

```
POST / HTTP/1.1

{
   "actionName": "getEvent",
   "parameters": {
      { "eventId": 123 }
   }
}
```

The response to the above might be:

```
HTTP/1.1 200 OK

{
   "result": "OK",
   "errors": [],
   "data": {
      "eventId": 123,
      "eventName": "Corgi Con"
   }
}
```

Or if it couldn't find one:

```
HTTP/1.1 200 OK

{
   "result": "FAIL",
   "errors": ["Unable to find event with ID 123"],
   "data": null
}
```

#### HTTP Status Codes

But again HTTP already designed a perfectly useful standard of status codes, so let's use them.

```
HTTP/1.1 200 OK

{
   "id": 123,
   "name": "Corgi Con"
}
```

And if not found:

```
HTTP/1.1 404 NOT FOUND
```

Not we don't really need anything beyond that response, since it's self-explanatory. This is another advantage of REST.

### Independent Practice

Work with you pair on the [Mailing List REST API with Express activity](/projects/mailing-list-rest-api.md).

### Additional Reading

- For further reading comparing REST to alternative designs, see [Smashing Magazine's Guide to REST](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/).
