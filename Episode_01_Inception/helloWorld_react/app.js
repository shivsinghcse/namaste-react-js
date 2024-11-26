// creating heading element & adding text to heading
const heading = React.createElement('h1', {}, 'Hello World from React! 😎😎');

// Creating root

const root = ReactDOM.createRoot(document.getElementById('root'));

// adding heading to root

root.render(heading);
