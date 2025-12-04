import { Controller, Post, Body, Get, Res, Query } from '@nestjs/common';
import type { Response } from "express";
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  create(@Body() body: any) {
    return this.weatherService.create(body);
  }

  @Get("/insight")
  getInsight(@Query() query: Record<string, number>) {
	return this.weatherService.getInsight(query.lat, query.lon);
  }

  @Get()
  getAll(@Query() query: Record<string, number>) {
    return this.weatherService.findAll(query.lat, query.lon);
  }

  @Get("/csv")
  async exportCsv(@Res() res: Response) {
	  const csv = await this.weatherService.exportCsv();
	  res.header('Content-Type', 'text/csv');
	  res.attachment(`weather_${Date.now()}.csv`);
	  return res.send(csv);
  }

  @Get('/xlsx')
  async exportXlsx(@Res() res: Response) {
	  const buffer = await this.weatherService.exportXlsx();

	  res.header('Content-Type', 
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	  );
	  res.attachment(`weather_${Date.now()}.xlsx`);
	  return res.send(buffer);
  }
}

