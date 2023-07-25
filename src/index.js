import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import RoutingComponent from './app-routing';

// React element using JSX
const appTitle = <h1>Hello React from JSX 👋</h1>;

function ChildComponent() {
	return <h1>I'm a children component 😁</h1>;
}

// React functional component
const HeadingComponent = () => {
	console.log('>>>', useState([]));
	return (
		<div>
			{appTitle}
			Empty tag way <br />
			<ChildComponent />
			Closing tag way <br />
			<ChildComponent></ChildComponent>
			variable way 1
			<br />
			{ChildComponent()}
			variable way 2
			<br />
			{<ChildComponent />}
			variable way 3
			<br />
			{<ChildComponent></ChildComponent>}
		</div>
	);
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RoutingComponent />);
