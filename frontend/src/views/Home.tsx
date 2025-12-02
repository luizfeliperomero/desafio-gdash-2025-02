import { useEffect, useRef, useState } from "react"
import mapboxgl from 'mapbox-gl'

import InfoCard from '@/components/InfoCard.tsx'
import InsightCard from '@/components/InsightCard.tsx'
import type { WeatherResponse } from '@/models/Weather.interface.ts'
import { getWeather } from '@/services/weatherService.ts'
import { useOutletContext } from "react-router"
import { toast } from "sonner"

function Home() {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_APIKEY;
	const [weather, setWeather] = useState<WeatherResponse | null>(null);
	const coords = useOutletContext();

	useEffect(() => {
		if(coords.mock) {
			setWeather({
			  current_weather: {
				time: "2025-03-05T12:00",
				interval: 900,
				is_day: false,
				temperature_2m: 26.4,
				weather_code: 75,
				wind_speed_10m: 5.2,
				precipitation: 0.0,
				relative_humidity_2m: 62,
			  },
			  current_weather_units: {
				interval: "seconds",
				is_day: "boolean",
				temperature_2m: "°C",
				time: "ISO8601",
				weather_code: "WMO code",
				wind_speed_10m: "m/s",
				precipitation: "mm",
				relative_humidity_2m: "%",
			  }
			});
		} else {
			getWeather(coords.latitude, coords.longitude)	
				.then((response) => {
					setWeather(response);
				}, (error) => {
					toast.error("Error: Couldn't get weather data");
				});
		}
	}, [coords.latitude, coords.longitude]);

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
			center: [coords.longitude, coords.latitude],
			zoom: 12,
		});
	}

	return (
		<div className="flex flex-col h-screen">
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
				<div id="map" ref={mapContainerRef} className="fixed h-screen w-screen z-0"></div>
			</div>
		</div>
	)
}

export default Home
