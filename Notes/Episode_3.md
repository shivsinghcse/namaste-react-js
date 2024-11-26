# Laying the Foundation

## creating script

- In package.json
  ` "scripts": {
  "test": "jest",
  "start": "parcel index.html",
  "build": "parcel build index.html"
}`
- now `npm run start` instead `npx parcel index.html` now we are using script. You can also write `npm start` but not work for build only work for start.

- when we do `React.createElement` => it becomes an JS `Object` => when we render this element onto DOM it become `HTML Elements`
- creating root `ReactDOM.createRoot(document.getElementById('root'));`
- rendering ou heading `root.render(heading);` it will replace all inside root.

- common practice `<div id="root">Not Rendered</div>`

- JSX stands dor JavaScript XML. JSX is HTML like syntax it is not HTML. JSX and react both are different.

- Browsers(JS engine) does not understand JSX.They only know javascript parcel is doing job behind the secne JSX transpile before it reaches to JS engine.Transpiling is done by babel via parcel.Babel is Javascript compiler and transpiler.

- JSX => transpile (React.createElement) => ReactElement-JS object => HTML element
- In JSX if you want to give class use className `<h1 id="heading1" className = "root">Namaste React using JSX 🚀🚀</h1>;
`
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

## React Components

- Everything is a component in React.
  - class based component - OLD
  - functional component - NEW
- React functional component are normal javascript function which return some piece of JSX.
- JSX can be return nested also <></> or <div></div>
- This is how we render the react functional component `<HeadingComponent />`

- Component composition - composing 2 component in one in another.
`const HeadingComponent = () => (
  <div>
    <h1>Namaste React🚀</h1>;
    <Title />;
  </div>
);`

- How to put element in a component : inside {} you can run any JS piece of code.You can also call the function inside it{Title()} {} it will sanitize your data. It prevents you from cross site scripting attack(XSS).
- <component /> and <component></component> are same.
-
