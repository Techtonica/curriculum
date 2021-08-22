# Web Accessibility

### Projected Time

About 120 minutes

- 60 minutes for Lesson
- 45 minutes for Independent Practice
- 15 minutes for Check for Understanding

### Motivation

A11Y (Accessibility) or ADA (American's With Disabilities) compliance means making your site usable to everyone no matter their limitations.

As more and more of our lives revolve around using the internet it is important to remember that not everyone uses the web in the same way. Not only should we strive to create a positive user experience for everyone to be equitable, but creating accessibility sites has become a legal requirement in many industries.

### Objectives

**Participants will be able to:**

- Evaluate whether their website, app, or product is accessible with respect to visual, audio, motor, or cognitive impairments.
- Determine changes that can make websites more accessible.
- Implement those changes.

### Topics to cover

- What is accessibility?
- Why is it important?
- How do we design and build for accessibility?

### Lesson

1. Read through the [a11y slideshow.](https://docs.google.com/presentation/d/1b0WNXL2pcw7XwcuF2k4M0ZqzIt-iUpnAQiQZ60BzyFI/edit?usp=sharing)

2. Watch [Accessibility Fundamentals with Rob Dodson](https://www.youtube.com/watch?v=z8xUCzToff8) 28:15

3. Try navigating a website with your keyboard only. (5 min)
   -`Tab` through focusable items.
   -`Arrow keys` for radio buttons, dropdowns.
   -`Spacebar` to check/uncheck boxes.
   -`Enter` to submit.
   
   Start with www.trello.com.

    Things to pay attention to:

     - How does it feel to navigate like this?
     - Is it easy to accomplish your goals?

     Next, navigate a website you use often (e.g. GitHub, Gmail, Facebook, LinkedIn).

     - Talk to a partner about what was easy, hard, or surprising.
     - How would you make it better?
     - What did they do that worked well?

4. Spend 15 minutes setting up your screen reader and trying it out. Scan through the linked directions just long enough to get it working.
    - Mac
      - [Getting started with VoiceOver - perkinselearning.org](https://www.perkinselearning.org/technology/getting-started/mac-voiceover)
    - iOS Devices (iPad, iPhone)
      - [Turn on and practice VoiceOver on iOS](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios)
    - PC
      - NVDA: Scan through these sections.
         1. https://www.nvaccess.org/files/nvda/documentation/userGuide.html#SystemRequirements
         2. https://www.nvaccess.org/files/nvda/documentation/userGuide.html#InstallingNVDA
         3. https://www.nvaccess.org/files/nvda/documentation/userGuide.html#GettingStartedWithNVDA
      - [JAWS](https://support.freedomscientific.com/Content/Documents/Manuals/JAWS/JAWS-Quick-Start-Guide.pdf): Start on page 9
      - [Talkback](https://support.google.com/accessibility/android/answer/6283677?hl=en)
      

    The following combination of screen reader and browsers are recommended:
    - Mac
      - VoiceOver + Safari
    - iOS Devices
      - VoiceOver + Safari
    - PC
      - NVDA + Firefox
      - JAWS + Edge
    - Android Devices
      - Talkback + Chrome
    
    On the site you use often:
    - Close your eyes and try to understand the content.
    - Do images have clear descriptions?
    - Can you understand and sumbit forms?
    - Can you visualize where you are on the page?
    
5. Get a disability simulator Chrome Extension such as [Web Disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla?hl=en) (10 min)
  
    Now try out the different options.
    - Can you clearly see text with the color blindness options turned on?
    - Can you select buttons and click on links easily in the Parkenson's mode?



### Common Mistakes / Misconceptions

Myth: Accessibility is just for people with disabilities.<br>
Fact: Accessibility benefits everyone using the web.

Myth: We only need to consider color contrast when designing for vision impairments.<br>
Fact: We also need to consider text size, line height, font, and more!

Myth: The only sort of disability we need to consider are vision impairments.<br>
Fact: We also need to think of people who have physical or cognitive impairments that might make using a mouse, keyboard, or audio cue difficult.

Myth: Making a site accessible makes it ugly!<br>
Fact: Most accessibility features are not visible. Many websites and apps are starting to incorporate accesibility widgets which will allow the user to make any adjustments they need. This feature allows for a main design that might not follow contrast and sizing rules on the main site, but will still be fully accessible for those that need it.

### Independent Practice

1. Read about the [Lighthouse extension](https://github.com/GoogleChrome/lighthouse) - Lighthouse is an open-source tool by Google that gives you a way to analyzes web apps and web pages performance. It is integrated directly into the Chrome Developer Tools, under the "Audits" panel.
2. Read the [Accessibility section](https://developers.google.com/web/fundamentals/accessibility/) on the Google Developers Site through the "Accessible Styles" chapter.
3. Download the [aXe Chrome Extension.](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)
4. Follow the guide on [How to Do an Accessibility Review](https://developers.google.com/web/fundamentals/accessibility/how-to-review)

### Supplemental Resources - for later

- [Introduction to Web Accessibility](https://www.creativebloq.com/netmag/simple-introduction-web-accessibility-7116888)
- [Web experiences of people with disabilities](https://webaim.org/intro/#people)
- [Google accessibility course (text)](https://developers.google.com/web/fundamentals/accessibility/)
- [Google accessibility course (video)](https://www.udacity.com/course/web-accessibility--ud891)
- [A11Y Style Guide](https://a11y-style-guide.com/style-guide/)
- Practice implementing [aria](accessibility/aria.md) to understand how we can use that to improve accessibility of Web applications.

#### Links from slideshow
- [Screen Reader Demo for Digital Accessibility](https://www.youtube.com/watch?v=dEbl5jvLKGQ)
- [ARIA tags W3C](https://www.w3.org/TR/html-aria/)
- [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Readable fonts](https://thrive.design/best-fonts-for-reading-easiest-to-read-online-design-fonts/)
- [Tab indexing Mozilla dev docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)

#### Developer/QA Resources
- [Intro to ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)
- [WAI-ARIA Authoring Practice 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [Automated Accessibility Testing with Axe](https://github.com/dequelabs/axe-core)
- [Inclusive Components](https://inclusive-components.design/)
- [Check if your code works with assistive technologies](https://a11ysupport.io/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

#### Assistive Technologies
- Screen Reader
  - [VoiceOver](https://webaim.org/articles/voiceover/)
  - [NVDA](https://webaim.org/articles/nvda/)
  - [JAWS](https://webaim.org/articles/jaws/)
  - [Talkback](https://webaim.org/articles/talkback/)
- Voice Command
  - [Voice Control for Mac OS/iOS](https://support.apple.com/en-us/HT210539)
  - [Voice Access for Android](https://support.google.com/accessibility/android/answer/6151848?hl=en)
- [Refreshable Braille Display](https://en.wikipedia.org/wiki/Refreshable_braille_display)
  - [Refreshable Braille Display Web Simulator](https://swidjaja.github.io/Refreshable-Braille-Display-Simulator/)
- [Screen Magnification Systems](https://www.afb.org/node/16207/screen-magnification-systems)


#### Community
- [a11y Slack](https://web-a11y.slack.com/) - This is a [Slack](https://slack.com/) group where you can ask questions on any accessibility-related topics.


### Check for Understanding

- Why is accessibility important?
- What are some actions that make it difficult for a site to be accessible?
- What are the main user goals/paths in your Portfolio Page?
- Are they accessible?
- Write down three specific things you can do to make your Portfolio Page more accessible.
