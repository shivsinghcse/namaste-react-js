import React from "react";
import {createRoot} from "react-dom/client";
const parent = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement('div', { id: 'child1', key: 1 }, [
            React.createElement('h1', { key: 4}, 'This is a heading 1'),
            React.createElement('h2', { key: 5}, 'This is a heading 2'),
        ]),
        React.createElement('div', { id: 'child2', key: 2 }, [
            React.createElement('p', {key: 6}, 'This is a paragraph 1'),
            React.createElement('p', { key: 7}, 'This is a paragraph 2'),
        ])
    ]
);

// console.log(parent);


const root = createRoot(document.getElementById('root'));

root.render(parent);
