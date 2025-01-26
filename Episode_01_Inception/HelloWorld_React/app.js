// creating heading element
const heading = React.createElement(
    'h1',
    { id: 'heading', xyz: 'abc' },
    'Hello World from React😎🚀'
);

console.log(heading); // object

// creating / selecting root
const root = ReactDOM.createRoot(document.getElementById('root'));
// rendering the root
root.render(heading);
