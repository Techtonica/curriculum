# Planning Your Project

This document will help you clearly define your MVP and distill your functionality into features. These are tools to break up your app into smaller tasks—all of these can (and should!) be revised as you go.

### Objectives

- Define your MVP.
- Add collaborators to your project.
- Plan your features.
- Identify the tools and frameworks you will use.
- Identify any technical risks.
- Build a minimal user flow.
- Sketch out wireframes.
- Draft your data model schema.
- Define your API routes.
- Plan your visual design.
- Revise and prioritize.
- Create a project timeline.

### Define your MVP

An MVP (minimum viable product) is a product with just enough features to demonstrate the functionality of the product. For a company, an MVP’s purpose is to show enough features to satisfy initial users/stakeholders before using too much time, money, and other resources.

- [ ] Decide what the core functionality of your app is.
- [ ] Come up with a one-sentence pitch of your app.

### Collaborators

Create a GitHub repo for your project with your one sentence pitch as the description.

- [ ] Add your mentor to your project's repo as a collaborator.
- [ ] Add your cohort buddy to your project's repo as a collaborator.

### Features

A feature is something an app user can do, like save personal information, take a picture, send a message, or rate something. Keep features simple and break them down into the smaller parts required. For example, allowing a user to log in requires creating a route to handle the login, a database query to confirm a user is already registered, and a session to store the user’s user ID.

- [ ] Decide which minimum features are needed for your app to be considered functional.
- [ ] Decide which features are better defined as nice-to-haves.
- [ ] Consider which skills these features should demonstrate.
- [ ] Break down the steps to building your features.

### Tools & Frameworks

- [ ] List all the tools and frameworks you intend to use in your project. You are **required** to use React, CSS, Express, Node, and PostgreSQL; also include any additional electives you completed that make sense to include. If it replaces some of the requirements, be clear in your proposal and planning that this is the case (i.e. using a CSS Framework instead of building your own custom rules).

### Technical Risks

- [ ] Identify any technical risks you anticipate having with your project, for example an API becoming unavailable.

### User Flow

A user flow diagram shows how users interact with your app. To plan what code is needed, consider what views are needed for your user. Do users start on a splash page or a login page? Should they go in a specific order? Here's an example of what a user flow through Amazon might look like:

![User flow example](./user-flow.png 'User flow example')

- [ ] Sketch or write out your app’s user flow. Represent each page with a square and draw arrows to show the movement from one page to the next. Label the arrows with the action that will trigger moving to another page, like logging in or clicking on a button.

### Wireframes

Wireframes are diagrams that represent simplified content on individual pages. Use wireframing to consider how your user flows would best fit into the structure of a page.

Here's an example wireframe:

![Wireframe example](./wireframe.png 'Wireframe example')

- [ ] For each of your pages, create a wireframe that reflects the user flow you’ve already sketched. Label content where triggers for another page can be activated (as outlined in your user flow sketch). One tool that could be useful for creating your wireframe is [Balsamiq](https://balsamiq.com/).

### Data Model

Look at your user flow and wireframes to determine what you’ll need to create, read, update, or delete from your database as you move from page to page. Consider what data you’ll have through APIs, users, page content, etc. to plan a schema for your objects. A sample simple schema could be:

![Data model schema](./data-model-schema.png 'Data model schema')

[Additional data model types can be found here](https://www.lucidchart.com/pages/database-diagram/database-models).

- [ ] Draft your first schema for your data model, including the data fields, data types, and table keys.

**Remember**

- Don’t waste resources on data that’s hard to access.
- Don’t request more data than you need.
- Showing off your tech skills is more important than displaying perfect data.
- Quick dummy datasets are an option ([Mockaroo](https://mockaroo.com/) can help with this).
- Revise your data model as you go.

### API Routes

Define the actions of your app that need to save or retrieve data and list the API routes for them, e.g.

- GET /books
  - JSON response looks like...
- POST /books - create a new book
  - JSON body should look like...

### Visual Design

**Call to Action**
From the design, it should be obvious what you expect the user to do on each page. If you want the user to log in, click a button, watch a video, or do something else, the trigger to that action should grab the most attention on the page.

- [ ] Highlight the focus/call-to-action of each page in your wireframes.

**Be Consistent and Considerate**
Consider your audience and subject (not your own style) when making design choices. Your users will thank you for simplicity, legibility, and consistency.

Look at conventions on other sites and stick with them. For example, login links are usually in the top right corner of navbars, so that’s where your login link should be because that’s where your users will expect it. Responsive design is important for users to be able to use your app on any device.

- [ ] Write down who your audience is and what your app’s subject or category is.
- [ ] Select the colors, fonts, text sizes, images, etc. to be used in your project.
- [ ] Plan how you’ll implement responsive design.

### Revise and Prioritize

- [ ] Revise your plan based on what you’ve learned and the decisions you’ve made. Do you need to eliminate or adjust your data model, wireframes, or most-important features?
- [ ] Put your content, pages, features, and design tasks into order of priority.

### Timeline

Take a look at the suggested daily schedule and required milestones for all four weeks of your project referenced [here](https://github.com/Techtonica/curriculum/blob/main/projects/final-project/README.md#schedule).

- [ ] Create a daily schedule for your project.

### Example

[Here is an example of a great project plan by a Techtonica Apprentice.
](https://docs.google.com/document/d/112iEc0IX7SAVonfyqVeFfuz5JazklGnto8bE3-YAZYQ/edit?usp=sharing) (Google Doc) Please note that this example does not showcase **every** current requirement.

### Common Misconceptions / Things to Avoid

Some things people have missed in past cohorts:

- Include your name, title, and GitHub link
- Have separate MVP functionality and pitch sections
- Include visual design plans
