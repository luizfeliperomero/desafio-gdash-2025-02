import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CurrentUnits {
  @Prop()
  time: string;

  @Prop()
  interval: string;

  @Prop()
  temperature_2m: string;

  @Prop()
  relative_humidity_2m: string;

  @Prop()
  precipitation: string;

  @Prop()
  weather_code: string;

  @Prop()
  wind_speed_10m: string;

  @Prop()
  is_day: string;
}

export const CurrentUnitsSchema = SchemaFactory.createForClass(CurrentUnits);

@Schema()
export class Current {
  @Prop()
  time: string;

  @Prop()
  interval: number;

  @Prop()
  temperature_2m: number;

  @Prop()
  relative_humidity_2m: number;

  @Prop()
  precipitation: number;

  @Prop()
  weather_code: number;

  @Prop()
  wind_speed_10m: number;

  @Prop()
  is_day: number;
}

export const CurrentSchema = SchemaFactory.createForClass(Current);

@Schema({ collection: 'weather' })
export class Weather extends Document {
  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  generationtime_ms: number;

  @Prop()
  utc_offset_seconds: number;

  @Prop()
  timezone: string;

  @Prop()
  timezone_abbreviation: string;

  @Prop()
  elevation: number;

  @Prop({ type: CurrentUnitsSchema })
  current_units: CurrentUnits;

  @Prop({ type: CurrentSchema })
  current: Current;
}

export const WeatherSchema = SchemaFactory.createForClass(Weather);

