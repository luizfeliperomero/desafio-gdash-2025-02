import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

function WeatherTable({ data }) {
  return (
    <Table className="mt-4">
      <TableCaption>Weather data for all hours</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Time</TableHead>
          <TableHead>Temperature</TableHead>
          <TableHead>Humidity</TableHead>
          <TableHead>Precipitation</TableHead>
          <TableHead>Wind Speed</TableHead>
          <TableHead>Weather Code</TableHead>
          <TableHead>Latitude</TableHead>
          <TableHead>Longitude</TableHead>
          <TableHead>Timezone</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.current.time}</TableCell>

            <TableCell>
              {item.current.temperature_2m} {item.current_units.temperature_2m}
            </TableCell>

            <TableCell>
              {item.current.relative_humidity_2m}
              {item.current_units.relative_humidity_2m}
            </TableCell>

            <TableCell>
              {item.current.precipitation}
              {item.current_units.precipitation}
            </TableCell>

            <TableCell>
              {item.current.wind_speed_10m}
              {item.current_units.wind_speed_10m}
            </TableCell>

            <TableCell>{item.current.weather_code}</TableCell>

            <TableCell>{item.latitude}</TableCell>
            <TableCell>{item.longitude}</TableCell>

            <TableCell>
              {item.timezone} ({item.timezone_abbreviation})
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default WeatherTable
