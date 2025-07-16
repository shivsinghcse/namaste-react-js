# Episode 01 - Inception

## 🎯 Tips : To Get Most out of this course 💯

- Make your own notes 📝
- Use your Laptop 💻
- Maintain your github 📈
- complete all assignment ✅

## 🔨 Tools we use in this course

- **Browser :** Google chrome
- **Code Editor :** VS Code

## What is React⚛️?

- React is an open-source JavaScript library that is used for creating user interface for Single Page Application (SPA).
- It is mainly used for handeling view layer (UI-layer) of any web or mobile application.

## Emmet

- It is a plugin ( tool ) for editors, which generate some HTML and CSS code for us and enhance the developer exprince.

<!--
- DOM Create Element (API??)
- innerHTML vs innerText
- appendChild()
 -->

## "Hello world" using HTML

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

## "Hello world" using JavaScript

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
      heading.innerHTML = "Hello World from JS!"; // here we can also use innerText or textContent

      // finding or selecting the root
      // this root will get reference of the div which have id 'root'.
      const root = document.getElementById("root");

      // appending heading to root
      root.appendChild(heading);
    </script>
  </body>
</html>
```

## "Hello world" using React

### JS Engine

- Every Browser have javascript engine in it. which execute the javascript code.
- But browser does not understand react code.
- so we have to get React into our project.

**But how??**

- The 1st way to get React is via CDN (content Delivery Network)
  - Search **cdn react** and visit on [legacy.reactjs.org](https://www.legacy.reactjs.org) and copy the cdn links and paste into your file. This is the one way to get React inside our project.
- But it is Old way, find How to do this in a new version of React.
- [React.dev](react.dev) new documentation.

### CDN :

- CDN stands for Content Delivery Network, these are websites where react has been hosted and we are pulling (fetching) react into our project.

- A CDN (Content Delivery Network) is a system of distributed servers that deliver web content (like images, videos, HTML, JavaScript, CSS, etc.) to users based on their geographic location.

#### 📦 Simple Definition:

- A CDN is like a network of warehouses spread across different cities. Instead of delivering a product (content) from a single faraway place (origin server), it sends it from the nearest warehouse (CDN server)—making the delivery faster and more reliable.

### 🔍 Why CDNs are Used:

| Purpose                    | Benefit                                             |
| -------------------------- | --------------------------------------------------- |
| ✅ Faster content delivery | Reduces **latency** and load time                   |
| 🌍 Global coverage         | Delivers from **servers close to users**            |
| 🔒 Improved security       | Helps prevent **DDoS attacks**, SSL support         |
| 📈 Handles high traffic    | Load balanced and **scales easily**                 |
| 🗃️ Caching                 | Stores static content to avoid repeated server load |

### 🏗 How a CDN Works:

1. You visit a website: https://example.com/image.jpg
2. Your browser is redirected to a CDN server close to you, like:

```arduino
  https://cdn.example.com/in/image.jpg

