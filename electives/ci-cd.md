# CI/CD (Continuous Integration/Continuous Deployment)

### Projected Time

- Lesson: 30 min
- Guided Practice: 30-45 min
- Independent Practice: 45-60 min
- Check for Understanding: 15 min

### Prerequisites

Here are topics that should be understood before this topic:

- [Software Development Life Cycle (SDLC)](../software-development-life-cycle/sdlc.md)
- [Git & GitHub Version Control](../git/git-version-control.md) (branching, commits, pull requests)
- Fundamentals of software testing (the purpose of unit tests, integration tests, etc.)
- Basic comfort with the command line

### Motivation

In the past, releasing software was often a manual, stressful, and error-prone event that happened infrequently. A team might spend weeks or months writing code, then merge it all at once and hope for the best. This led to long nights fixing bugs, delayed releases, and unhappy users.

CI/CD is the modern solution to this problem. It's an automated approach that allows teams to build, test, and release software quickly, frequently, and reliably. By learning CI/CD, you are learning the standard, expected workflow for professional software development teams. It's a critical skill that enables you to contribute to a healthy, efficient, and collaborative engineering culture.

Understanding CI/CD helps you:
- Ship features to users faster and get feedback sooner.
- Improve code quality and reduce bugs by catching them early.
- Reduce the risk associated with deployments.
- Collaborate more effectively with your team.
- Understand how your code gets from your laptop to a live user, a key part of the full stack architecture.

If a fellow engineer asked you what CI/CD is, you could say: "It's an automated assembly line for our code. As soon as we check in a change, it automatically builds the software and runs tests to make sure nothing broke (CI). If it passes, it can be automatically deployed to users (CD)."

### Objectives

**Participants will be able to:**

- Define Continuous Integration (CI), Continuous Delivery, and Continuous Deployment (CD).
- Explain the business and technical benefits of implementing a CI/CD pipeline.
- Identify the common stages of a CI/CD pipeline (e.g., build, test, deploy).
- Recognize how CI/CD improves a developer's daily workflow and team collaboration.
- Read a basic CI/CD configuration file (e.g., for GitHub Actions).

### Specific Things To Learn

- **Continuous Integration (CI):** The practice of frequently merging all developer working copies to a shared mainline. Each merge triggers an automated build and test sequence.
- **Continuous Delivery:** An extension of CI where code changes are automatically built, tested, and prepared for a release to production. The final deployment to production is triggered manually.
- **Continuous Deployment:** The next step after Continuous Delivery. Every change that passes all stages of the pipeline is automatically released to production.
- **The Pipeline:** The set of automated steps that your code goes through from a commit to deployment.
- **Pipeline as Code:** Defining your pipeline using a configuration file (like a YAML file) that is stored in your repository alongside your code.
- **Common Tools:** GitHub Actions, GitLab CI/CD, Jenkins, CircleCI.

### Materials

