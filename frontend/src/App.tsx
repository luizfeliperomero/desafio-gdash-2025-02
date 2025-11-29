import './App.css'
import { useEffect, useRef, useState } from "react"
import mapboxgl from 'mapbox-gl'

import InfoCard from '@/components/InfoCard.tsx'
import InsightCard from '@/components/InsightCard.tsx'
import type { WeatherResponse } from '@/models/Weather.ts'
import { getWeather } from '@/services/weatherService.ts'


function App() {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);

	let [latitude, setLatitude] = useState<number>(-26.83934485782777);
	let [longitude, setLongitude] = useState<number>(-48.630748344525635);

	mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_APIKEY;

	const [weather, setWeather] = useState<WeatherResponse | null>(null);

	useEffect(() => {
		getWeather(latitude, longitude)	
			.then((response) => {
				setWeather(response);
			}, (error) => {
				console.log(error);
			});
	}, [latitude, longitude]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			},
			(error) => {
				console.log(error)
			}
		)
	}, []);

	useEffect(() => {
		if(!weather) return;
		setupMap();
	}, [weather]);

	function setupMap() {
		const isDay = weather?.current_weather?.is_day ?? true;

		let style = isDay ? "mapbox://styles/mapbox/standard" : "mapbox://styles/mapbox/dark-v11" 
		const map = new mapboxgl.Map({
			container: 'map',
			style: style,
			center: [longitude, latitude],
			zoom: 12,
		});
	}

	return (
		<div className="relative">
		{weather && (<div className="flex flex-col gap-5 w-full p-5 absolute z-50">
				<div className="gap-5 flex flex-wrap justify-center">
					<InfoCard
						value={`${weather.current_weather.temperature_2m} ${weather.current_weather_units.temperature_2m}`}
						weathercode={weather.current_weather.weather_code}
					/>
					<InfoCard
						value={`${weather.current_weather.wind_speed_10m} ${weather.current_weather_units.wind_speed_10m}`}
						weathercode={100}
					/>
					<InfoCard 
						value={`${weather.current_weather.relative_humidity_2m}${weather.current_weather_units.relative_humidity_2m}`}
						weathercode={101}
					/>
					<InfoCard 
						value={`${weather.current_weather.precipitation} ${weather.current_weather_units.precipitation}`}
						weathercode={102}
					/>
				</div>
				<InsightCard />
			</div> )}
			<div id="map" ref={mapContainerRef} className="w-screen h-screen"></div>
		</div>
	)
}

export default App
