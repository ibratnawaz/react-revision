// Using Old ways to create react element & rendering on page.
const heading = React.createElement('div', { id: 'parent' }, [
	'Section Heading',
	React.createElement('h1', { id: 'heading' }, 'Hello React')
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
