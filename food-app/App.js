import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

const heading = React.createElement('h1', null, 'Hello World From React🚀😎');

console.log(heading);

// JSX
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpile it to React.createElement => ReactElement - JS Object => HTMLElement(render)

const jsxHeading = (
    <h1 className="heading" tabIndex="3">
        Hello World from JSX🚀
    </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
