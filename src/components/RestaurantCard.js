import React, { useContext } from 'react';
import { APP_CONSTANTS } from '../constants/app-constant';
import UserContext from '../context/userContext';

const RestaurantCard = (props) => {
	const { resData } = props;
	const { loggedInUser } = useContext(UserContext);
	console.log('>>> card called');
	const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
		resData;

	return (
		<div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
			<img
				className='rounded-lg'
				alt='res-logo'
				src={APP_CONSTANTS.CDN_URL + cloudinaryImageId}
			/>
			<h3 className='font-bold py-4 text-lg'>{name}</h3>
			<h4>{cuisines?.join(', ')}</h4>
			<h4>{avgRating} ★</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla?.deliveryTime} minutes</h4>
			<h5>{loggedInUser}</h5>
		</div>
	);
};

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className='absolute bg-black text-white m-2 p-2 rounded-lg'>
					Promoted
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
