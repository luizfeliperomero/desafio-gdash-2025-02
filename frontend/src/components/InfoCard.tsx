import { WMO_CODES } from '@/lib/wmo'
import Color from "colorjs.io";

import WeatherIcon from '@/components/WeatherIcon.tsx'

type WeatherProps = {
  value: string | number;
  weathercode: number;
};

function InfoCard({value, weathercode}: WeatherProps) {
	const data = WMO_CODES[weathercode];
	const bg = new Color(data.color);
	bg.alpha = 0.25;
	const background = bg.toString();

	return (
		<div 
		className="flex items-center flex-col p-5 gap-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-1 w-40"
		style={{ backgroundColor: background, color: data.isDarkText ? "#000" : "#fff"}}
		>
			<h1 className="text-sm font-semibold text-center">{value}</h1>
			<WeatherIcon 
				src={data.icon}
				alt={data.description}
			/>
			<span className="text-sm font-semibold text-center">{data.description}</span>
		</div>
	)
}

export default InfoCard;
