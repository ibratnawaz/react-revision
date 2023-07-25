import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='nav-header'>
			<Link to='/'>Home Page</Link>
			<Link to='about'>About Us</Link>
			<Link to='contact'>Contact Us</Link>
		</div>
	);
};

export default Header;
