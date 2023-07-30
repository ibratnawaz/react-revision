import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';

const App = () => {
	const [username, setUserName] = useState('Jane Doe');
	const [cartItems, setCartItems] = useState(20);
	return (
		<UserContext.Provider value={{ loggedInUser: username, setUserName }}>
			<CartContext.Provider value={{ items: cartItems, setCartItems }}>
				<div className='container'>
					<Header />
					<br />
					<Outlet />
				</div>
			</CartContext.Provider>
		</UserContext.Provider>
	);
};

export default App;
