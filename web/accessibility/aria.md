# Accessible Rich Internet Applications (ARIA)

## Definition
ARIA is a set of attributes that developers can add to native HTML components to improve the accessibility of Web applications. When native HTML accessibility support is not enough, ARIA can be used to enhance accessibility of Web applications.

## Example
Let us take a look at an example on how aria can be used to enhance the accessibility of Web components. The following example shows an accordion component where you can show/hide contents by clicking on a button.

```html
<div class="accordion">
  <button class="accordion__toggle">View items</button>
  <div class="accordion__contents" hidden>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  </div>
</div>
```

```javascript
const accordionToggleBtn = document.querySelector('.accordion__toggle');
const accordionContents = document.querySelector('.accordion__contents');
accordionToggleBtn.addEventListener('click', () => {
  accordionContents.hidden = !accordionContents.hidden;
});
```

Using screen reader, you will notice that the screen reader does not announce that the accordion content is now visible and is navigatable. While sighted users can see this, non-sighted users (who use screen readers) will have no idea about this and will get a confusing user experience.

The above example illustrates one of many examples of limitation with the current native HTML elements. This is where `aria` can help mitigating this limitation. For the example above, we can add an aria attribute `aria-expanded` to the button to indicate the expanded/collapsed state of the contents.

```html
<div class="accordion">
  <button aria-expanded="false" class="accordion__toggle">
    View items
  </button>
  <div class="accordion__contents" hidden>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  </div>
</div>
```

```javascript
const accordionToggleBtn = document.querySelector('.accordion__toggle');
const accordionContents = document.querySelector('.accordion__contents');
accordionToggleBtn.addEventListener('click', () => {
  accordionContents.hidden = !accordionContents.hidden;

  const expandedState = accordionToggleBtn.getAttribute('aria-expanded');
  const newExpandedState = expandedState === 'true' ? 'false' : 'true';
  accordionToggleBtn.setAttribute('aria-expanded', newExpandedState);
});
```

With the changes above, screen reader will now announce the collapsed/expanded state of the contents. Screen reader users will now have more friendly user experience.

## Things to remember
The following things should be taken into consideration when using aria

1. Favor native HTML over aria  

    If there is a semantic HTML tag that you can use, Use that instead of aria. Always remember that screen reader has better support for native HTML than aria.

    ```html
    <!-- Don't do this! we can use native HTML button -->
    <div class="register" role="button">Register course</div>

    <!-- Do this instead -->
    <button class="register">Register course</button>
    ```

2. Do not abuse aria. No aria is always better than bad aria.

    It is possible to use bad aria that can totally change the semantic meaning of HTML elements. 

    ```html
    <!--
      Screen reader will read this as image instead of button because we
      use "img" for the aria role attribute value.
    -->
    <button class="register" role="img">Register course</button>

3. Always test your Web application with screen reader to ensure that screen reader has full support of the aria that you use.

    Different screen reader has different level of support for aria. Consider the following example where we use `aria-label` to add more descriptive text for a `span`

    ```html
    <span aria-label="Original Price $10.00, discounted price $9.00">
      <span>$10.00</span>
      &nbsp;
      <s>$9.00</span>
    </span>
    ```

    The VoiceOver screen reader will announce "Original Price $10.00, discounted price $9.00". NVDA screen reader will announce "$10.00 $9.00" because it does not support `aria-label` on `span` or `div` tags. We can solve the problem above by using [screen-reader only text technique](https://webaim.org/techniques/css/invisiblecontent/).

    ```html
    <!-- Note that aria-hidden works on span or div -->
    <span class="sr-only">
      Original Price $10.00, discounted price $9.00
    </span>
    <!-- prevent duplicate reading by screen reader -->
    <span aria-hidden="true">
      <span>$10.00</span>
      &nbsp;
      <s>$9.00</span>
    </span>
    ```

## More Resources
- [Intro to ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)
- [WAI-ARIA Authoring Practice 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/)
