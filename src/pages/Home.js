import React from 'react';

const appTitle = <h1>Hello React from JSX 👋</h1>;

function ChildComponent() {
	return <h1>I'm a children component 😁</h1>;
}

const Home = () => {
	return (
		<div>
			<h1>Home Page</h1>
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

export default Home;
