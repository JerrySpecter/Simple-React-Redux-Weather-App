import axios from 'axios';

const API_KEY = '120e7bc0ff78eabb1a4cab5cb6b43b06';
const ROOT_URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}, us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
