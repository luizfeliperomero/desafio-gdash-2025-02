import { useEffect, useState } from "react"
import { Line, LineChart, Bar, BarChart, YAxis, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getWeatherHistory } from '@/services/weatherService.ts'
import { WMO_CODES } from '@/lib/wmo'
import { Weather } from "@/models/Weather.interface.ts"
import { mockWeatherData } from "@/../mock-weather-data.ts"
import { getCityFromCoords } from "@/services/locationService.ts"

function Dashboard() {
	function formatDate(dateStr: string): string {
	  const date = new Date(dateStr);

	  const day = date.getDate();                          // 1
	  const month = date.getMonth() + 1;                   // 12
	  const year = date.getFullYear();                     // 2025

	  const hours = date.getHours().toString().padStart(2, "0");
	  const minutes = date.getMinutes().toString().padStart(2, "0");

	  return `${day}/${month}/${year} ${hours}:${minutes}`;
	}

	const temperatureChartData = mockWeatherData.map((w) => ({
	  name: formatDate(w.current.time),
	  value: w.current.temperature_2m,
	}));

	const humidityData = mockWeatherData.map(w => ({
	  name: formatDate(w.current.time),
	  value: w.current.relative_humidity_2m,
	}));

	const windSpeedData = mockWeatherData.map(w => ({
	  name: formatDate(w.current.time),
	  value: w.current.wind_speed_10m,
	}));

	const precipitationData = mockWeatherData.map(w => ({
	  name: formatDate(w.current.time),
	  value: w.current.precipitation
	}));

	const weatherCodeData = mockWeatherData.map(w => ({
	  name: formatDate(w.current.time),
	  value: w.current.weather_code,
	}));

	const [city, setCity] = useState("");


	useEffect(() => {
	  getCityFromCoords(mockWeatherData[0].latitude, mockWeatherData[0].longitude)
		.then(setCity)
		.catch(() => setCity("Unknown"));
	}, []);

	useEffect(() => {
		getWeatherHistory(-26.83934485782777, -48.630748344525635)
			.then((response) => {
				console.log(response);
			}, (error) => {
				console.log(error);
			})
	}, []);

	return (
		<div className="relative z-0 flex flex-col gap-6 p-6 pb-24 w-full min-h-screen bg-gray-100">
		<h1 className="font-bold">Dashboard - {city}</h1>
      <div className="flex flex-wrap gap-6 w-full">
        <Card className="p-4 flex-1 min-w-[280px]">
          <CardHeader>
            <CardTitle>Temperature</CardTitle>
            <CardDescription>Temperature variation</CardDescription>
          </CardHeader>
          <ChartContainer
            className="h-[200px]"
            config={{
              value: { label: "Value", color: "hsl(var(--chart-1))" },
            }}
          >
            <LineChart data={temperatureChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Line dataKey="value" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ChartContainer>
        </Card>

        <Card className="p-4 flex-1 min-w-[280px]">
          <CardHeader>
            <CardTitle>Humidity</CardTitle>
            <CardDescription>Humidity variation</CardDescription>
          </CardHeader>
          <ChartContainer
            className="h-[200px]"
            config={{
              value: { label: "Value", color: "hsl(var(--chart-2))" },
            }}
          >
            <LineChart data={humidityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Line dataKey="value" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ChartContainer>
        </Card>

        <Card className="p-4 flex-1 min-w-[280px]">
          <CardHeader>
            <CardTitle>Wind Speed</CardTitle>
            <CardDescription>Wind variation</CardDescription>
          </CardHeader>
          <ChartContainer
            className="h-[200px]"
            config={{
              value: { label: "Value", color: "hsl(var(--chart-3))" },
            }}
          >
            <LineChart data={windSpeedData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Line dataKey="value" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ChartContainer>
        </Card>
      </div>

      <div className="flex flex-wrap gap-6 w-full">
        <Card className="p-4 flex-1 min-w-[350px]">
          <CardHeader>
            <CardTitle>Precipitation</CardTitle>
            <CardDescription>Rain variation</CardDescription>
          </CardHeader>
          <ChartContainer
            className="h-[260px]"
            config={{
              value: { label: "Value", color: "hsl(var(--chart-4))" },
            }}
          >
            <BarChart data={precipitationData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar fill="#3b82f6" dataKey="value" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </Card>
		<Card className="p-4 flex-1 min-w-[350px]">
		  <CardHeader>
			<CardTitle>Weather Conditions</CardTitle>
			<CardDescription>Weather changes over time</CardDescription>
		  </CardHeader>

		  <div className="overflow-y-auto flex flex-wrap items-center gap-6 px-4">
			{mockWeatherData.map((w) => (
			  <div key={w.current.time} className="flex flex-col items-center">
				<img
				  src={WMO_CODES[w.current.weather_code].icon}
				  className="w-10 h-10"
				/>
				<span className="text-xs mt-2 text-muted-foreground">
				  {formatDate(w.current.time)}
				</span>
			  </div>
			))}
		  </div>
		</Card>
      </div>
    </div>
	)
}

export default Dashboard
