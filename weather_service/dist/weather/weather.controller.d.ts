import { WeatherService } from './weather.service';
export declare class WeatherController {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    create(body: any): Promise<import("./weather.schema").Weather>;
    getInsight(body: any): Promise<string>;
    getAll(): Promise<import("./weather.schema").Weather[]>;
}
