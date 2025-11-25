type WeatherIconProps = {
  src: string;
  alt: string
};

export default function WeatherIcon({ src, alt }: WeatherIconProps) {
	return (
		<div className="w-16 h-16">
			<img
				src={src}
				alt={alt}
			/>
		</div>
	)
}
