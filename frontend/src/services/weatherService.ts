import axios from 'axios'

import type { WeatherResponse } from '@/models/Weather.ts'

export async function getWeather(lat: number, lon: number): Promise<WeatherResponse> {
	const api = import.meta.env.VITE_WEATHER_SOURCE_API_DEV;
	try {
		const res = await axios.get<any>(`${api}?lat=${lat}&lon=${lon}`);
		return { 
			current_weather: res.data.current,
			current_weather_units: res.data.current_units
		};
	} catch(err) {
		throw err;
	}
}

export async function getWeatherHistory(lat: number, lon: number): Promise<any> {
	const api = import.meta.env.VITE_WEATHER_SERVICE_API_DEV;
	try {
		return await axios.get<any>(`${api}?lat=${lat}&lon=${lon}`);
	} catch(err) {
		throw err;
	}
}

export function sendHeartbeat(lat: number, lon: number) {
	const api = import.meta.env.VITE_WEATHER_SOURCE_API_DEV;
	axios.post<any>(`${api}`, {
		latitude: lat,
		longitude: lon
	});
}
