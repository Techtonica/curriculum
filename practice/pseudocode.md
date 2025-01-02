# Incremental Breakdown of Functionality in Pseudocode

## Motivation
Pseudocode is one of the most useful tools a programmer has. The ability to break down a problem into implementable steps saves you valuable time before digging into the code itself and also ensures that you fully understand the problem you're solving before you begin solving it.

## Objectives
- Spend 20-30 minutes analyzing a new feature from a screen recording
- Break down logic for prospective functionality of a given problem
- Revisit and analyze a new feature every week

## Additional Requirements
- Revisit time management slides weekly
- Intentionally break down work implementing features and share with trio/mentor
- Check in weekly with trio/mentor for accountability and support

## Lesson
Take a look at the following [Hoopla screen recording](https://www.dropbox.com/scl/fi/oot5swpkbiz6bvk4r0bo8/Hoopla-Digital-Screen-Recording.gif?rlkey=is70lgihzq686hcqm16lvjyu8&e=1&st=ot9djufc&dl=0). Make note of how the UI behaves when the user interacts with it. How do possible results appear when the user types? In what way might the information need to be stored so it can be displayed like this? Once the user hits enter, how are results displayed? When an item is selected, how does the UI change? What features are present on the new screen? Take note of all the features that you see in use and begin to break down how you would code that feature. For example, if you were writing pseudocode to plan out what happens when the user hits "play" on an audiobook, it might look something like this:

- When user clicks play/pause symbol, check if audio is already playing.
- If audio is playing, stop playing. change symbol to play symbol. store time when audio stopped.
- If audio is not playing, check time variable to see where to start playing. Start playing audio. Change symbol to pause symbol.

Some key questions to focus on when breaking down each feature:

- What inputs does the feature take?
- What procession occurs?
- What outputs are produced?