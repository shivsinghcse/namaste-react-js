# Laying the Foundation

## creating script

- In package.json
  ` "scripts": {
  "test": "jest",
  "start": "parcel index.html",
  "build": "parcel build index.html"
}`
- now `npm run start` instead `npx parcel index.html` now we are using script. You can also write `npm start` but not work for build only work for start.

- when we do `React.createElement` => it becomes an JS `Object` => when we render this Object onto DOM it become `HTML Elements`
- creating root `ReactDOM.createRoot(document.getElementById('root'));`
- rendering our heading `root.render(heading);` it will replace(not append) all inside root.

- common practice `<div id="root">Not Rendered</div>`

- JSX stands for JavaScript XML. JSX is HTML like syntax but it is not HTML. JSX and react both are different.

- Browsers(JS engine) does not understand JSX.They only know javascript. parcel is doing job behind the secne JSX transpile(converted) before it reaches to JS engine.Transpiling is done by babel via parcel. Babel is Javascript compiler and transpiler.

- JSX => transpile (React.createElement) => ReactElement-JS object => HTML element
- In JSX if you want to give class use className `<h1 id="heading1" className = "root">Namaste React using JSX 🚀🚀</h1>;
`
- But Now it convert in jsx environment

```js
const heading = <h1>Namaste React 🚀</h1>;
||
||
||
import { jsx as _jsx } from "react/jsx-runtime";
const heading = /*#__PURE__*/_jsx("h1", {
  children: "Namaste React \uD83D\uDE80"
});
```

- In JSX we write attribute in camelCase fashion.
- If you have more than 1 line of JSX wrap with () `const heading = (<h1 className ="root">Namaste React using JSX 🚀🚀</h1>);`
`const jsxheading = [
  <h1 className="head" tabIndex="3">
    Namaste React using JSX 🚀🚀
  </h1>,
  <h2 className="head" tabIndex="3">
    Namaste React using JSX 🚀🚀
  </h2>,
  <h3 className="head" tabIndex="3">
    Namaste React using JSX 🚀🚀
  </h3>,
];`

#### Extensions

- Prettier
- Bracket Pair colorizer
- ESLint
- Better comment

## React Components

- Everything is a component in React.
  - class based component - OLD
  - functional component - NEW
- React functional component are normal javascript function which return some piece of JSX.
- JSX can be return nested element or component also just wrap it in `<></>` or `<div></div>`
- This is how we render the react functional component `<HeadingComponent />`

#### Component composition

- composing 2 component in one in another.
`const HeadingComponent = () => (
  <div>
    <h1>Namaste React🚀</h1>;
    <Title />;
  </div>
);`

- How to put element in a component : inside `{}` you can run any JS piece of code.
- You can also call the function inside it `{Title()}`

```js
const number = 1000;
const greet = () => {
  console.log("Hello React");
};
const HeadingComponent = () => {
  return (
    <>
      {/* component composition */}
      <div id="container">
        <Title />
        <h1 className="heading">
          Namaste React Functional Component, {number} {greet()}
        </h1>
      </div>
    </>
  );
};
```

- but if you write `{greet}` it will not work it will give error `Error: Functions are not valid as a React child. This may happen if you return greet instead of <greet /> from render. Or maybe you meant to call this function rather than return it.`

- This `{}` will sanitize your data. It prevents you from cross site scripting attack(XSS).

- <component /> and <component></component> are same.

### Cross-site scripting (XSS)

A cross-site scripting (XSS) attack is one in which an attacker is able to get a target site to execute malicious code as though it was part of the website. The code can then do anything that the site's own code can do. For example, the attacker could:

- Access and modify all the content of the site's loaded pages, and any content in local storage
- Make HTTP requests with the user's credentials, enabling them to impersonate the user or access sensitive data

All XSS attacks depend on a website doing two things:

1. Accepting some input that could have been crafted by an attacker
2. Including this input in a page without sanitizing it: that is, without ensuring that it won't be executable as JavaScript
