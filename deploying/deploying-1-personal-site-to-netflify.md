# Deploying - SOME STUFF HERE

## Reminder: This is Optional

Deployment is not a requirement of the portfolio project, but if you have the extra time and would like to do so, here is a resource.

## Static vs. Dynamic Content

There are two types of content on the web:

1. Static content: Static content doesn't change -- the server will always serve the exact same data to the client. NOTE: This doesn't meant that the content can't be interactive or use client side JavaScript, just that the JavaScript that the server sends to the client will always be the same.
2. Dynamic content: Content that is computed by the server and can change based on code that is executed on the server.

Static content is much much simpler and cheaper to deploy. Since the content is static, the server doesn't need to run any custom code and can instead just serve static files which is highly optimized.

Your personal site is static (probably!) and is a good candidate to be deployed with a static hosting provider.

## Deploying Your Personal Site with Netlify

For deploying your personal site, we'll use Netlify which is a great static hosting provider. Netlify will allow you to take a GitHub repository with your personal site made with React (or another static site builder like Hugo) and deploy it to the internet.

1. Go to https://netlify.com and find the button to sign up.
2. Connect your GitHub account and select the repository you want to deploy.
3. Debug! It might take some tweaks. If you need to run a command to build your site, eg. `yarn build`, you might need to configure that on Netlify. If your site isn't working properly, find the deploy logs and try to figure out what's wrong. If you are stuck, ask for help!
4. Success! Your site is on the internet, but it will be on a pretty bad URL like flying-zombies.netlify.com. Setup Netlify with a custom domain. You'll need to configure the nameservers for your domain (on the website of the company you purchased the domain from) to point to Netlify instead. Netlify provides fairly detailed instructions, but feel free to ask for help if you get stuck. Because of the layers of caching inherent in DNS (see "How the Internet Works") it will take a few minutes (or a couple of hours) for your changes to take effect.

## Tutorials

- ['Deploying on Netlify' tutorial with screenshots](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/).
- Here is a [video tutorial](https://www.youtube.com/watch?v=vkoVJkWb84A) of a static-site deployment with GitHub and Netlify that includes the use of environment variables.

## Challenge

- Deploy an existing project in your GitHub account to Netlify. It doesn't have to be pretty.

### Common Mistakes

- There's no need to choose a custom domain, template, or https - these are just options that you could use in the future.
