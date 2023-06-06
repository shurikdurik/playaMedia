# playaMedia quiz


1. Footer laid. My solution you can find at "./footer" folder.

The HTML structure consists of a wrapper container (<div class="wrapper">) that contains the main content (<div class="content">) and the footer (<footer>).

The CSS sets the height of the HTML and body elements to 100% to ensure they cover the entire viewport.

The wrapper container is set to display: flex with a flex-direction of column, making it a vertical flex container.

The .content div has flex-grow: 1, which allows it to grow and fill the available space within the wrapper container. This ensures that the content takes up the remaining vertical space in the viewport.

The footer has flex-shrink: 0, which prevents it from shrinking. It will maintain its height and stay at the bottom of the wrapper container.

When the content height is less than the viewport height, the .content div expands to fill the remaining space, and the footer stays at the bottom of the page.

When the content height exceeds the viewport height, the .content div continues to expand, and the wrapper container expands with it. This causes the content to push the footer down, and the page becomes scrollable to accommodate the excess content.

Overall, this implementation uses CSS Flexbox to create a layout where the content takes up the available space within the wrapper container, and the footer remains at the bottom of the page or moves down if the content exceeds the viewport height.
