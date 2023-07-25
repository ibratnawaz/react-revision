import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const RoutingComponent = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			children: [
				{
					path: '/',
					element: (
						<div>
							<Link to='about'>Home</Link>
						</div>
					)
				},
				{
					path: '/about',
					element: (
						<div>
							<Link to='about'>About Us</Link>
						</div>
					)
				},
				{
					path: 'contact/',
					element: (
						<div>
							<Link to='contact'>Contact Us</Link>
						</div>
					)
				}
			],
			errorElement: (
				<div>
					<Link to='contact'>Error Page - 404</Link>
				</div>
			)
		}
	]);
	return <RouterProvider router={router} />;
};

export default RoutingComponent;
