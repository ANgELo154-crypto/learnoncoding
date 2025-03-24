// Dictionary of definitions
const definitions = {
    tag1: "!DOCTYPE HTML is a declaration that must be placed at the very beginning of an HTML document. It informs the web browser about the version of HTML being used, ensuring the document is interpreted correctly. In modern web development, `<!DOCTYPE html>` is used to specify HTML5, the latest standard.",
    tag2: "<html> is the root element of an HTML document. All other elements of the webpage, including the <head> and <body> sections, must be enclosed within this tag. It serves as the container for the entire HTML content.",
    tag3: "<head> contains metadata about the document, such as the character encoding, title, linked stylesheets, and scripts. It does not contain content that is directly visible on the webpage but plays a crucial role in defining how the page behaves and looks.",
    tag4: "<title> defines the title of the HTML document, which appears in the browser's title bar or tab. It is also used by search engines and bookmarking tools to identify the webpage, making it important for SEO and user navigation.",
    tag5: "<body> contains all the visible content of an HTML page, including text, images, links, forms, and other elements. Everything displayed on the user's screen is placed inside this tag, making it the main structural component of the document.",
    tag6: "<h1> represents the highest level of heading on a webpage. It is typically used for the main title or heading of a section and should be used only once per page for SEO best practices. It is the most prominent heading and carries the most weight in search engine rankings.",
    tag7: "<h2> is the second-largest heading and is used for subheadings under the main title (<h1>). It provides structure and hierarchy to content, making it easier to read and navigate.",
    tag8: "<h3> is the third-largest heading in HTML. It is commonly used for subheadings within an <h2> section, helping to further break down content into smaller, more digestible sections.",
    tag9: "<h4> is a heading tag that is smaller than <h3> but still helps organize content into structured sections. It is often used for minor subsections within an article or document.",
    tag10: "<h5> defines a heading that is even smaller than <h4>. It is usually used for less important headings or sub-sections within a document where a more detailed breakdown of information is required.",
    tag11: "<h6> represents the smallest heading size available in HTML. It is typically used for the least important headings on a webpage, providing the lowest level of emphasis.",
    tag12: "<p> defines a paragraph of text. It automatically adds spacing before and after the text to improve readability. Paragraphs are essential for structuring written content on a webpage.",
    tag13: "<a> defines a hyperlink, which is used to navigate between different webpages or sections within the same page. The `href` attribute specifies the destination URL. Links are a fundamental part of the web, enabling users to move from one page to another.",
    tag14: "<img> embeds an image into an HTML page. It requires the `src` attribute, which specifies the image URL, and the `alt` attribute, which provides alternative text for accessibility and SEO purposes.",
    tag15: "<div> is a block-level container element that is used to group multiple elements together for styling or scripting purposes. It plays a crucial role in web layout and design by helping organize content into sections.",
    tag16: "<span> is an inline container used to group text or inline elements for styling purposes. Unlike <div>, it does not create a new block and is useful for applying styles to small portions of text within a paragraph.",
    tag17: "<ul> defines an unordered list, where list items are typically marked with bullet points. It is used when the order of the items does not matter.",
    tag18: "<ol> defines an ordered list, where list items are numbered or lettered sequentially. This type of list is used when the order of the items is important.",
    tag19: "<li> represents a list item inside an <ul> or <ol>. Each <li> element contains an individual item within the list.",
    tag20: "<table> defines a table structure, which is used to display tabular data. It consists of rows (<tr>) and cells (<th> or <td>) to organize information in a structured manner.",
    tag21: "<tr> defines a table row, which is used to group a set of <th> (header) or <td> (data) cells together within a <table>.",
    tag22: "<th> defines a table header cell, which is used to provide headings for columns or rows in a table. It is usually bold and centered by default.",
    tag23: "<td> defines a table data cell, which contains the actual content of a table. It is used within a <tr> to display data inside a table structure.",
    tag24: "<form> creates an interactive form that allows users to input and submit data. Forms are commonly used for collecting information such as login details, search queries, or contact messages.",
    tag25: "<input> is a versatile form element used for gathering user input. It supports various types such as text, password, checkbox, radio buttons, and more through the `type` attribute.",
    tag26: "<button> defines a clickable button, which can trigger JavaScript functions, submit forms, or perform other interactive actions when clicked.",
    tag27: "<label> provides a descriptive label for form inputs, making forms more accessible and user-friendly. It is often linked to an <input> element via the `for` attribute.",
    tag28: "<textarea> defines a multi-line text input field, allowing users to enter longer pieces of text, such as comments or messages. Unlike <input>, it can accept multiple lines of text.",
    tag29: "<select> defines a dropdown list, allowing users to choose from a predefined set of options. It is commonly used in forms for selecting items such as countries or categories.",
    tag30: "<option> defines an individual item within a <select> dropdown list. Each <option> represents a selectable choice for the user.",

    prop1: "color: This property is used to define the color of the text inside an HTML element. It accepts named colors (e.g., red, blue), hexadecimal values (e.g., #ff0000), RGB values (e.g., rgb(255, 0, 0)), and HSL values (e.g., hsl(0, 100%, 50%)).",
    prop2: "font-size: Determines the size of the text within an element. It can be defined using pixels (px), ems (em), rems (rem), percentages (%), or viewport units (vw, vh), affecting readability and responsiveness.",
    prop3: "margin: Specifies the amount of space around an element, creating separation between adjacent elements. It can be set using individual values (top, right, bottom, left) or shorthand for all sides at once.",
    prop4: "padding: Defines the space between the content of an element and its border. It allows control over spacing inside the element, improving layout and design structure. It follows the same shorthand rules as margin.",
    prop5: "display: Controls how an element is rendered and behaves in the document flow. Common values include 'block' (full width), 'inline' (fits content), 'flex' (flexible layout), and 'none' (hides element).",
    prop6: "background-color: Sets the background color of an element. It accepts color values in different formats like named colors, hexadecimal, RGB, and HSL. It helps enhance visual aesthetics and user experience.",
    prop7: "width: Specifies the width of an element. It can be defined in absolute units (px, cm, mm) or relative units (% of parent element, vw for viewport width). It affects content layout and responsiveness.",
    prop8: "height: Defines the height of an element, similar to the width property. It ensures elements have a fixed or flexible height, adapting to different screen sizes or content requirements.",
    prop9: "border: Sets the border around an element. It includes border width, style (solid, dashed, dotted), and color. This property helps in defining visual boundaries around elements.",
    prop10: "position: Determines how an element is positioned in the document. Common values include 'static' (default), 'relative' (relative to its normal position), 'absolute' (relative to nearest positioned ancestor), and 'fixed' (relative to the viewport).",
    prop11: "text-align: Controls the horizontal alignment of text inside an element. Common values include 'left', 'right', 'center', and 'justify' (spreads text evenly across the width).",
    prop12: "box-shadow: Adds a shadow effect to an element’s box. It allows control over shadow color, blur radius, spread distance, and direction, creating depth and visual appeal.",
    prop13: "overflow: Manages how content behaves when it overflows its container. Possible values include 'visible' (default), 'hidden' (clips overflow), 'scroll' (adds scrollbars), and 'auto' (scrollbars appear when needed).",
    prop14: "z-index: Defines the stacking order of elements. Higher values bring elements to the front, while lower values send them to the back. It works only on positioned elements (relative, absolute, fixed, or sticky).",
    prop15: "opacity: Adjusts the transparency of an element. It accepts values from 0 (completely transparent) to 1 (fully visible), allowing for fade effects and subtle visual enhancements.",
    prop16: "visibility: Controls whether an element is visible or hidden without affecting layout. 'visible' shows the element, 'hidden' hides it while keeping space occupied, and 'collapse' removes table rows/columns.",
    prop17: "cursor: Defines the appearance of the mouse pointer when hovering over an element. Examples include 'default', 'pointer' (hand cursor for links), 'text' (I-beam for text selection), and 'not-allowed' (disabled state).",
    prop18: "flexbox: A modern layout system that allows efficient arrangement of elements within a container. It offers powerful alignment, spacing, and resizing options using properties like 'justify-content', 'align-items', and 'flex-wrap'.",
    prop19: "grid: A powerful CSS layout system designed for creating structured grids. It allows precise control over rows and columns, using properties like 'grid-template-columns', 'grid-template-rows', and 'gap'.",
    prop20: "animation: Enables smooth animations in CSS using keyframes. It defines how elements change over time, with properties like 'animation-name', 'animation-duration', 'animation-timing-function', and 'animation-iteration-count'.",

    js1: "var: Declares a variable that is function-scoped, meaning it is only accessible within the function where it is defined. Variables declared with var can be reassigned and updated. However, due to hoisting, a var variable can be referenced before its declaration, which may lead to unexpected behavior in some cases.",
    js2: "let: Declares a block-scoped variable, meaning it is only accessible within the block, loop, or function where it is defined. Unlike var, let prevents hoisting issues and allows reassignment but not redeclaration within the same scope.",
    js3: "const: Declares a block-scoped variable that cannot be reassigned once initialized. It ensures that the reference to the value remains constant, but for objects and arrays, their properties or elements can still be modified.",
    js4: "function: Defines a reusable block of code that performs a specific task when invoked. Functions can accept parameters, return values, and improve code organization by reducing redundancy.",
    js5: "if statement: Executes a block of code only if a specified condition evaluates to true. It is commonly used for decision-making and controlling the flow of execution in a program.",
    js6: "else statement: Specifies an alternative block of code to execute when the if statement condition evaluates to false. This ensures that at least one block of code runs in response to a condition.",
    js7: "else if statement: Extends an if-else chain by allowing multiple conditions to be checked sequentially. It helps handle multiple possible outcomes in a structured way.",
    js8: "for loop: Executes a block of code repeatedly for a fixed number of times. It consists of an initialization, a condition, and an increment/decrement statement, making it useful for iterating over arrays or performing repeated actions.",
    js9: "while loop: Continuously executes a block of code as long as a specified condition remains true. It is useful when the number of iterations is not predetermined but depends on a condition being met.",
    js10: "do...while loop: Similar to a while loop but guarantees that the block of code executes at least once before checking the condition. It is useful when an action must be performed at least once regardless of the condition.",
    js11: "console.log(): Outputs messages, variables, or debugging information to the browser's console. It is a fundamental tool for testing and debugging JavaScript code.",
    js12: "Arrow Function: A more concise way to define functions using the => syntax. Arrow functions do not have their own this context, making them useful in callbacks and functional programming.",
    js13: "Array: A data structure that stores multiple values in an ordered collection. Elements can be accessed using zero-based indexing, and arrays provide built-in methods for manipulation, such as push(), pop(), and map().",
    js14: "Object: A collection of key-value pairs where each key is a unique identifier mapped to a value. Objects are fundamental in JavaScript and can store complex data structures, including nested objects and functions as properties.",
    js15: "JSON: JavaScript Object Notation, a lightweight data format used for storing and exchanging structured data. It consists of key-value pairs similar to JavaScript objects but uses double-quoted keys and values.",
    js16: "DOM: The Document Object Model, a representation of an HTML document as a tree structure, where each node corresponds to an element, attribute, or text. JavaScript can manipulate the DOM to change content, styles, and behavior dynamically.",
    js17: "Event Listener: A function that waits for specific user interactions, such as clicks, key presses, or form submissions, and triggers an action when the event occurs. It helps make web pages interactive.",
    js18: "setTimeout(): A built-in function that executes a piece of code after a specified delay (in milliseconds). It is commonly used for delaying actions or creating timed effects.",
    js19: "setInterval(): Similar to setTimeout(), but it repeatedly executes the specified code at a fixed time interval until it is cleared using clearInterval().",
    js20: "try...catch: A structure used for handling runtime errors in JavaScript. The try block contains code that may cause an error, while the catch block executes if an error occurs, preventing the script from crashing.",
    js21: "Promise: Represents an asynchronous operation that may either resolve successfully or be rejected with an error. It allows better handling of operations such as API calls and asynchronous tasks.",
    js22: "async/await: A modern approach to handling asynchronous code more efficiently. The async keyword declares a function that returns a Promise, and await pauses execution until the Promise is resolved or rejected.",
    js23: "localStorage: A web storage API that allows data to be stored in the browser with no expiration. Stored data persists even after the browser is closed and reopened.",
    js24: "sessionStorage: Similar to localStorage but only stores data for the duration of a browsing session. Once the browser is closed, the stored data is cleared automatically.",
    js25: "fetch API: A built-in JavaScript method used to make HTTP requests, such as retrieving data from a server. It returns a Promise that resolves with the server’s response, allowing interaction with APIs.",
    js26: "Map(): A built-in data structure that stores key-value pairs, similar to objects but with better performance for frequent additions and deletions. It maintains key order and allows any data type as a key.",
    js27: "Set(): A collection of unique values that automatically removes duplicates. It is useful when working with data that should not contain repeated elements.",
    js28: "parseInt(): Converts a given string into an integer. It ignores any non-numeric characters after the first number but does not round decimals.",
    js29: "parseFloat(): Converts a given string into a floating-point number. Unlike parseInt(), it retains decimal values if present in the string.",
    js30: "toFixed(): Formats a number to a fixed number of decimal places, returning it as a string. It is commonly used for displaying numbers with controlled precision, such as prices."

};

function showDefinition(key) {
    const definition = definitions[key] || "Definition not available.";
    
    const modal = document.createElement("div");
    modal.classList.add("modal");
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <p>${definition}</p>
        </div>
    `;

    document.body.appendChild(modal);
}

const style = document.createElement("style");
style.innerHTML = `
    .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    transform: scale(0.9);
    animation: fadeIn 0.3s forwards;
}

.modal-content {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    width: 95%;
    text-align: center;
    position: relative;
    opacity: 0;
    transform: translateY(-20px);
    animation: slideIn 0.3s 0.1s forwards;
}

.close-btn {
    cursor: pointer;
    font-size: 26px;
    font-weight: bold;
    position: absolute;
    right: 25px;
    top: 20px;
    color: #222;
    transition: color 0.2s ease-in-out;
}

.close-btn:hover {
    color: red;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`
document.head.appendChild(style);
