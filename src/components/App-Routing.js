import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import App from '../App';
import InvalidPage from './404-page';

const RoutingComponent = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/about',
					element: <About />
				},
				{
					path: 'contact/',
					element: <Contact />
				}
			],
			errorElement: <InvalidPage />
		}
	]);
	return <RouterProvider router={router} />;
};

export default RoutingComponent;
