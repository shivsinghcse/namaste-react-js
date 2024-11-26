# Episode 01 --- Inception

## Tips

- Make your own notes
- Use you Laptop
- Maintain your github
- complete all assignment

## Tools

- Google chrome
- VS Code

## Emmet

- It is a tool, which generate some code for us.

<!--
- DOM Create Element (API??)
- innerHTML vs innerText
- appendChild()
 -->

## JS Engine

- Browser have javascript engine in it. which execute the javascript code.
- But browser does does not understand react code.
- so we have to get React into our project.

**But how??**

- The 1st way to get React is via CDN (content Delivery Network)
  - Search **cdn react** and visit on legacy.reactjs.org and copy the cdn links and paste into your file. This is the one way to get React inside our project.
- But it is Old way, find How to do this in a new version of React.
- [React.dev](react.dev) new documentation.

## Hello world using HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root">
      <h1>Hello World!</h1>
    </div>
  </body>
</html>
```

## Hello world using JavaScript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root"></div>

    <script>
      // creating heading element
      const heading = document.createElement("h1");

      // injecting text into element
      heading.innerHTML = "Hello World from JS!";

      // finding or selecting the root
      // this root will get reference of the div which have id 'root'.
      const root = document.getElementById("root");

      // appending heading to root
      root.appendChild(heading);
    </script>
  </body>
</html>
```

## Hello world using React

- 1st import React cdn link into your project

```js
  <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <!--  this is plain JS code, React at the end of day the is JavaScript code,
    react.development.js this file contains react code developed by some facbook
    developer. This is the core file of react. -->

    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <!-- react-dom.development.js This is the react library which is useful for DOM operations or This is react-DOM which we need to modify DOM.-->
```

- There are two files `react.development.js` and `react-dom.development.js`
- `react.development.js` file is plane JS code.
- This file contain core React code developed by some facebook developers.
- This is the core file of React.
- React at the end of day is JavaScript.
- This file provide us lots of function and methods

- `react-dom.development.js` This is a react library Which is useful for DOM operations or This is react-DOM which we need to modify DOM.

**Why there are two files?**

- 1st file is the `react.development.js` This is the core file or core of React.
- 2nd file is the `react-dom.development.js` This is a react library Which is useful for DOM operations or This is react-DOM which we need to modify DOM. That's why here we injected two file.

**Can we club both files?**

- NO, because React dose not just work on browsers. React also work on mobiles(React native), somthing also known as React 3D etc.
- So React works on different places for that we need different type of functions and methods to work on different places.
- So this file `react-dom.development.js` is like a bridge between React and browsers.

## creating an element using React

- `const heading = React.createElement('h1', {}, 'Hello world from react!!');`
- `const variableName = React.createElement()`
- This API takes 3 arguments 1st is tagName, 2nd is an object, 3rd is actual content.
- `React.createElement()` is the core React thing thats why it comes from React.
- when we create root to render the element. It comes from ReactDOM `ReactDOM.createRoot()`. this root is the place where all react code will run.

```js
// creating a react-element
const heading = React.createElement("h1", {}, "Hello world from React!!");
console.log(heading); //return object

// creating root and selecting div which have id 'root'
// here we are creating root inside React, this root is the place where all react code will run.
const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering the element
root.render(heading);
```

- Manipulating DOM is very costly operation when we click on button and shows something it basically modified DOM tree (inserting and Deleting Nodes from tree). In React we only use `<div id="root></div>` and apart from this everything do using Javascript. React was built on philosophy that is we can manipulate our DOM using JS.

- `createElement('h1', {}, 'Hello world from React!!');` This object is a place where you can give attribute to your tag.

```js
const heading = React.createElement(
  "h1",
  { id: "header", xyz: "abc" },
  "Hello World from React!"
);
```

- These `{ id: 'header', xyz: 'abc' },`Hello World from React!``are the props and`Hello World from React!` is children.

- `console.log(heading);` //returns object
- here **heading** is basically react-element and react-element is nothing but normal javascript object.
- `root.render(heading);` this function take react-element as parameter and responsible for creating h1 tag(element/tag) which browser understand and put inside the root.

## Creating Nested element:

- ReactElement(object) is end of the day is Object.==> and this object becomes HTML which browser understands

- `createElement` is creating an object while it is rendering onto the DOM it converts itself into HTML and puts at up DOM.

- If you are creating element and want to create more than one sibling or want to pass more than one children so in `React.createElement()` take 3rd argument as an array of children [].
- `React.createElement("tagName", {}, [])` but when you do this React will throw an error `Warning: Each child in a list should have a unique "key" prop.`
- Don't worry we will solve further.

```js
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag from child 2"),
    React.createElement("h2", {}, "I'm h2 tag from child 2"),
  ]),
]);
```

- But it is very complex or messy that's why JSX comes into picture.

- If you change the order of files it will throw an error.
- The order of files-

  1. `react.development.js`
  2. `react-dom.development.js`
  3. your `app.js`

- If you write something in `<div id="root"> Shiv Singh</div>` it will be replace by heading/parent (whatever I passing inside our render method) when root.render() will execute. But if you write something outside of this div id root it will be stays same. This means react is working only inside my div id root.Because we are selecting that div id root. This is why React is a library. React can be applied to small portion of our App(like header, footer, sidebar). Not all framework can be applied in some portion of App.
- React gives us a lot of helper function that we need to use to develop fast applications.


# =============== Assignments ================

## What is Emmet?
  - Emmet (formerly Zen Coding) is a set of plug-ins for text editors that allows for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist. The project was started by Vadim Makeev in 2008.

## Difference between library and framework?  
 - The technical difference between a framework and library lies in a term called Inversion of control.

- When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
