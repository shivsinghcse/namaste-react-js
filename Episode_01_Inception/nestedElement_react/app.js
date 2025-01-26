/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>This is a heading1</h1>
 *          <h2>This is a heading2</h2>
 *      </div>
 * 
 *      <div id="child2">
 *          <h1>This is a heading1</h1>
 *          <h2>This is a heading2</h2>
 *      </div>
 * </div>
 */


// ReactElement (Object) => HTML(Browser Understands)

const parent = React.createElement(
    'div',
    { id: 'parent' },
    [
        React.createElement('div', { id: 'child1' }, [
            React.createElement('h1', {}, 'This is a heading 1'),
            React.createElement('h2', {}, 'This is a heading 2'),
        ]),
        React.createElement('div', { id: 'child2' }, [
            React.createElement('p', {}, 'This is a paragraph 1'),
            React.createElement('p', {}, 'This is a paragraph 2'),
        ])
    ]
);

console.log(parent);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
