# BEM (Block Element Modifier) as a naming architecture for CSS styling

### Prerequisites

- [HTML lesson](/web/html.md)
- [CSS lesson](/web/css.md)

### Motivation

On smaller pet projects, the way you organize your CSS or even Sass styles doesn't really matter and it's mainly because you never really think about scaling it or adding new features later.

However in bigger projects with over a 100 style sheets and varied components spread across the application, that can raise a serious issue, since changing the styles for any component would mean searching for the absurd CSS naming (either id's, classes or combination of both) you provided maybe a month before.

Also, what if your new styles written lags behind on specificity and your styles were never applied, since some other previously applied class or even id made your previous styles highly specific compared to your new ones.

Well in such cases BEM naming architecture for styling comes to your rescue for providing an easy approach to name elements with lowest specificity (just by using classes only) and help write CSS that is not only scalable but also maintainable as well.

**Which companies use BEM naming Architecture?**  
Web Development and Design agency like [SparkBox](https://seesparkbox.com/) use BEM during their development process. Read more about it [here](https://seesparkbox.com/foundry/bem_by_example).

### Objectives

**Participants will be able to:**

- Understand what BEM naming architecture is and why it is used.
- Understand how it helps with writing a scalable and maintainable CSS file.
- Use BEM naming architecture on a small example project.

### Materials

The best reference/resource to get you started:

- [BEM Documentation](http://getbem.com/introduction/) (You can understand the basics of BEM) (2 min read).

### Common Mistakes / Misconceptions

- **"My CSS styles never have conflicts since I utilize ID's most often to style my elements"**

Using IDs can definitely help you avoid any kind of specificity conflicts, since they have a priority over classes and tags, but that would mean your styles are not reusable and you don't follow the DRY (Don't Repeat Yourself) principle. New styles need to be written for every element, even if some of them share a few common features (Eg: buttons, alerts, navigation links, input groups, etc).

For example even the most popular front-end component library [Bootstrap](https://getbootstrap.com/docs/4.4/components/alerts/) uses this technique , where similar components share few common classes instead of styling them simply by using ID's to avoid conflicts.

### Guided Practice

We'll make use of the BEM method to create few buttons and a hero-box .

> Note: You must have prior knowledge of CSS and HTML to understand what BEM is and how to make use of it.

**1.What is BEM?:**

BEM is a naming methodology/principle which stand for "Block", "Element", "Modifier" to describe and differentiate, the different components of your webpage in a way that is easy to understand,maintain and scale as and when required.

In BEM methodology the important point to note is that each and every HTML element will be accessed using a class only, we don't use ID's or tags to style them.

This is to keep the specificity of all elements uniform across the entire project, which will have the value of (0,1,0) referencing to (ID's, Classes, Tags).

- The **'Block'** are the standalone components in a webpage that are meaningful on its own.

  > Example includes: navbar, header, footer, hero-boxes, buttons etc.

- The **'Element'** are the components that have no standalone meaning, but when tied to a block, represents a part of the block. It expresses a semantic meaning only when tied to a block.

  > Example includes: nav-links, footer-links, headings and sub headings inside heroboxes etc.

- The **'Modifier'** are like flags that differentiate blocks or elements inside the block in terms of its appearance.

  > Example includes: buttons which are muted, navlinks which are active or disabled etc.

**2.Understanding how BEM is written (The Syntax) ?:**

To understand this, let us consider that we are making two different buttons (we'll use HTML anchor tags and style them to look like buttons): One which is in the primary state and other, which will be in the inverted-primary state. The states of the links are defined based on the styling applied to them.

Then the HTML markup with the classes will be:

```
<a href="#" class="link link--primary">Yes, please</a>
<a href="#" class="link link--primary-inverted">No, I'm okay!</a>
```

Notice the pattern in naming of the classes, **.link** is the block since it has a standalone meaning, while **.link--primary** and **.link--primary-inverted** are modifiers which do not have a standalone meaning but when semantically attached to it's block (the button) describe the modification (flags) performed on the button (i.e) primary modifier/flag and primary-inverted modifier/flag.  
The modifiers are named by appending `--` to the element which you wish to modify.

Now these buttons will be a part of hero-box or any call to action section. We'll write the markup that describes that, with the necessary classes.

```
<div class="hero-box__links">
    <a href="#" class="link link--primary">Yes, please!</a>
    <a href="#" class="link link--primary-inverted">No, I'm okay!</a>
</div>
```

Notice a new class naming of **.hero-box\_\_links**. This describes the element called buttons inside a block called hero box with class name of **.hero-box**. This is how elements inside a block are named, `__` is appended to an element present inside a block, to describe that this element of buttons are part of hero-box. Note that there can be many groups of buttons inside a website, so these naming styles immediately tell us it is part of which block.

Now there can also be other elements inside the block hero-box so, we'll write the markup with neccessary classes to describe that:

```
<div class="hero-box__text">
    <h1 class="primary-heading">Want to learn more about BEM?</h1>
</div>
```

Like previous example the element for the hero-box would be **.hero-box\_\_text**, that describes the text information associated to the box.

> It is important to note that the heading `<h1></h1>` is defined as it's own block, and this is because it has it's own standalone meaning. Moreover remember following the principle of DRY, this **primary-heading** can be used again in some other place as and when required. Thus it is named with a class of **.primary-heading** instead of **.hero-box\_\_heading**.

Now let's combine the two elements of hero-box block : 'the button' and 'the text' into the hero-box block element. The markup would look like this:

```
<section class="first-section">
    <div class="hero-box">
        <div class="hero-box__text">
            <h1 class="primary-heading">Want to learn more about BEM?</h1>
        </div>
        <div class="hero-box__links">
            <a href="#" class="link link--primary">Yes, please!</a>
            <a href="#" class="link link--primary-inverted">No, I'm okay!</a>
        </div>
    </div>
</section>
```

You can now pretty much style all the components the way you like, just by using the names of the classes only (remember BEM was all about making specificity low and avoiding conflicts).

> If you are using Sass, BEM becomes more powerful because now you can use the Sass nesting feature for all the classes.

```
.hero-box{
    height: 100vh;
    background: linear-gradient(to bottom right, #000, transparent);
    url("https://images.unsplash.com/photo-1580554996018-ff8b408fc162?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
     background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    &__text{
       margin: 2rem;
    }
    &__links{
        margin: 0.5rem;
    }
}
.link{
    text-decoration: none;
    border: 1px solid saddlebrown;
    padding: 1rem 2rem;
    color: white;
    border-radius: 113rem;
    font-size: 2rem;
    text-align: center;
    display: inline-block;
    margin: 2rem;
    &--primary{
         background: saddlebrown;
         &:hover{
             background-color: rgb(201, 93, 17);
         }
    }
    &--primary-inverted{
        background: transparent;
        &:hover{
            background-color: rgb(201, 93, 17);
        }
    }
}
.primary-heading{
    font-size: 6rem;
}
```

**3. BEM is useful on larger codebases because it is scalable and maintainable.:**

What if I told you to add a new button with some animation on it in the hero-box section? What other information will you need? Well nothing, since all necessary information is already present with you now and you know exactly where this component must lie and how you will name the classes on it.

For example: `<a href="#" class="link link--animated">Animated Button</a>`.

This is again considering that the anchor tags are styled to look like buttons, like the other anchor tags inside the **herobox\_\_links** block.

This process of naming modifiers, elements and blocks might seem tedious at first, but as your project will grow larger and larger you'll realize how easy it has become to find and change the styles on a component or add styles to new components created. It made your HTML and CSS much more readable since the names of classes now make sense.

Now that you have learned about BEM methodology, you no longer need to worry about the specificity conflicts on your style sheets.

### Independent Practice

Try to use the BEM modelling on the following HTML snippet, which creates a simple navbar.

```
<header>
    <nav>
        <div>
            <img src="" alt="Logo">
        </div>
        <div>
          <ul>
            <li>
                <a href="">Nav Link1</a>
            </li>
            <li>
               <a href="">Nav Link2</a>
            </li>
            <li>
                <a href="">Nav Link3</a>
            </li>
          </ul>
        </div>
     </nav>
 </header>
```

### Challenge

Since you can use BEM pretty much anywhere, how about refactoring your previously written code for a very old project.  
This will show you how your previously named classes, now makes it difficult for you to understand and maintain CSS code. But using BEM now will no longer create that issue for you. (15-20 mins)

### Check for Understanding

Form small groups and discuss:

- Why is using a naming architecture/principle like BEM important?
- How can the BEM naming principle be used: blocks,elements, and modifier?
- How does BEM avoid specificity conflicts?

### Supplemental Materials

- [SaSS Lessons](../electives/sass.md) (Optional)

BEM is not the only modelling architecture followed to maintain CSS files. There exists quite a few of them. You can read about them below:

- [SMACSS](http://smacss.com/) (5 min read)
- [SUITCSS](http://suitcss.github.io/) (5 min read)
- [ATOMIC CSS](http://github.com/nemophrost/atomic-css) (5 min read)
- [Sitepoint Article :'BEM and SMACSS: Advice From Developers Who’ve Been There'](https://www.sitepoint.com/bem-smacss-advice-from-developers/) written by Patrick Catanzariti (10 min read).
