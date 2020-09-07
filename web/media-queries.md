# Media Queries

### Projected Time

45-60 minutes

- 20-30 min interactive lesson
- 10-15 min for independent practice
- 20-30 min check for understanding

### Prerequisites

- [HTML Lesson](/web/html.md)
- [CSS Lesson](/web/css.md)

### Motivation

- When websites need to change their design depending on whether they’re on a phone, tablet, or giant screen, they use media queries.
- Media Queries make your website look more professional (and less 1995), and make you look css-savvy to employers.
- It is simply an extra section added to your css file; the only challenge lies in visualizing what you want before you write your rule.

**Which companies use media queries?**
Everyone. Some companies with very responsive sites are [Etsy](https://www.etsy.com/) and [Hitachi](http://www.hitachi.us/).

#### Looking at an example website

- Have you ever noticed that some websites change their design depending on whether they’re on a phone, tablet, or giant monitor?
- **Go to bbc.com** and see what happens when you change the window size.
- What changes do you notice when the window widens and narrows? - Some sections are hidden or shown (like the article descriptions). - The same article links can be presented as images or text - Images are organized in grids, or take up the whole width of the window - The image sizes adjust as a percentage of the window, as opposed to a set number of pixels - BBC’s navigation bar options change

### Objectives

**Participants will be able to:**

- understand what media query parameters mean.
- use min (minimum size and higher) and max (maximum size and lower) for query parameters.
- understand that later styles will override styles earlier in the code
- troubleshoot override issues

### Specific Things to Learn

- Practice implementing a Media Query
- Practice using min and max width
- Practice overriding styles and troubleshooting any unexpected overrides
- Media Query Syntax

### Materials

- [Media Query Lesson Slideshow](https://docs.google.com/presentation/d/1ANf64yQ_Nxtul45xofh8cpjWF23UM6c8m8kJQHQyx_Q/edit?usp=sharing)
- [5 min Video: What is a media query?](https://youtu.be/2KL-z9A56SQ)
- [15 min Video: https://www.youtube.com/watch?v=4Av7ma4v46Y](https://youtu.be/4Av7ma4v46Y)
- [MDN view on using media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

### Lesson / Guided Practice

#### Practice implementing a Media Query

1. Create a very simple project, or follow along in an existing project.
1. Create an HTML file with a linked css file, a title, 3 images, and a paragraph like this:
   ```
   <!DOCTYPE html>
   <html lang="en" dir="ltr">
     <head>
       <meta charset="utf-8">
       <link rel="stylesheet" href="index.css">
       <title></title>
     </head>
     <body>
       <h1>Under the Sea</h1>
       <p>
         Halfbeak Blind shark, Australian herring filefish elver bent-tooth Russian sturgeon koi, mud cat; Celebes rainbowfish tilapia swordtail. Tang flagtail, pompano dolphinfish jewel tetra thornyhead; mako shark. Wallago hussar, longnose whiptail catfish, "scup, yellow perch cutthroat trout Blind shark driftwood catfish Atlantic cod Blenny river loach?" Splitfin rocket danio barbeled houndshark velvetfish sand tiger golden shiner cowfish snake mackerel, "baikal oilfish porgy fusilier fish creek chub mud catfish." Coelacanth bent-tooth spearfish: soapfish mahseer Russian sturgeon fire bar danio kelp perch. Blind goby shortnose greeneye Celebes rainbowfish bigmouth buffalo: yellowtail, earthworm eel ghost knifefish amur pike. Gray mullet aholehole steelhead Australasian salmon barfish Siamese fighting fish shortnose chimaera inanga yellow bass opaleye.
         Leopard danio pencilsmelt thorny catfish razorfish boarfish barreleye, sand tiger. Walking catfish tailor--cuchia prickly shark chain pickerel Port Jackson shark sawtooth eel turkeyfish slimehead South American Lungfish torrent catfish. Ayu bull trout trumpeter; hussar, buri shad, lanternfish coolie loach, "mud cat: crappie pike eel; man-of-war fish." Shiner bamboo shark Black angelfish Rabbitfish Russian sturgeon coolie loach sablefish king-of-the-salmon. Brook lamprey Pacific herring prickly shark shiner sawtooth eel eel cod medaka. Redfish bala shark flounder, Old World knifefish Black prickleback large-eye bream. Long-whiskered catfish Manta Ray paradise fish deep sea smelt vendace skilfish sea raven brotula. Hagfish Long-finned sand diver tilefish knifefish Ganges shark New Zealand smelt."
       </p>
       <img src="humpback.jpg" alt="whale">
       <img src="yellow-fish.jpg" alt="yellow fish">
       <img src="red-fish.jpg" alt="red fish">
     </body>
   </html>
   ```
1. Create a CSS file, and style your images:
   ```
   img {
     width: 32%
   }
   ```
1. Refresh your page, and then change the window width to see how the page is affected. (spoiler: all widths follow the same rules)
   - Default styles: - h1 and p are 100% width - Everything is left-aligned
   - Specified styles: - Each image is 32% of the window width in every case.
1. Add a media query section:

   ```css
   img {
     width: 32%;
   }

   @media() {
   }
   ```

1. Give it the parameter of max-width: 1080px. That means from 0 to the max of 1080px window width, this rule will apply. Anything over 1080 will fall back to the rules before the media query.
   ```css
   @media (max-width: 1080px) {
   }
   ```
1. Let’s have the views less that 1080px wide show a full-width photo.
   ```css
   @media (max-width: 1080px) {
     img {
       width: 100%;
     }
   }
   ```
1. Refresh your webpage and change the width to see your media query in action!
1. See the dimensions of your window by pressing _command+option+i_. Keep an eye on the upper right of your window as you change its width and a little dimensions box should appear.

   #### min v max width

1. OK, we got to try “max-width”, now let’s experiment with min-width.
   Since we have everything 1080px width and less specified, we’ll add something crazy for “min-width: 1081px”, that is, everything 1081px and wider.
   `css @media (max-width: 1080px) { img { width: 100%; } } @media (min-width: 1081px) { body { background-color: red; } }`
1. Save and change your html page window width again to see your red background at 1081px and wider.

   #### Overriding

1. Add another media query after your red one, but make the background green starting at min-width: 1200px.
   ```css
   @media (min-width: 1081px) {
     body {
       background-color: red;
     }
   }
   @media (min-width: 1200px) {
     body {
       background-color: green;
     }
   }
   ```
1. Refresh you webpage and change the width to see your new styles. You should see:
   - widths 0 - 1080 have a default white background
   - widths 1081-1199 have a red background
   - 1200 and over has a green background, since this style starts to override the red rule after 1200px.
1. Next, highlight that 1200 media query, hold _command+ctrl_, and use the up arrow to move it before the 1081 rule. Refresh and try your webpage now.
   ```css
   @media (min-width: 1200px) {
     body {
       background-color: green;
     }
   }
   @media (min-width: 1081px) {
     body {
       background-color: red;
     }
   }
   ```
   - The green media query no longer applies because styles that come after will override any styles that come earlier in the css file. The red rule is applying to _everything_ wider than 1081px, including 1200px and up.
   - The browser reads css and js from top to bottom, so if it applies different styles to the same screen width, _the one that is applied last wins_.
   - When the media query styles you expect are not appearing, overriding is a common culprit.
1. Practice now by going to your site window. Press _command+option+i_ to open the inspector to check out what styles are being applied in the _Elements_ tab. The green rule is not being applied.
1. Click the 'index.css:' link by your style to see where the rule being followed is in your code. This should take you to to _Sources_ tab, and show you which line it’s on.

#### Media Query Syntax

- Last but not least, let’s look at media query syntax options. Check out the **CSS Syntax** and **Media Types** sections at [the developer.mozilla.org media query reference guide.](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax)
- You will most likely see this syntax in css files for compatibility with old browsers:
  `css @media only screen and () { }`
- Remember, you can put anything in your media queries that you can put into CSS.

### Independent Practice

- add 3 more experimental media queries, each with a different width and a different class or element being styled. Change your window width and see if they appear when expected.

### Challenge

1. Pair up with a peer and discuss what changes you would like to make to your recipe page project using media queries.
   Be specific about which widths you would like to use, which elements you'd change. Sketch your ideas to help you remember.
1. Spend about 20 minutes applying your media queries to your recipe page!

### Check for Understanding

Form small groups and discuss:

- When should you use max and min query parameters?
- If you had a style `body {color: red}` on line 5,
  and `body {color: green}` on line 6,
  what color would the text be when the window is 700px wide?
- If you had a regular style body `{color: red} on line 5`,
  and the media query `@media only screen and (min-width: 600px) {color: blue}` on line 6,
  what color would the text be when the window is 700px wide? What color would it be at 500px wide? 600px wide?
