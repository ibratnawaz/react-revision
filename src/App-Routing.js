import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import InvalidPage from './pages/404-page';
import RestaurantMenu from './pages/RestaurantMenu';

const RoutingComponent = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			children: [
				{
					path: '/about',
					element: <About />
				},
				{
					path: 'contact/',
					element: <Contact />
				},
				{
					path: '/restaurants/:resId',
					element: <RestaurantMenu />
				},
				{
					path: '',
					element: <Home />
				}
			],
			errorElement: <InvalidPage />
		}
	]);
	return <RouterProvider router={router} />;
};

export default RoutingComponent;
