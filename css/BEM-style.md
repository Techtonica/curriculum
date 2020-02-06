# BEM (Block Element Modifier) as a naming architecture for CSS styling

### Projected Time

About 30 - 45 minutes
- 5-10 minutes for Lesson
- 10 minutes for Guided Practice
- 10 minutes for Independent Practice
- 5 minutes for Challenge
- 10 minutes for Check for Understanding

### Prerequisites

- [HTML lesson](/html/html.md)
- [CSS Lesssons](/css/css.md)
- [SaSS Lessons](/sass/sass.md) (Optional)
  
### Motivation

On smaller pet projects, the way you organise your CSS or even SaSS styles does't really matter and it's mainly because you never really look back into the project ever again thinking about maybe scaling it or adding new features every time. But in big projects with over a 100 stylesheets and varied components spread across the application, that can raise a serious issue,since changing the styles for any compponent would mean searching for the absurd CSS naming (either id's, classes or combination of both ) you provided maybe a month before. 
If that's not worse, how about you also finding out that your new styles written lack behind on specificity and your styles were never applied, because some other previously applied class or even id made your previous styles highly specific compared to your new ones.

Well in such cases BEM naming architecture for  styling comes to your rescue for providing an easy approach to name elements with lowest specificity (just by using classes only) and help write a CSS that is not only scalable but also maintanable as well.

**Which companies use BEM naming Architecture?**  
Web Development and Design agency like [SparkBox](https://seesparkbox.com/) use BEM during their development process. Read more about it [here](https://seesparkbox.com/foundry/bem_by_example).

### Objectives

**Participants will be able to:**
- Understand what BEM naming architecture is and why it is used.
- Understand how it helps with writing a scalable and maintanable CSS file.
- Use BEM naming architecture on a small example project.

### Materials

The best reference/resource to get you started: 
- [BEM documentaion](http://getbem.com/introduction/) (You can understand the basics of BEM -2 min read). 
  

### Lessons

- To understand how BEM is used for styling elements, check out this great article on Mr-Frontend Blog: ['How to write better CSS with BEM'](https://mrfrontend.org/2017/10/write-better-css-with-bem/) by Raymon S (10 min read).


### Common Mistakes / Misconceptions

- **"My CSS styles never have conflicts since I utilize ID's most often to style my elements"**   
Using ID's can definitely help you avoid any kind of specificity conflicts, since they have a priority over classes and tags, but that would mean, your styles are not reusable and you don't follow the DRY( Dont'Repeat Yourself) principle. New styles need to be written for every element even if some of them share a few common feature (Eg: buttons on a page, navlinks etc).

### Guided Practice
We'll make use of the BEM method to create few buttons and a hero-box .

> Note: You must have prior knowledge of CSS and HTML to understand what BEM is and how to make use of it.

**1.Understanding what BEM is?:** 

BEM is a naming methodology/principle which stand for "Block", "Element", "Modifier" to describe and differentiate, the different components of your webpage in a way that is easy to understand,maintain and scale as and when required.
In BEM methodology the important point to note is that each and every HTML element will be accessed using a class only, we don't use ID's or tags to style them, to keep specificity uniform across the entire project i.e. (0,1,0) : (ID's, Classes, Tags).

- The **'Block'** are the standalone components in a webpage that are meaningful on its own.
 
  >Example includes: navbar,header,footer,hero-boxes, buttons etc.

-  The **'Element'** are the components that have no standalone meaning, but when tied to a block, represents a part of the block. It expresses a semantic meaning only when tied to a block.  
   
   >Example includes: nav-links,footer-links, headings and sub headings inside heroboxes etc.

-  The **'Modifier'** are like flags that differentiate blocks or elements inside block in terms of its appreance.
   
   >Example includes: buttons which are muted, navlinks which are active, disabled etc. 


**2.Understanding how BEM is written (The Syntax) ?:** 

To understand this, let us consider that we are making two different buttons: one which is in active state and one which is in ghosted state.
Then the HTML makrup with the classes will be:
```
<a href="#"class="btn btn--active">I know!</a>
<a href="#"class="btn btn--ghosted">I surely know!</a>
```

Notice the pattern in naming of the classes, ***.btn*** is the block since it has a standalone meaning, while ***.btn--active*** and ***.btn--ghosted*** are modifiers which do not have a standalone meaning but when sematically attached to it's block (the button) describe the modification (flags) performed on the button (i.e) active modifier/flag and ghosted modifier/flag.  
The modifiers are named by appeneding `--` to the element which you wish to modify.

Now these buttons will be a part of hero-box or any call to action section. We'll  write the markup that describes that, with the necessary classes.
 
```
<div class="hero-box__buttons">
    <a href="#"class="btn btn--active">I know!</a>
    <a href="#"class="btn btn--ghosted">I surely know!</a>
</div>
```

Notice a new class naming of ***.hero-box__buttons***. This describes the element called buttons inside a block called hero box with class name of ***.hero-box***. This is how elements inside a block are named, `__` is appended to a element present inside a block ,to describe that this element of buttons are part of hero-box. Note that there can be many groups of buttons inside a website, so these naming styles immediately tell us , it is part of which block.

Now there can also be other elements inside the block hero-box so, we'll write the markup with neccessary classes to describe that:
```
<div class="hero-box__text">
    <h1 class="primary-heading">I love BEM Styling</h1>
</div>
```

Like previous example the element for the hero-box would be ***.hero-box__text***, that describes the text information associated to the box.

>It is important to note that the heading `<h1></h1>` is defined as it's own block, and this is because it has it's own standalone meaning. Moreover remeber following the principle of DRY, this ***primary-heading*** can be used again in some other place as and when required.Thus it is named with a class of ***.primary-heading*** instead of ***.hero-box__heading***.

Now let's combine the two elements of hero-box block :'the button' and 'the text' into the hero-box block element. The markup woulf look like this:

```
<section class="first-section">
    <div class="hero-box">
        <div class="hero-box__text">
            <h1 class="primary-heading">I love BEM Styling</h1>
        </div>
        <div class="hero-box__buttons">
            <a href="#"class="btn btn--active">I know!</a>
            <a href="#"class="btn btn--ghosted">I surely know!</a>
        </div>
    </div>
</section>
```

You can now pretty much style all the components the way you like, just by using the names of the classes only (remember BEM was all about making specificity low and avoiding conflicts).
>If you are using SaSS , BEM becomes more powerful because now you can use the Sass nesting feature for all the classes.
```
.hero-box{
    height: 100vh;
    background:linear-gradient(to bottom right,#000,transparent),
    url("https://images.unsplash.com/photo-1580554996018-ff8b408fc162?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
     background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    
    &__text{
       margin:2rem;
    } 
    &__buttons{
        margin:0.5rem;   
    }  
}
.btn{
    text-decoration: none;
    border:1px solid saddlebrown;
    padding:1rem 2rem;
    color:white;
    border-radius:113rem;
    font-size:2rem;
    text-align: center;
    display:inline-block;
    margin:2rem;
    &--active{
         background:saddlebrown;
         &:hover{
             background-color:rgb(201, 93, 17);
         }
    }
    &--ghosted{
        background:transparent;
        &:hover{
            background-color:rgb(201, 93, 17);
        }
    }
}
.primary-heading{
    font-size:6rem;
}
```

**3.How BEM is useful on larger codebases and scaling and writing maintainnable code:** 

What if I told you to add a new button with some animation on it in the hero-box section? What other information will you need? Well nothing, since all necessary information is already present with you now and you know exactly where this component must lie and how you will name the classes on it. 
This process of naming modifiers,elements and blocks might seem tedious at first, but as your project will grow larger and larger you'll realise how easy it has become to find and change the styles on a component or add styles to new components created. It made your HTML and CSS much more readable since the names of classes now make sense. You no longer need to worry about the specificity now and find out which particular class/id/tag is conflicting your newly written style.


### Independent Practice

Since you can use BEM pretty much anywhere , how about refactoring your previously written code for a project (very old projects). This will show you how your previously named classes, now makes it difficult for you to understand and maintain CSS code, but using BEM now will no longer create that issue for you. 

### Challenge

Try to use the BEM modelling on the following HTML snippet, which creates a simple navbar.
```
<header>
    <nav>
        <div>
            <img src="" alt="Logo">
        </div>
        <div>
            <li>
                <a href="">Nav Link1</a>
            </li>
            <li>
               <a href="">Nav Link2</a>
            </li>
            <li>
                <a href="">Nav Link3</a>
            </li>
        </div>
     </nav>
 </header>
```


### Check for Understanding  

Form small groups and discuss:

- Why using a naming architecture/modelling principle like BEM is important?  
- How BEM naming model can be used (the priciple for naming blocks,elements, and modifier)?  
- How BEM avoids specificity conflicts?

### Supplemental Materials
BEM is not the only modelling architecture followed to maintain CSS files. There exists quite a few of them. You can read about them below:
- [SMACSS]("http://smacss.com/)(5 min read)
- [SUITCSS]("http://suitcss.github.io/)(5 min read)
- [ATOMIC]("http://github.com/nemophrost/atomic-css")(5 min read)
- [Sitepoint Article :'BEM and SMACSS: Advice From Developers Who’ve Been There'](https://en.wikipedia.org/wiki/List_of_object-relational_mapping_software) written by Patrick Catanzariti (10min read).

