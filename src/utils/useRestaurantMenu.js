import { useEffect, useState } from 'react';
import { APP_CONSTANTS } from '../constants/app-constant';

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(APP_CONSTANTS.MENU_API + resId);
		const json = await data.json();
		setResInfo(json.data);
	};

	return resInfo;
};

export default useRestaurantMenu;
