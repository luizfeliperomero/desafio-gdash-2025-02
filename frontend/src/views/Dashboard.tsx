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
import WeatherTable from "@/components/WeatherTable"
import { getWeatherHistory, getCSV, getXLSX } from '@/services/weatherService.ts'
import { Table as TableIcon, FileSpreadsheet, FileX, ChartNoAxesCombined } from "lucide-react"
import { WMO_CODES } from '@/lib/wmo'
import { Weather } from "@/models/Weather.interface.ts"
import { mockWeatherData } from "@/../mock-weather-data.ts"
import { getCityFromCoords } from "@/services/locationService.ts"
import { useOutletContext } from "react-router"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

function Dashboard() {
	const coords = useOutletContext();
	const [data, setData] = useState(
	  coords.mock ? mockWeatherData : null
	);

	const [viewTable, setViewTable] = useState<boolean>(false);

	function formatDate(dateStr: string): string {
	  const date = new Date(dateStr);

	  const day = date.getDate();
	  const month = date.getMonth() + 1;
	  const year = date.getFullYear();

	  const hours = date.getHours().toString().padStart(2, "0");
	  const minutes = date.getMinutes().toString().padStart(2, "0");


	  return `${day}/${month}/${year} ${hours}:${minutes}`;
	}

	async function downloadCSV() {
	  const res = await getCSV();

	  const disposition = res.headers["content-disposition"];
	  let filename = "weather.csv";

	  if (disposition) {
		const match = disposition.match(/filename="(.+)"/);
		if (match && match[1]) filename = match[1];
	  }

	  const url = window.URL.createObjectURL(
		new Blob([res.data], { type: "text/csv" })
	  );

	  const link = document.createElement("a");
	  link.href = url;
	  link.download = filename;
	  link.click();

	  window.URL.revokeObjectURL(url);
	}

	async function downloadXLSX() {
	  const res = await getXLSX();

	  const disposition = res.headers["content-disposition"];
	  let filename = "weather.xlsx";

	  if (disposition) {
		const match = disposition.match(/filename="(.+)"/);
		if (match?.[1]) {
		  filename = match[1];
		}
	  }

	  const blob = new Blob([res.data], {
		type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	  });

	  const url = window.URL.createObjectURL(blob);

	  const link = document.createElement("a");
	  link.href = url;
	  link.download = filename;
	  link.click();

	  window.URL.revokeObjectURL(url);
	}

	const temperatureChartData = data?.map((w) => ({
	  name: formatDate(w.current.time),
	  value: w.current.temperature_2m,
	}));

	const humidityData = data?.map(w => ({
	  name: formatDate(w.current.time),
	  value: w.current.relative_humidity_2m,
	}));

	const windSpeedData = data?.map(w => ({
	  name: formatDate(w.current.time),
	  value: w.current.wind_speed_10m,
	}));

	const precipitationData = data?.map(w => ({
	  name: formatDate(w.current.time),
	  value: w.current.precipitation
	}));

	const weatherCodeData = data?.map(w => ({
	  name: formatDate(w.current.time),
	  value: w.current.weather_code,
	}));

	const [city, setCity] = useState("São Paulo");

	useEffect(() => {
	  if(coords.mock) return;

	  getCityFromCoords(coords.latitude, coords.longitude)
		.then(setCity)
		.catch(() => setCity("Unknown"));
	}, []);

	useEffect(() => {
		if(coords.mock) return;

		getWeatherHistory(coords.latitude, coords.longitude)
			.then((response) => {
				setData(response.data);
			}, (error) => {
				toast.error("Error: Couldn't get weather history");
			})
	}, []);

	return (
		<div className="relative z-0 flex flex-col gap-6 p-6 pb-24 w-full min-h-screen bg-background">
		<div className="flex items-center flex-col gap-5 md:gap-0 md:flex-row md:justify-between">
			<h1 className="font-bold">Dashboard - {city}</h1>
			<div className="flex items-center gap-2 md:gap-5">
				<Button onClick={() => setViewTable(!viewTable)} variant="outline" size="sm">
				  <div className="flex items-center gap-2">
				  {viewTable ? <ChartNoAxesCombined /> : <TableIcon />}
					{viewTable ? "View Charts" : "View Table"}
				  </div>
				</Button>
				<Button onClick={downloadCSV} variant="outline" size="sm">	
					<FileSpreadsheet /> Export CSV 
				</Button>
				<Button onClick={downloadXLSX} variant="outline" size="sm">	
					<FileX /> Export XLSX 
				</Button>
			</div>
		</div>
		{
		!viewTable ? (
			<>
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
			{data?.map((w) => (
			  <div key={w.current.time} className="flex flex-col items-center">
				<img
				  src={WMO_CODES[w.current.weather_code].icon}
				  className="w-10 h-10 hover:scale-110"
				/>
				<span className="text-xs mt-2 text-muted-foreground">
				  {formatDate(w.current.time)}
				</span>
			  </div>
			))}
		  </div>
		</Card>
      </div>
	        </>
    ) : (
      <WeatherTable data={data} />
    )}
</div>
	)
}

export default Dashboard