- [Video: CI/CD Explained in 100 Seconds (2 min)](https://www.youtube.com/watch?v=xSv_m3KhUO8) - A very fast, high-level overview of the concept.
- [Article: What is CI/CD? by Atlassian (10 min read)](https://www.atlassian.com/continuous-delivery/what-is-ci-cd) - A clear, foundational article explaining the key concepts and benefits.
- [Diagram: Example CI/CD Pipeline](https://raw.githubusercontent.com/CircleCI-Public/cimg-shared/main/img/circleci-cicd-pipeline.png) - A visual representation of the stages in a pipeline.

### Lesson

CI/CD is the backbone of modern DevOps. It's not just a tool, but a practice and a cultural shift. Let's break down how it works with a real-world scenario.

Imagine you're working on a new feature on a `new-feature` branch. When you are ready for your code to be reviewed, you push your branch and open a Pull Request (PR) to merge into the `main` branch.

This is where **Continuous Integration (CI)** kicks in. The moment you open the PR, an automated process, called a **pipeline**, begins.

1.  **Trigger:** The CI server (like GitHub Actions) detects the new PR.
2.  **Build:** It checks out your code and attempts to build the application. If the code can't even compile or be put together, the pipeline fails immediately. This prevents broken code from ever being merged.
3.  **Test:** If the build is successful, the pipeline automatically runs all the tests the team has written (unit tests, integration tests, etc.). This ensures your new feature didn't break any existing functionality.
4.  **Report:** The results are reported directly on your Pull Request. You and your team get a clear green checkmark (success) or red 'X' (failure).

If the pipeline fails, you know immediately that you have a problem to fix *before* your code is merged and affects anyone else. This fast feedback loop is the core benefit of CI.

Once the PR is approved and the CI pipeline passes, the code is merged into the `main` branch. This triggers the **Continuous Deployment (CD)** part of the pipeline.

1.  **Trigger:** The CD server detects a new merge to `main`.
2.  **Build & Test (Again):** The pipeline runs the build and test steps again on the merged code to ensure everything is still working correctly.
3.  **Deploy to Staging:** If tests pass, the application is automatically deployed to a 'staging' or 'testing' environment. This is a clone of the production environment where final automated tests (like end-to-end tests) can be run.
4.  **Deploy to Production:** If all previous steps succeed, the code is automatically deployed to the production server, making it live for all users. This is **Continuous Deployment**. (If this last step required a manual button-click, it would be **Continuous Delivery**).

This entire process automates what used to be a manual, risky procedure. It ensures that every change is rigorously tested and that the `main` branch is always in a deployable state.

### Common Mistakes & Misconceptions

- **"CI/CD is only for large companies."** - False. The benefits of automation, quality control, and fast feedback are valuable for projects of any size, including solo projects. Tools like GitHub Actions make it free and easy to get started.
- **"Continuous Deployment means no human approval."** - Not necessarily. It means the *process* of deployment is automated. The approval happens at the Pull Request review stage. The pipeline is the enforcement of quality standards that the team has agreed upon.
- **"CI/CD eliminates the need for manual testing."** - False. It automates *repeatable* tests. It does not replace the need for human-centric testing like exploratory testing or User Acceptance Testing (UAT). It frees up humans to focus on the testing that humans do best.
- **"A slow pipeline is better than no pipeline."** - A pipeline that takes too long to run will be ignored by developers, defeating its purpose. The goal is *fast* feedback.

### Guided Practice

In this practice, we will set up a basic CI pipeline for a simple Node.js project using GitHub Actions. The pipeline will automatically install dependencies and run tests whenever code is pushed to the repository.

1.  **Fork and Clone:** Fork [this example repository](https://github.com/Techtonica/simple-node-ci-example) and clone it to your local machine. This repository contains a simple Express app with one test.
2.  **Explore the Code:** Look at `app.js` (the server) and `test/test.js` (the test file). Run `npm install` and then `npm test` locally to see the tests pass.
3.  **Create the Workflow Directory:** In your project's root, create a new directory structure: `.github/workflows`.
4.  **Create the YAML file:** Inside the `.github/workflows` directory, create a new file named `ci.yml`.
5.  **Define the Workflow:** Add the following code to `ci.yml`:

    ```yaml
    name: Node.js CI

    # Controls when the workflow will run
    on:
      # Triggers the workflow on push or pull request events but only for the "main" branch
      push:
        branches: [ "main" ]
      pull_request:
        branches: [ "main" ]

    # A workflow run is made up of one or more jobs that can run sequentially or in parallel
    jobs:
      # This workflow contains a single job called "build"
      build:
        # The type of runner that the job will run on
        runs-on: ubuntu-latest

        # Steps represent a sequence of tasks that will be executed as part of the job
        steps:
          # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
          - uses: actions/checkout@v3

          # Sets up a Node.js environment
          - name: Use Node.js 18.x
            uses: actions/setup-node@v3
            with:
              node-version: 18.x
              cache: 'npm'

          # Installs project dependencies
          - name: Install dependencies
            run: npm install

          # Runs the tests
          - name: Run tests
            run: npm test
    ```

6.  **Commit and Push:** Commit the new `.github/workflows/ci.yml` file and push it to your forked repository on GitHub.
7.  **See it in Action:** Go to the "Actions" tab in your GitHub repository. You will see your workflow running. Click on it to see the output of each step. It should be green!
8.  **Test the PR flow:** Create a new branch, make a small change (e.g., add a comment), push the branch, and open a Pull Request. You will see the same check run automatically on the PR.

### Independent Practice

Take the repository from the Guided Practice and enhance the CI pipeline.

1.  **Add a Linting Step:** Install a linter like ESLint (`npm install eslint --save-dev`). Add a new script to your `package.json` called `"lint"` that runs ESLint. Add a new step to your `ci.yml` file that runs `npm run lint` after installing dependencies but before running tests. If the linter finds issues, the pipeline should fail.
2.  **Test on Multiple Node Versions:** Modify your workflow to test against two different versions of Node.js (e.g., 16.x and 18.x). Use a `matrix` strategy in your job configuration to achieve this. (Hint: Look up "GitHub Actions matrix strategy").

### Check for Understanding

1.  In your own words, explain the main benefit of Continuous Integration to a non-technical stakeholder (like a project manager).
2.  A developer on your team says, "My code works on my machine, so I'll just merge it." How does a CI pipeline help prevent problems in this scenario?
3.  What is the key difference between Continuous Delivery and Continuous Deployment?
4.  Sketch a diagram of a simple CI/CD pipeline for a web application, labeling the main stages from code commit to production deployment.

### Supplemental Materials

- [Martin Fowler: Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html) - The original, in-depth article defining the practice by one of its pioneers.
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/) - Excellent documentation that explains CI/CD concepts well, even if you're not using GitLab.
- [Deployment Strategies](https://cloud.google.com/blog/products/devops-sre/deployment-strategies-blue-green-canary-and-more) - An article explaining different ways to release software to production, such as Blue/Green and Canary deployments, which are often managed by a CD pipeline.
