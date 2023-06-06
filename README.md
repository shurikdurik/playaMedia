# playaMedia quiz


1. Footer laid. My solution you can find at "./footer" folder.

The HTML structure consists of a wrapper container that contains the main content and the footer.

The CSS sets the height of the HTML and body elements to 100% to ensure they cover the entire viewport.

The wrapper container is set to display: flex with a flex-direction of column, making it a vertical flex container.

The .content div has flex-grow: 1, which allows it to grow and fill the available space within the wrapper container. This ensures that the content takes up the remaining vertical space in the viewport.

The footer has flex-shrink: 0, which prevents it from shrinking. It will maintain its height and stay at the bottom of the wrapper container.

When the content height is less than the viewport height, the .content div expands to fill the remaining space, and the footer stays at the bottom of the page.

When the content height exceeds the viewport height, the .content div continues to expand, and the wrapper container expands with it. This causes the content to push the footer down, and the page becomes scrollable to accommodate the excess content.

Overall, this implementation uses CSS Flexbox to create a layout where the content takes up the available space within the wrapper container, and the footer remains at the bottom of the page or moves down if the content exceeds the viewport height.

2. SASS and CSS

There are some differences between their variables :

- Scope: Sass variables are scoped to the file or block in which they are defined, while CSS custom properties have a global scope and can be accessed from anywhere in your CSS.

- Dynamic vs. Static: CSS custom properties are dynamic, meaning their values can be changed dynamically using JavaScript, whereas Sass variables are static and cannot be changed once compiled.

- Compilation: Sass variables are processed and compiled into static CSS values before the code is served to the browser, while CSS custom properties are parsed and evaluated by the browser at runtime.

To manipulate CSS custom properties with JavaScript use the setProperty method on the style property of a DOM element to change the value of a CSS custom property element.style.setProperty('--my-property', 'new value');

3. Tree shaking

Tree shaking is a technique in Webpack to remove unused code from the final bundle, reducing its size. To enable it:

- Use ES6 module syntax for importing and exporting modules.
- Configure Webpack for production mode.
- Set a modern JavaScript target in your Webpack configuration.
- Install necessary Babel plugins if using Babel.
By following these steps, Webpack will automatically analyze your code and remove any unused parts, resulting in a smaller bundle size.