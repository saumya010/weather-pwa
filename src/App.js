import React, { useState, useEffect } from 'react';
import { fetchWeather } from './api/fetchWeather'
import Weather from './Components/Weather'

import './App.css'

const App = () => {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState({})
	const [weatherClass, setWeatherClass] = useState('')

	// useEffect(() => {
	// 	async function fetchCity(city) {
	// 		const data = await fetchWeather(city)
	// 	}
	// 	fetchCity(city)
	// }, [city])

	const search = async (e) => {
		if( e.key === 'Enter' ) {
			const data = await fetchWeather(city)
			setWeather(data)
			findWeatherClass(data)
			setCity('')
		}
	}

	const findWeatherClass = (data) => {
		let temp = data.main.temp
		let type = data.weather[0].main
		if( temp > 18 && (type !== 'Rain' || type !== 'Snow') )
		setWeatherClass('sunny')
		else if( type === 'Rain') setWeatherClass('rainy')
		else if( type === 'Snow') setWeatherClass('snow')
		else setWeatherClass('clear')
	}

	return(
		<div className={'main-container '+weatherClass}>
			<input
				type = "text"
				className = "search-input"
				placeholder = "Search"
				value = {city}
				onChange = { (e) => setCity(e.target.value) }
				onKeyPress = { search }
			/>
			{ weather.main && (
				<Weather className = "city" weather = {weather} />
			) }
		</div>
	)
}

export default App;
