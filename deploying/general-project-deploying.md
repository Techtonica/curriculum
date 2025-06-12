# Deploying Your Web Application

## Projected Time

About 3-4 hours

## Prerequisites

- Basic understanding of web development concepts
- A completed web application project ready for deployment
- Command line/terminal familiarity
- Git version control basics

## Motivation

Deployment is the process of making your application available on the web for others to use. After spending time building your application locally, deployment is how you share your work with the world. Understanding deployment concepts is essential for any web developer, regardless of which specific platform you ultimately use.

## Objectives

- Understand the difference between development and production environments
- Prepare an application for deployment by following best practices
- Choose an appropriate deployment platform based on project requirements
- Configure environment variables for production
- Deploy a basic web application to a hosting service
- Troubleshoot common deployment issues

## Specific Things to Learn

- Deployment environments (development, staging, production)
- Environment variables and configuration management
- Build processes for production
- Static vs. dynamic site deployment
- Continuous Integration/Continuous Deployment (CI/CD) concepts
- Domain configuration and DNS basics
- Monitoring deployed applications

## Materials

- [Web Deployment Explained Simply](https://www.youtube.com/watch?v=M6i8F8-Jz8k)
- [What is CI/CD?](https://www.redhat.com/en/topics/devops/what-is-ci-cd)
- [The Twelve-Factor App](https://12factor.net/) - Industry standard methodology for building deployable web applications

## Lesson

### What is Deployment?

Deployment is the process of making your application available on the internet. This involves:

1. Preparing your code for a production environment
2. Choosing and configuring a hosting platform
3. Uploading or pushing your code to that platform
4. Configuring any necessary services (databases, authentication, etc.)
5. Making your application accessible via a URL

### Deployment Environments

- **Development**: Your local environment where you build and test features
- **Staging**: An environment that mimics production for final testing
- **Production**: The live environment that users interact with

### Preparing Your Application for Deployment

1. **Environment Variables**
   - Sensitive information should never be hardcoded
   - Use environment variables for API keys, database credentials, etc.
   - Different platforms have different ways to set these variables
2. **Build Process**

   - Many modern applications require a build step
   - This often includes minification, bundling, and optimization
   - Understand your framework's build commands (e.g., `npm run build`)

3. **Configuration Management**

   - Separate configuration from code
   - Use different configurations for different environments

4. **Database Considerations**
   - Ensure database connection strings use environment variables
   - Consider database migrations and seeding in production
   - Backup strategies for production data

### Common Deployment Platforms

Different platforms have different strengths:

- PaaS (Platform as a Service): Simplest to use, handles infrastructure
- IaaS (Infrastructure as a Service): More control, more complexity
- Serverless: Pay-per-use, good for variable workloads
- Static hosting: Simple, fast, limited to frontend applications

### Continuous Integration/Continuous Deployment (CI/CD)

- Automates testing and deployment processes
- Ensures code quality before deployment
- Reduces manual errors in the deployment process
- Popular tools include GitHub Actions, Jenkins, CircleCI

### Domain Configuration

- Understanding DNS records (A, CNAME, MX, etc.)
- Connecting custom domains to your deployed application
- SSL/TLS certificates for HTTPS

### Monitoring and Maintenance

- Logging in production environments
- Performance monitoring
- Error tracking
- Scaling considerations

## Common Challenges

- Environment variable configuration issues
- Build process failures
- Database connection problems
- CORS (Cross-Origin Resource Sharing) issues
- Path and routing differences between development and production

## Independent Practice

1. Choose a simple application you've built
2. Identify what environment variables it needs
3. Research two different deployment platforms
4. Create a deployment checklist for your application
5. Deploy your application to one platform
6. Document any issues you encounter and how you resolved them

## Check for Understanding

- What is the difference between development and production environments?
- Why should you use environment variables?
- What steps would you take to prepare a Node.js application for deployment?
- How would you troubleshoot if your application works locally but fails in production?
- What are the advantages and disadvantages of different deployment platforms?

## Supplemental Resources

- [Deployment Best Practices](https://www.freecodecamp.org/news/deployment-best-practices/)
- [Understanding the Deployment Process](https://www.atlassian.com/continuous-delivery/principles/deployment-best-practices)
- Platform-specific guides:
  - [Deploying to Heroku](/deploying/deploying-to-heroku.md)
  - [Deploying to Vercel](/deploying/deploying-to-vercel.md)
  - [Deploying to Netlify](/deploying/deploying-1-personal-site-to-netflify.md)
  - [Deploying to AWS](/deploying/deploying-to-aws.md)
  - [Deploying to Google Cloud](/deploying/deploying-to-google-cloud.md)
  - [Deploying to Render](/deploying/deploying-to-render.md)

## Extension Activities

- Set up a CI/CD pipeline for automatic deployment
- Configure a custom domain for your deployed application
- Implement monitoring for your production application
- Create a staging environment for pre-production testing
- Explore containerization with Docker for deployment
