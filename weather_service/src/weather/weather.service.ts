import { Injectable, Controller, Get, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weather } from './weather.schema';
import OpenAI from "openai";
import Redis from 'ioredis';
import { Parser } from "json2csv";
import * as ExcelJS from 'exceljs';

const client = new OpenAI();

@Injectable()
export class WeatherService {
  private redis: Redis;

  constructor(
    @InjectModel(Weather.name) private weatherModel: Model<Weather>,
  ) {
	  this.redis = new Redis({
      host: "redis",
      port: parseInt(process.env.REDIS_PORT ?? '6379'),
    });
  }

  async saveToCache(latitude: number, longitude: number, insight: string, timestamp: string) {
	const key = `${latitude},${longitude}`;
    const value = {
		timestamp: timestamp, 
		text: insight,
	}

    if (value) {
      await this.redis.set(key, JSON.stringify(value));
    }
  }

  async create(data: Partial<Weather>): Promise<Weather> {
    const weather = new this.weatherModel(data);
	await this.redis.set("timestamp", weather.current.time);
	const res = await weather.save();
	return res;
  }

  async exportCsv(): Promise<string> {
	  const data = await this.weatherModel.find().lean();
	  if (!data || data.length === 0) {
		return "";
	  }
	  const parser = new Parser();
	  return parser.parse(data);
  }

  async exportXlsx(): Promise<Buffer> {
	  const data = await this.weatherModel.find().lean();

	  if (!data || data.length === 0) {
		throw new Error("No data available to export.");
	  }

	  const workbook = new ExcelJS.Workbook();
	  const sheet = workbook.addWorksheet('Weather');

	  sheet.columns = Object.keys(data[0]).map((key) => ({
		header: key,
		key,
		width: 20,
	  }));

	  data.forEach((item) => sheet.addRow(item));

	  const uint8array = await workbook.xlsx.writeBuffer();
	  return Buffer.from(uint8array);
}

  async getInsight(latitude: number, longitude: number): Promise<string> {
	const key = `${latitude},${longitude}`;
	const cachedData = await this.redis.get(key)
	const timestamp = await this.redis.get("timestamp")
	if(cachedData) {
		const cachedWeather = JSON.parse(cachedData);
		if(cachedWeather.timestamp === timestamp) {
			return cachedWeather.text;
		}
	}

	const weatherData = await this.findAll(latitude, longitude);

	if(!weatherData) {
		return "No weather data is available right now to generate an insight.";
	}

	const prompt = `
	You are an AI that generates short and practical insights based on real-time weather data.

	Below is the full weather object obtained from the API (in JSON format):
	${JSON.stringify(weatherData)}

	Task:
	- Carefully analyze the fields: temperature_2m, relative_humidity_2m, precipitation, weather_code, wind_speed_10m, is_day, time, etc.
	- Generate ONE clear, practical, easy-to-understand insight about the current weather.
	- The insight must:
	  • be short (1–3 sentences)
	  • be helpful for a person right now
	  • avoid technical jargon
	  • avoid forecasting the future (describe only what the data shows now)

	Respond with ONLY the insight text — no explanations, no formatting, no JSON.
	`;

	const response = await client.responses.create({
	  model: "gpt-4o-mini",
	  input: prompt,
	});

	const text = response.output_text;
	const last = weatherData.at(-1);

	if(last?.current?.time) {
		this.saveToCache(latitude, longitude, text, last.current.time);
	}

	return text;
  }

  async findAll(latitude: number, longitude: number): Promise<Weather[]> {
    return this.weatherModel.find().exec();
  }
}
