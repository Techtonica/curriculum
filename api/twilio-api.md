# TwilioQuest Exercise Outline

### Projected Time

About 45 - 90 minutes

### Prerequisites

N/A

### Motivation

Twilio is used at many companies to send text messages, and learning Twilio will help prepare you for things you could encounter in real world situations at a job. Plus, if you complete TwilioQuest, Twilio will send you a free t-shirt! :)

**Companies who use this technology:** [Lyft](https://www.lyft.com/rider) — when you call your driver or they call you, neither of you know each other's numbers because of Twilio. Delivery services like [Omni](https://www.beomni.com/) are able to text you using Twilio.

### Objectives

**Participants will be able to:**

- Set up their own Twilio Phone Number
- Send a text message to your phone from the Twilio Console
- Create a TwiML Bin that greets a voice caller
- Generate TwiML with Twilio Functions to respond to SMS messages with a random fact about dogs
- Set up NGROK for local development

### Specific Things to Learn

- Learn how to use the API explorer for Twilio APIs. - Create a POST request using JSON and look at the Response.
- Create a TWIML Bin. Host some TwiML with Twilio without having to set up a server. - Create a TwiML Bin that greets a voice caller. Configure your Twilio voice phone number to answer voice calls with that TwiML Bin.
- Twilio Functions - Write your own Node.js code using Twilio Functions.
- Set up NGROK for local development.

### Materials

- [TwilioQuest](https://www.twilio.com/quest)
- [TwilioQuest Tutorial Video (14min watch)](https://www.youtube.com/watch?v=ZzAEAfYw2xc)

### Lesson

**What is TwilioQuest?**

TwilioQuest is an interactive tutorial where users can learn how to use Twilio to create automated text messages & responses.

**What will I learn/what will I work on?**

- **Objective:** Get a Twilio Phone Number - Setup a Twilio phone number that can handle both voice/text. \*Note: TwilioQuest uses the verbiage “buy” but you do not actually have to pay for anything as long as you don’t enter a billing address.

- **Objective:** Explore the Twilio API Explorer - Learn how to use the API explorer for Twilio APIs. In this objective, you'll send a text message to your phone from the Twilio Console. - **Exercise:** Create a POST request using JSON and look at the Response.

- Example:
  ![alt text](./Screen%20Shot%202018-10-08%20at%207.15.15%20PM.png)

- **Objective:** Create a TWIML Bin - TwiML is the key to working with voice calls and responding to SMS messages. Host some TwiML with Twilio without having to set up a server. - **Exercise:** Create a TwiML Bin that greets a voice caller. Configure your Twilio voice phone number to answer voice calls with that TwiML Bin. Dial your Twilio number to confirm it answers the call and plays your greeting.

- Example:
  ![alt text](./Screen%20Shot%202018-10-08%20at%207.26.01%20PM.png)

- **Objective:** Twilio Functions - When a TwiML Bin won’t do, you can write your own Node.js code using Twilio Functions. - **Exercise:** Generate TwiML with Twilio Functions to respond to SMS messages with a random fact about dogs. Configure a Twilio phone number to respond to SMS messages with that Twilio Function. Send a text message to your Twilio number to confirm it responds with a dog fact.
- Example:
  ![alt text](./Screen%20Shot%202018-10-08%20at%207.31.03%20PM.png)

- **Objective:** Set up NGROK for local development. \*Note: This step is necessary if you plan to develop locally. When the time comes to test that server code you've written, you need a way to publicly access it without the hassle of deploying to a public host. This is where ngrok can help us. - **Exercise:** Serve up a static web page that displays the text “Hello World” - accessible from the public internet. Verify the page can be reached via your ngrok URL (either in a new browser tab, or your mobile browser of choice).
- Example:
  ![alt text](./Screen%20Shot%202018-10-08%20at%207.44.02%20PM.png)
  ![alt text](./Screen%20Shot%202018-10-08%20at%207.44.12%20PM.png)
  ![alt text](./Screen%20Shot%202018-10-08%20at%207.44.22%20PM.png)

### Common Mistakes / Misconceptions

TwilioQuest is completely free! Sometimes, it uses the verbiage "buy" or lists prices, but users do not have to actually pay for anything as long as they don't enter a billing address!

### Guided Practice

N/A - This is independent practice. TwilioQuest guides you along as you go.

### Independent Practice

Work through the TwilioQuest "Getting Started" mission (5 objectives/exercises).

### Challenge

On the Missions page (https://www.twilio.com/quest#missions) users can choose from additional mission topics such as Programmable SMS, Programmable Voice, Programmable Video, Lookup, SMS for Field Organizers, Messaging at Scale, Two Factor Authentication (2FA), or contribute to Open Source projects on GitHub. Users can also find in person events to participate in!

### Check for Understanding

After each exercise, TwilioQuest prompts you to enter your Twilio phone number, and it will verify you have successfully completed each objective.
