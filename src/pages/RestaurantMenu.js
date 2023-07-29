import React from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) return <h1>Loading...</h1>;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info;

	let { itemCards } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

	if (!itemCards) {
		itemCards =
			resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
				?.card.itemCards;
	}

	return (
		<div className='text-center mb-10'>
			<h1 className='font-bold my-6 text-2xl'>{name}</h1>
			<p className='font-bold text-lg'>
				{cuisines.join(', ')} - {costForTwoMessage}
			</p>
			<div className='px-10'>
				<h2 className='mb-2 text-lg font-semibold text-left'>MENU:</h2>
				<ul className='space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-left'>
					{itemCards?.map((item) => (
						<li key={item.card.info.id}>
							{item.card.info.name} - ₹{item.card.info.price / 100}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
