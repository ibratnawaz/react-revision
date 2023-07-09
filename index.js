import React from 'react';
import ReactDom from 'react-dom/client';

// React element using JSX
const appTitle = <h1>Hello React from JSX 👋</h1>;

function ChildComponent () {
  return <h1>I'm a child component 😁</h1>
}


// React functional component
const HeadingComponent = () => {
	return (
    <div>
      {appTitle}
      Empty tag way <br/>
      <ChildComponent />
      Closing tag way <br/>
      <ChildComponent></ChildComponent>
      variable way <br/>
      { ChildComponent() }
    </div>
  );
};  

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
