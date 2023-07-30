import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONSTANTS } from '../constants/app-constant';
import UserContext from '../context/userContext';
import CartContext from '../context/cartContext';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { loggedInUser } = useContext(UserContext);
	const { items } = useContext(CartContext);
	const { LOGO_URL, LOGIN, LOGOUT } = APP_CONSTANTS;

	return (
		<div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50'>
			<div className='logo-container'>
				<img className='w-56' src={LOGO_URL} />
			</div>
			<div className='flex items-center'>
				<ul className='flex p-4 m-4'>
					<li className='px-4'>
						<Link to='/'>Home</Link>
					</li>
					<li className='px-4'>
						<Link to='/about'>About Us</Link>
					</li>
					<li className='px-4'>
						<Link to='/contact'>Contact Us</Link>
					</li>
					<li className='pr-4'>
						<Link to='/cart'>
							🛒
							<sup className='px-1 text-sm border rounded border-black bg-black text-white'>
								{items}
							</sup>
						</Link>
					</li>
					<button
						className='login'
						onClick={() => {
							setIsLoggedIn((loggedIn) => !loggedIn);
						}}>
						{isLoggedIn ? LOGOUT : LOGIN}
					</button>
					{isLoggedIn && <li className='px-4'>{loggedInUser}</li>}
				</ul>
			</div>
		</div>
	);
};

export default Header;
