## Prerequisite Topics

Before getting into CI/CD, we need to have a basic understanding of how software development works. Nothing too advanced but a few foundational concepts make it much easier to understand how CI/CD fits.

First, you should have a basic idea of programming and how applications are built. Like, you don’t need to be an expert developer, but at least understand that developers write code to create applications such as websites or mobile apps. This gives you context for what exactly is being tested and deployed in CI/CD.

Next, understanding Git and GitHub is very important. CI/CD pipelines usually start when code is pushed to a repository. So you should know simple things like what a repository is, what committing and pushing code means, and how developers collaborate using version control.
For example, when a developer pushes code to GitHub, that action can automatically trigger a CI/CD pipeline.

You should also have a basic understanding of testing. You don’t need to know all types of testing in detail, but you should understand why testing is important. Code can have bugs, and testing helps catch those issues before the code reaches users. In CI/CD, testing is a critical step, and if tests fail, the pipeline usually stops.

Another helpful concept is a high-level understanding of the Software Development Life Cycle (SDLC). This includes knowing that software goes through stages like planning, development, testing, and deployment. CI/CD mainly fits into the testing and deployment stages, helping automate those parts of the process.

Also, having a basic familiarity with the command line (terminal) is useful. Many CI/CD tools run scripts and commands in the background, so knowing simple commands can help you understand what’s happening behind the scenes.

Overall, these prerequisites are important because they help you understand how code moves from development to deployment in an automated way. CI/CD is not a separate concept it builds on these basics and connects them into a smooth and automated workflow.


## Motivation

When developers start working on real projects, especially in teams, things don’t stay simple for long. Multiple people are writing code at the same time, making changes, fixing bugs, and adding features. If there is no proper system in place, this quickly leads to problems.

For example, imagine a situation where 4–5 developers are working on the same project. Everyone writes their code and then at the end of the day tries to combine everything. Without any automated process, this can lead to:
-Code conflicts
-Unexpected bugs
-Broken features
-A lot of manual checking

Now think about testing. If every time someone writes code, the team has to manually test everything, it becomes slow and tiring. Sometimes small bugs get missed and reach production, which directly affects users.

Deployment is another issue. Without CI/CD, releasing new updates often involves manual steps like copying files, running commands, checking environments. This increases the chances of mistakes and delays.

This is where CI/CD becomes important.

CI/CD helps automate all these repetitive and error prone tasks. Whenever a developer pushes code:

It gets automatically built tested and can even be deployed

This ensures that problems are caught early, instead of piling up and becoming bigger issues later.

In real companies, developers may push code multiple times a day. CI/CD makes it possible to handle this continuous flow of changes smoothly. It allows teams to release updates faster, with more confidence and fewer errors.

In simple terms, CI/CD is not just about speed. It is about:
-Reliability (code works as expected)
-Consistency (same process every time)
-Confidence (developers trust their changes)

You can think of CI/CD like a quality check system in a factory where every product is checked before it reaches the customer. If something is wrong, it is stopped immediately.

Without CI/CD:
-Slow development
-Manual effort
-Higher risk

With CI/CD:
-Faster workflow
-Automation
-Better quality software

That is why CI/CD is considered a fundamental practice in modern software development, and understanding it is very useful for anyone entering the field.


## Objectives

By the end of this lesson, learners will be able to:
- Understand the benefits of CI/CD in modern software development  
- Identify the main components and stages of a CI/CD pipeline (build, test, deploy)  
- Explain how CI/CD improves developer workflows and collaboration  
- Understand the role of automation in reducing errors and speeding up development  
- Recognize commonly used CI/CD tools such as GitHub Actions and Jenkins  
- Relate CI/CD practices to real-world development scenarios

- 
## Specific Things to Learn

In this topic, learners should focus on understanding a few key ideas that together make up how CI/CD works in real-world development.

- **Difference between CI and CD**  
  First, it’s important to clearly understand the difference. CI is mainly about integrating code and testing it frequently, while CD is about delivering that tested code to users. Many beginners mix these up, so this should be clear.

