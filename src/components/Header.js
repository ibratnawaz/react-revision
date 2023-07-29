import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_CONSTANTS } from '../constants/app-constant';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
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
					<button
						className='login'
						onClick={() => {
							setIsLoggedIn((loggedIn) => !loggedIn);
						}}>
						{isLoggedIn ? LOGIN : LOGOUT}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
