import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

const heading = React.createElement('h1', {}, 'Hello World From React🚀😎');

// React Component
// Class Based Component - Old
// Functional Component - New

// React Functional Component

const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