- **CI/CD pipeline stages (Build, Test, Deploy)**  
  Learners should understand how code moves step by step — first it is built, then tested, and finally deployed. Each stage checks whether the code is safe to move forward.

- **Automation in development workflows**  
  A big part of CI/CD is automation. Instead of doing everything manually, the system handles tasks like testing and deployment, which saves time and avoids mistakes.

- **Testing inside the pipeline**  
  Testing is not optional here. It is a core part of the pipeline. If tests fail, the process stops, so that it doesn’t go live.

- **Basic idea of CI/CD tools**  
  Tools like GitHub Actions or Jenkins are used to run these pipelines. You don’t need to learn them deeply, but at least understand what they do and why they are used.

- **How developers actually use CI/CD**  
  In real workflow, a developer writes code, pushes it, and the pipeline automatically handles the rest. This helps teams work faster and more smoothly.

- **Deployment approaches**  
  Learners should know that deployment can be manual or automatic, and that code is often tested in environments like staging before going to production.

- **Monitoring and feedback after deployment**  
  Even after deployment, the system is monitored. If something goes wrong, developers get feedback and can fix it quickly.

At the end of the day, all these things together help you understand CI/CD not just as a concept, but as a complete working process used in real projects.


## Materials

To properly understand CI/CD, it’s important to refer to some reliable resources that explain both the concepts and practical implementation. Instead of just listing links, learners should use these materials with a purpose — some are better for understanding concepts, while others are useful for hands-on practice.

