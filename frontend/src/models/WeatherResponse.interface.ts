export interface CurrentWeather {
	time: string,
	interval: number,
	is_day: boolean,
	temperature_2m: number,
	weather_code: number,
	wind_speed_10m: number,
	precipitation: number,
	relative_humidity_2m: number,

}

export interface CurrentWeatherUnits {
	interval: string,
	is_day: string,
	temperature_2m: string,
	time: string,
	weather_code: string,
	wind_speed_10m: string,
	precipitation: string,
	relative_humidity_2m: string,
}

export interface WeatherResponse {
	current_weather: CurrentWeather,	
	current_weather_units: CurrentWeatherUnits,
}

export interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentWeatherUnits;
  current: CurrentWeather;
}
