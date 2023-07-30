import React, { useContext, useEffect, useState } from 'react';
import { APP_CONSTANTS } from '../constants/app-constant';
import { Link } from 'react-router-dom';
import RestaurantCard, {
	withPromotedLabel
} from '../components/RestaurantCard';
import UserContext from '../context/userContext';
import CartContext from '../context/cartContext';

const Home = () => {
	const [listOfRestaurants, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchText, setSearchText] = useState('');
	const { setUserName } = useContext(UserContext);
	const { setCartItems } = useContext(CartContext);

	const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(APP_CONSTANTS.RESTAURANT_URL);
		const data = await response.json();

		// Optional Chaining
		const restaurants =
			data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;

		setListOfRestaurant(restaurants);
		setFilteredRestaurant(restaurants);
	};
	console.log('>>> home');
	return (
		<div className='body'>
			<div className='filter flex'>
				<div className='search m-4 p-4'>
					<input
						type='text'
						className='border border-solid border-black'
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className='px-4 py-2 bg-green-100 m-4 rounded-lg'
						onClick={() => {
							if (!searchText) {
								setFilteredRestaurant(listOfRestaurants);
								return;
							}
							const filteredRestaurant = listOfRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilteredRestaurant(filteredRestaurant);
						}}>
						Search
					</button>
				</div>
				<div className='search m-4 p-4 flex items-center'>
					<button
						className='px-4 py-2 bg-gray-100 rounded-lg'
						onClick={() => {
							const filteredList = listOfRestaurants.filter(
								(res) => res.info.avgRating > 4
							);
							setFilteredRestaurant(filteredList);
						}}>
						Top Rated Restaurants
					</button>
				</div>
				<div className='search m-4 p-4 flex items-center'>
					<button
						className='px-4 py-2 bg-gray-100 rounded-lg'
						onClick={() => setCartItems((prev) => prev + 1)}>
						Add To Cart
					</button>
				</div>
				<div className='search m-4 p-4 flex items-center'>
					<input
						className='px-4 py-2 bg-gray-100 rounded-lg border border-black'
						placeholder='update username'
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
			</div>
			<div className='flex flex-wrap'>
				{filteredRestaurant.map((restaurant) => (
					<Link
						key={restaurant?.info.id}
						to={'/restaurants/' + restaurant?.info.id}>
						{restaurant?.info?.totalRatingsString == '10K+' ? (
							<PromotedRestaurantCard resData={restaurant?.info} />
						) : (
							<RestaurantCard resData={restaurant?.info} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