```

3. The CDN server:

- Checks its cache: If the image exists, it serves it directly.
- If not, it fetches from the origin server, caches it, and serves.

### 🧠 Examples of Popular CDNs:

| CDN Provider     | Known For                             |
| ---------------- | ------------------------------------- |
| Cloudflare       | Free tier, security (DDoS protection) |
| Akamai           | Enterprise CDN, used by Hotstar       |
| AWS CloudFront   | Amazon's CDN                          |
| Google Cloud CDN | For Google Cloud apps                 |
| Fastly           | Used by GitHub, Reddit, etc.          |

### 🖼 CDN in Real Life Example:

```html
<!-- Using a CDN to load Bootstrap CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
/>
```

Instead of downloading Bootstrap from your own server, it’s being fetched from a public CDN (jsDelivr) that serves it faster.

### 🎯 In Summary:

A CDN is a smart delivery system for web content that makes your website faster, safer, and more scalable by serving files from the closest available server to the user.

### Why do we use CDN?

- We use a CDN (Content Delivery Network) to make websites faster, safer, and more scalable.
- To reduce latency ( Delay in network communication ).
- It is that annoying delay your experience when trying to access a webpage or video stream before it fully loads.

### ✅ Top Reasons to Use a CDN

| 🚀 Reason                     | 📌 Description                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| **1. Faster Load Times**      | CDNs serve content from the server **closest to the user**, reducing latency.            |
| **2. Handles High Traffic**   | CDNs distribute the traffic across multiple servers, preventing overload.                |
| **3. Caching Static Assets**  | Images, CSS, JS, and videos can be **cached and reused**, reducing repeated server hits. |
| **4. Better User Experience** | Faster websites = happier users = higher engagement.                                     |
| **5. Reduces Server Load**    | Offloads bandwidth and requests from the origin server.                                  |
| **6. Improved Uptime**        | If one CDN server fails, others can take over (redundancy).                              |
| **7. Global Reach**           | Delivers content quickly even to users on the other side of the world.                   |
| **8. Enhanced Security**      | Built-in protection against **DDoS attacks**, **SSL**, and **firewall rules**.           |

### 📦 Example in Real Life

- When you load a website like Hotstar, it uses a CDN to serve:

  - Videos (from servers near you)
  - Images (logos, thumbnails)
  - JavaScript and CSS files

- Even Google Fonts, Bootstrap, and jQuery are often loaded via CDNs for faster access.

### ⚡ Without CDN vs With CDN

| Feature       | Without CDN            | With CDN              |
| ------------- | ---------------------- | --------------------- |
| Load Speed    | Slower (one server)    | Faster (many servers) |
| Server Load   | High                   | Low (distributed)     |
| Global Access | Slower far from server | Fast anywhere         |
| Uptime        | One failure = outage   | Redundant backups     |

### 🛠 When to Use a CDN

- Use a CDN if:
  - Your app has global or national users
  - You're serving large static files (images, videos, fonts, CSS, JS)
  - You want to reduce server costs
  - You care about SEO and performance

### 🌐 What is Cross-Origin?

- Cross-origin refers to a situation where one website tries to access resources (data, scripts, APIs, etc.) from a different origin (domain, port, or protocol).

### 📌 What is an Origin?

- An origin is defined by:

```uni
Origin = Protocol + Domain + Port
```

#### ✅ Same Origin:

```text
https://example.com/index.html
https://example.com/data.json
```

❌ Cross-Origin (different domains or ports or protocols):

```text
https://example.com  → https://**another.com**
https://example.com  → http://**example.com**  (different protocol)
https://example.com  → https://example.com:**3000**  (different port)
```

### 🔐 Why is Cross-Origin Important?

- Browsers block cross-origin requests by default for security reasons to prevent:

  - CSRF (Cross-Site Request Forgery)
  - Data leaks
  - Unauthorized access

- This security feature is called the Same-Origin Policy.

### 🔄 When Does Cross-Origin Happen?

| Scenario                                               | Is It Cross-Origin?            |
| ------------------------------------------------------ | ------------------------------ |
| HTML page loads image from another domain              | ✅ Yes                         |
| JavaScript fetches data from another domain (API call) | ✅ Yes                         |
| You embed a video from YouTube                         | ✅ Yes                         |
| You link to a stylesheet or font from CDN              | ✅ Yes (allowed if CDN allows) |

### 🚧 What is CORS?

- CORS (Cross-Origin Resource Sharing) is a browser mechanism that allows or blocks cross-origin requests based on server response headers.
- If your frontend (React, HTML, etc.) sends a request to another origin (e.g., API), the server must reply with:

```http
Access-Control-Allow-Origin: *
```

- Or specify allowed origins like:

```http
Access-Control-Allow-Origin: https://yourdomain.com
```

Without this, the browser will block the response, even if the server sends data.

### 🛠️ Developer Use Case Example

In React app (localhost:3000) calling an API at api.example.com:

```javascript
fetch("https://api.example.com/data");
```

- 👎 If the API doesn’t send CORS headers → Blocked by browser
- 👍 If the API allows it:

```http
Access-Control-Allow-Origin: http://localhost:3000
```

✅ Response is accepted.

### 🔐 Summary

| Term             | Meaning                                                 |
| ---------------- | ------------------------------------------------------- |
| **Origin**       | Combination of protocol, domain, and port               |
| **Cross-Origin** | Request made to a different origin                      |
| **CORS**         | Protocol that controls access to cross-origin resources |

#### 1st import React cdn link into your project

```js
  <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
   >
  </script>
    /*
     This is plain JS code, React at the end of day the is JavaScript code,
     "react.development.js" this file contains react code developed by some facbook
     developer. This is the core file of react.
     */

    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    >
    </script>

     /*
     "react-dom.development.js" This is the react library which is useful for
     DOM operations or This is react-DOM which we need to modify DOM.
    */

  /*
    ✅ crossorigin
This is an attribute needed when you load scripts from a different origin (CDN).

It allows React to show better error messages by preserving the original stack trace.

Required when using source maps and accessing the script from a different domain.
  */
```

- To load a specific version of react and react-dom, replace 18 with the version number.

- The versions above are only meant for development, and are not suitable for production. Minified and optimized production versions of React are available at:

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
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

### What is crossorigin in the script tag?

- A cross origin request is a request for a resource (eg. stylesheet, iframes, images, font or script) from another domain.

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

- These `{ id: 'header', xyz: 'abc' },` Hello World from React!``are the props and`Hello World from React!` is children.

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

### Extra points:

- `React.createElement()` creates element (JS object) in React
- React was built to manipulate the DOM using JS
- Most costly thing is change the dom tree on some update in the project
- To optimize it React is used to do this using JS
- React element is an object and render() method is responsible for converting it into html and put it onto the DOM
- `props` are children + attributes we are passing
- render() is used to convert object into tag and display it on the DOM.

### What is difference between a library and a framework?

- Library can work in a small portion of the app too unlike a framework.
- Framework need to be used in a fully fleged app to use them. They can't be used in already existing project.
- But react can be used inside your existing project as well.
