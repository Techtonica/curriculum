# Open Source

## Prerequisites

- ["Git and version control" lesson](../git/git-version-control.md)
- ["Using GitHub for Code Storage" lesson](../git/github-storage.md)

## Objectives

**Participants will be able to**

- Understand what an open source project is
- Find an open source project to contribute to

### Specific Things to Learn

- What is Open Source
- What is an Open Source project
- History of Open Source and common projects
- Why people love Open Source
- Types of Open Source licenses
- How to find an Open Source project to contribute to

## Motivation

This lesson introduces participants to the world of open source.
Contributing to Open Source projects offers many benefits:

- Contribute to a project you are interested in
- Improve software you use, and help others benefit as well
- Work with and meet new people
- Learn new things by reading and by practicing
- Get ideas for how others approach problems
- A new perspective from code outside of your usual codebase (like your job or personal project)

###  What makes something open source?
Open source projects are usually-software projects whose source is available under an open source license. There's some 
active discussion about which licenses are open source licenses (as opposed to too restrictive to qualify), but generally an opensource license should let others:
- read the source (code, docs, etc)
- contribute your own work to the source

Two categories of software that you might contribute to outside of work are "free software" (generally as [defined](https://www.fsf.org/about/what-is-free-software) by the [Free Software Foundation, or FSF](https://www.fsf.org/about/)) and "open source software" (generally as defined by the [open source definition](https://opensource.org/osd) maintained by the [Open Source Initiative, or OSI](https://opensource.org/about)). These are often grouped together as FOSS (free and open source software) or FLOSS (free and libre open source software). 

It's important to remember that these are open ecosystems anyone can contribute to, so maintainership or creation of a project does not necessarily mean you should trust a person or organization.

### Which for-profit companies use open source?
Many companies participate in open source software development, or release tools of their own under open source licenses. At companies with very large open source programs, this efforts will often be coordinated together by an Open Source Projects Office, or OSPO. You might want to check out a company's OSPO if you're curious about their coding norms, have enjoyed working on one of an org's open source projects and would like to find more, or are trying to learn about a new-to-you project before deciding if you want to contribute.

This table includes some examples of companies with large OSPOs, but these are just examples. Many companies both with and without OSPOs are deeply involved in open source communities. Often, multiple companies will be involved with the same project.

|Company|History with open source | Popular Projects| OSPO |
|----|----|-----|----|
| Facebook/Meta | [OSPO.co Case Study](https://ospo.co/case-studies/open-source-at-facebook-core-to-our-engineering-dna/) | React, Docusaurus, and PyTorch| [Meta Open Source](https://opensource.fb.com/) |
|Google|["About Google Open Source" from their OSPO](https://opensource.google/about/)|Kubernetes, Android, Chromium|[Google Open Source](https://opensource.google/)|
|Microsoft|[Wikipedia Article on Microsoft and open source](https://en.wikipedia.org/wiki/Microsoft_and_open_source)|.NET, Helm, Kubernetes| [Microsoft Open Source](https://opensource.microsoft.com/) |
|Amazon (AWS)|["The Open Source Strategy of Amazon Web Services" from The New Stack in Dec 2020](https://thenewstack.io/the-open-source-strategy-of-amazon-web-services/)| AWS distro for OpenTelemetry, AWS Cloud Development Kit, Smithy|[Open source at AWS](https://aws.amazon.com/opensource/)|
| Netflix|["Evolution of Open Source at Netflix" from the Netflix Technology Blog in Oct 2015](https://netflixtechblog.com/evolution-of-open-source-at-netflix-d05c1c788429)|Genie, Dyno, Chaos Monkey|[Netflix Open Source Software Center](https://netflix.github.io/)|

## Supplemental Materials Not Listed Above

- https://roshanjossey.github.io/first-contributions/#project-list
- https://publiclab.github.io/community-toolbox/#r=all
- https://up-for-grabs.net/#/tags/javascript
- [GitHub Explore](https://github.com/explore)
- [Beginner-friendly open source JavaScript projects you can contribute to](https://github.com/MunGell/awesome-for-beginners#javascript)
- [Practicing using GitHub to contribute to an Open Source project](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
- [Up for Grabs: Explore Open Source Projects and Jump In](https://up-for-grabs.net/)

### Suggested Projects:

- [Women Who Code](http://womenwhocode.github.io/#project_reviewers) (See 'Featured Repos' and 'How do we contribute to a project?' Sections)

## Lesson

[Open Source Projects slide deck](https://docs.google.com/presentation/d/13f2I1JbpLNgPcWcAv_HZKKp4-ZeWTcBUDFm-sw2diIk/edit#slide=id.p)

### Guided Practice

[Operation Code](https://github.com/OperationCode/operationcode_frontend) could be an interesting place to start with enough set up instructions to get started. The goal of this exercise is to go through the steps of setting up an Open Source project on your computer and get it ready to run locally to be able to start fixing bugs.

### Independent Practice

Go through the resources in this lesson to pick an Open Source project that would be interesting to you. Follow the set-up instructions to get the repo on your machine and see if you can get things running locally.

### Challenge

Try picking a bug and see if you can start tackling it! Don't worry too much about actually trying to fix the issue (although that is a bonus). The goal here is to get used to working in an existing codebase.

## Common Misconceptions

_"Open source is too hard" / "I won't be able to get started" _

Getting started on an Open Source project can be intimidating, but many projects or tech-related groups foster healthy communities to support new contributors. A good way to get started is to look for a `first-timers-only` or `good-first-issue` label. The website http://www.firsttimersonly.com/ aggregates lists of these issues. There are tons of projects out there! 

If you already know a project you're interested in, you can look for these labels in the `Issues` section of their repository directly. Not every project will have a first-time label all the time, but if you find an issue with that label, grab it and start working on it!

Maybe you are interested in [helping to create a website for food gardeners](https://github.com/Growstuff/growstuff)? Or maybe that now you know how to code, you want to give back in [helping others learn to code](https://github.com/freeCodeCamp/freeCodeCamp)? Or maybe you want to [help devs spot errors in their CSS]([https://github.com/stylelint/stylelint)?


_ "I don't have time" / "Open source is too time-consuming" _

Contributing to, and especially maintaining, open source projects can be very time-consuming, especially if you are learning a new project's norms. Many projects also welcome (or desperately need!) "small" contributions, though, and you can reduce the time per contribution by picking one project you really care about to focus your contributions on. By choosing one project, you don't need to spend time setting up an environment, reviewing the `contributors.md` and code of conduct files for the repo, or learning about a new test harness. This will also help you to gain a deeper understanding of the codebase.

_"I don't want to code outside of work, so I can't contribute!"_

Code is not the only way to contribute to open source projects! Many open source projects need documentation contributions, detailed descriptions corroborating issues others have reported, translation assistance (for both UI and documentation), and (once you understand the project well) people answering questions on social media and in their communities. If you find an interesting project, you have many options to contribute without writing any code. 