- GitHub Actions Documentation (https://docs.github.com/en/actions)  
  Helps understand how workflows are created and triggered in CI/CD pipelines.

- Atlassian CI/CD Guide (https://www.atlassian.com/continuous-delivery)  
  Provides a clear conceptual explanation of CI/CD and its importance.

- Jenkins Documentation (https://www.jenkins.io/doc/)  
  Useful for understanding how CI/CD pipelines are implemented in real-world systems.

- Introduction to CI/CD (https://www.redhat.com/en/topics/devops/what-is-ci-cd)  
  A simple explanation of CI/CD concepts and why they are important.

- CI/CD Pipeline Overview (https://circleci.com/ci-cd/)  
  Helps understand how pipelines are structured and how each stage works.

- CI/CD Explained (Video) (https://www.youtube.com/watch?v=1er2cjUq1UI)  
  A beginner-friendly video explaining CI/CD concepts step by step.

- GitHub Actions Tutorial (Video) (https://www.youtube.com/watch?v=R8_veQiYBjI)  
  Demonstrates how to build and run workflows using GitHub Actions.

- CI/CD Pipeline Diagram (https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd)  
  Visual representation of how code flows through build, test, and deployment stages.

While using these materials, learners should focus on:
- understanding how pipelines are structured  
- seeing how automation is defined  
- connecting concepts to real workflows  

Overall, these resources provide both conceptual clarity and practical exposure, helping learners move from theory to actual understanding.


## Lesson

CI/CD stands for Continuous Integration and Continuous Deployment, and it is a set of practices used to automate the process of integrating code, testing it, and delivering it to users.

In simple terms, CI/CD helps developers avoid last-minute problems by checking code early and automating repetitive tasks. Instead of manually testing and deploying code every time, the system takes care of these steps automatically.

### Continuous Integration (CI)

Continuous Integration means that developers frequently push their code changes to a shared repository, like GitHub. Instead of waiting for a long time and merging everything together at once, changes are integrated in small, manageable parts.

Whenever code is pushed:
- the project is built  
- automated tests are executed  
- errors are reported immediately  

This helps in catching issues early. For example, if one developer writes code that breaks something, the system will detect it right after the push, instead of discovering it later during deployment.

CI also encourages developers to make smaller and frequent changes, which reduces risk and makes debugging easier.

### Continuous Deployment (CD)

Continuous Deployment takes things one step further. Once the code passes all the tests, it can be automatically deployed to a server or production environment.

There are two common approaches:
- Continuous Delivery – code is ready for deployment, but a manual approval is required  
- Continuous Deployment – code is automatically deployed without manual steps  

Many companies prefer Continuous Delivery because it gives more control over releases.

### CI/CD Pipeline (How it works in practice)

A CI/CD pipeline is a sequence of automated steps that code goes through. You can think of it as a flow:

Developer → GitHub → Build → Test → Deploy → Users

Here’s how it works in a real scenario:
- A developer writes code and pushes it to GitHub  
- The CI/CD tool detects the change  
- The code is built (dependencies are installed, code is prepared)  
- Automated tests are run  
- If tests pass → the code moves to deployment  
- The application is updated for users  

If any step fails (especially testing), the pipeline stops. This prevents broken code from reaching users.

### Real-World Example

Imagine a team working on an e-commerce website:
- A developer fixes a bug in the checkout page  
- They push the code to GitHub  
- The CI/CD pipeline runs automatically  
- Tests check whether checkout is still working  
- If everything is fine → the update is deployed  

Now users get the fix immediately, without waiting for manual testing or deployment.

### Why CI/CD is powerful

CI/CD is not just about speed. It improves:
- reliability → code is tested before release  
- consistency → same process is followed every time  
- confidence → developers trust their changes  

You can think of CI/CD like a quality check system in a factory. Every product is checked before reaching the customer. If something is wrong, it is stopped immediately.

### Where CI/CD fits in SDLC

CI/CD mainly fits into the testing and deployment phases of the Software Development Life Cycle. It automates these stages and makes the entire development process smoother.

### Small but important point

CI/CD requires proper setup and good test cases. If tests are weak or missing, then automation won’t be very effective. So CI/CD works best when combined with good development practices.

At first, CI/CD might feel a bit confusing, but once you see it working in a real project, it becomes much easier to understand.


## Common Mistakes & Misconceptions

When beginners first learn CI/CD, it’s very common to misunderstand how it actually works or what it is meant for. Clearing these misconceptions early helps in building a correct understanding.

One common misconception is that CI/CD is only useful for large companies or big projects. In reality, even small projects can benefit from CI/CD. Even if you are working alone, having  testing and deployment makes your workflow smoother and more reliable.

Another misunderstanding is that CI/CD removes the need for testing. This is not true. CI/CD actually depends on testing. The pipeline runs automated tests, but those tests must be written by developers. Without proper tests, CI/CD cannot ensure the quality of the code.

Some people also think that Continuous Deployment means there is no control over releases. In practice, many teams use Continuous Delivery where the code is prepared for deployment but requires manual approval before going live. This thing allows teams to maintain control while still benefiting from automation.

Another common belief is that CI/CD is only the responsibility of DevOps engineers. While DevOps engineers may set up pipelines, developers interact with CI/CD regularly. Every time a developer pushes code, they are part of the CI/CD process.

There is also a misconception that once CI/CD is set up, everything becomes perfect automatically, but in reality, CI/CD systems require proper configuration, good test coverage, and regular maintenance. If these are missing, the pipeline may not be effective.

Some beginners also assume that faster deployment always means better results. However, speed without proper testing can lead to issues. CI/CD is not just about speed it is about safe and reliable delivery.

In simple terms, CI/CD does not replace developers responsibility it supports it. Developers still need to write good code, tests, and understand the system.


## Guided Practice

To understand CI/CD better, you can try a simple hands-on example using GitHub Actions.

Start by creating a new repository on GitHub and add a simple file, such as a text file named `hello.txt`.

Next, create a folder in your repository named:
.github/workflows
Inside this folder, create a workflow file (for example, `main.yml`) and add the following basic CI configuration:
```yaml
name: Simple CI Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Check file exists
        run: test -f hello.txt

      - name: Run test step
        run: echo "All tests passed"

      - name: Final message
        run: echo "Pipeline completed successfully"
```
To explore it:
- Go to the **Actions tab** in your repository  
- Click on the latest workflow run  
- Open the **build job** to see each step and its logs  

When the file `hello.txt` exists, the pipeline runs successfully:
![Successful CI/CD run](assets/images/ci-cd/success-run.png)

To understand failure handling:
- Rename the file `hello.txt` to something else (for example, `hello1.txt`)  
- Commit and push the changes  

Now go back to the **Actions tab** and open the latest run again.  

When the file name is changed, the pipeline fails at the file check step:
![Failed CI/CD run](assets/images/ci-cd/failure-run.png)


## Independent Practice

After trying the guided example, you should now experiment with CI/CD on your own. The goal here is to move beyond following steps and start understanding how things actually work.

Start by creating your own workflow from scratch without copying the previous one exactly. Try to remember the structure and write a basic pipeline that runs on push.

Next, modify your workflow:
- Add a new step (for example, print another message or simulate a build step)  
- Change the trigger (for example, run it on pull requests as well)  

Try testing different scenarios:
- Intentionally break the workflow (for example, check for a file that does not exist)  
- Observe how the pipeline fails  
- Then fix it and see it pass again  

You can also extend your pipeline further:
- Add multiple steps such as build, test, and final message  
- Try organizing steps clearly and giving meaningful names  

If you want to go a bit further, try deploying a simple static website using GitHub Pages. This gives you an idea of how Continuous Deployment works in real projects.

While doing these exercises, always check:
- workflow logs  
- error messages  
- execution steps  

Understanding why something fails is just as important as making it work.

Overall, independent practice is about experimenting and learning by doing. The more you try different things, the more comfortable you will become with CI/CD workflows.


## Check for Understanding

To check whether the concepts of CI/CD are clearly understood, learners should be able to answer questions that go beyond simple definitions and reflect real understanding.

### Basic Understanding

- What is Continuous Integration (CI), and why is it important in a team environment?  
- What is Continuous Deployment (CD), and how is it different from Continuous Delivery?  
- What are the main stages in a CI/CD pipeline (build, test, deploy)?  

These questions help confirm that the learner understands the basic structure and terminology.

### Conceptual Thinking

- Why is automation important in modern software development?  
- What problems might arise if CI is not used in a team project?  
- What happens when a test fails in a CI/CD pipeline, and why is this important?  
- How does CI/CD improve software quality compared to manual processes?  

These questions focus on understanding the purpose and impact of CI/CD.

### Scenario-Based Questions

- If a developer pushes code that breaks an existing feature, how would CI/CD help handle this situation?  
- In what situations would a team prefer Continuous Delivery over Continuous Deployment?  
- How does CI/CD help teams release updates more frequently without increasing risk?  

These questions connect concepts to real-world development practices.

### Reflection

Learners should also be able to explain CI/CD in their own words.  
For example, they should be able to describe how code moves from development to deployment through an automated pipeline.

If a learner can answer these questions confidently, it indicates a strong and practical understanding of CI/CD concepts.


## Supplemental Materials

After understanding the basics of CI/CD, learners who want to go deeper can explore additional resources and topics that show how CI/CD is used in real-world systems. These are optional and meant for building a stronger, more practical understanding over time.

One useful area to explore is advanced CI/CD workflows using tools like GitHub Actions. In real projects, pipelines often include multiple jobs, environment variables, caching, and conditional execution. Learning these helps in understanding how production-level pipelines are structured and managed.

Another important topic is Jenkins pipelines. Jenkins is widely used in industry, especially in larger systems, and exploring it gives insight into how CI/CD is implemented at scale beyond simple examples.

Learners can also explore Docker and container-based deployment. Containers ensure consistency across environments and are commonly used in CI/CD pipelines for building, testing, and deploying applications.

Also, understanding related DevOps practices such as monitoring, logging, and basic infrastructure concepts helps connect CI/CD to the full software delivery lifecycle.

It is also helpful to read documentation, blog posts, or case studies about how companies implement CI/CD. These provide practical insights into real challenges, trade-offs, and best practices.

Learners may further explore topics like pipeline security, performance optimization, and scaling workflows as applications grow.

Overall, these supplemental materials help learners move beyond the basics and develop a more complete understanding of CI/CD in modern software development.
