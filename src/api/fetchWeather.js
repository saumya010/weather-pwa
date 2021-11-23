import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd04dd6106c578d5e6256183a1b8279cf';

export const fetchWeather = async (query) => {
	const {data} = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: API_KEY
		}
	})
	return data
}
