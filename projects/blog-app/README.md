### Full-Stack PERN Project: Blog app

### Introduction

Now that you have practice building apps, build something that allows us to know you better.

You are going to build a blog about whatever you want! The primary requirement is that you store at least 3 posts in your DB!

At the end of this week you should be very comfortable with: props, state, callback functions, CRUD operations, .map(), creating routes, creating tables, joining tables, searching for data in tables, using CSS

### Instructions/Notes

- **Styling/CSS is important for this assignment.**
- For this project, you can reference previous lessons and find your own resources online.
- You must use Express, React, and Postgres. You can choose what other technologies and libraries you want to use as well as part of the project.
- Incorporate a single AI feature


### Technology
- React
- JavaScript
- NodeJS
- ExpressJS
- SQL
- PostgreSQL
- Jest
- React Testing Library

#### PR

- Should be clean and only include files related to this project (You need to ask your mentor to do a full PR as well as one cohort mate)
- Include an appropriate .gitignore (don't commit node_modules!)
- Include a top-level README

### Backend:

- You need to use Postgres and Express to connect your DB.
- Your data can’t be hardcoded in the Front-end, it should come from a DB connection
- Feel free to imagine your own schema for this project, but make sure that you have a seed file with at least 3 elements

### Front-End Goals

Try to make your components small and as reusable as possible!

- React UI
- A list view with all your data
- A form so you can submit a new entry
- Choose a couple of fields that are required and have a couple that aren’t
- A click option to see the individual detail page
- Add at least one test to your components

### ✨ Incorporating AI ✨
Choose a way to incorporate AI into your project by implementing one of below features (note the examples are provided as a guide, you can certainly do another AI feature). Be intentional about researching each of the resources provided to you. Spend a day or two pseudocoding your application along with your AI feature before implementation.

**[OpenAI](https://platform.openai.com/docs/api-reference/introduction)**
- Text Summarization Feature: summarize long blog posts into shorter, digestible versions by adding an AI-powered text summarization feature
  - Use a pre-trained model like [BART](https://huggingface.co/facebook/bart-large-cnn) or T5 for text summarization
  - Integrate the OpenAI API to access the model
  - Create a new API endpoint in your Express backend to handle summarization
  - Implement a "Summarize" button on blog post pages
- Content Suggestion Feature: help bloggers generate ideas for new posts through AI-powered [text generation](https://www.tutorialspoint.com/natural_language_processing/nlp_text_generation.htm) suggestions
  - Use a language model for generating creative content
  - Provide topic suggestions based on existing blog content
  - Create a new API endpoint in your Express backend for content suggestions
  - Allow users to refine suggestions
- Image Generation Feature: allow bloggers to create custom images for their posts based on keywords or descriptions using AI models like [DALL-E](https://platform.openai.com/docs/guides/images/usage) or Stable Diffusion
  - Use a pre-trained image generation model
  - Create an Express endpoint to handle image generation requests
  - Integrate the model via an API or local inference
  - Implement a React component for users to input prompts and view generated images

**[Sentiment NPM Package](https://www.npmjs.com/package/sentiment)**
- Sentiment Analysis Feature: allowing users to see the emotional tone of comments or posts by adding sentiment analysis and [natural language processing](https://www.tutorialspoint.com/natural_language_processing/index.htm)
  - Use a pre-trained sentiment analysis model
  - Implement a color-coded sentiment indicator
  - Create a utility function for sentiment analysis
  - Add sentiment analysis to your Express backend when creating or updating posts
  - Display sentiment indicators in your React components and overall sentiment scores for posts

**[Google Translate API](https://cloud.google.com/translate/docs)**
- Automated Content Translation: make blog posts accessible to readers in different languages
  - Choose a reliable machine translation API
  - Create Express endpoints for translating text
  - Allow users to select target languages
  - Handle formatting and layout changes

