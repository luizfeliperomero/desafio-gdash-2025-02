"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherSchema = exports.Weather = exports.CurrentSchema = exports.Current = exports.CurrentUnitsSchema = exports.CurrentUnits = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CurrentUnits = class CurrentUnits {
    time;
    interval;
    temperature_2m;
    relative_humidity_2m;
    precipitation;
    weather_code;
    wind_speed_10m;
    is_day;
};
exports.CurrentUnits = CurrentUnits;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrentUnits.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrentUnits.prototype, "interval", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrentUnits.prototype, "temperature_2m", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrentUnits.prototype, "relative_humidity_2m", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrentUnits.prototype, "precipitation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrentUnits.prototype, "weather_code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrentUnits.prototype, "wind_speed_10m", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CurrentUnits.prototype, "is_day", void 0);
exports.CurrentUnits = CurrentUnits = __decorate([
    (0, mongoose_1.Schema)()
], CurrentUnits);
exports.CurrentUnitsSchema = mongoose_1.SchemaFactory.createForClass(CurrentUnits);
let Current = class Current {
    time;
    interval;
    temperature_2m;
    relative_humidity_2m;
    precipitation;
    weather_code;
    wind_speed_10m;
    is_day;
};
exports.Current = Current;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Current.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Current.prototype, "interval", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Current.prototype, "temperature_2m", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Current.prototype, "relative_humidity_2m", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Current.prototype, "precipitation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Current.prototype, "weather_code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Current.prototype, "wind_speed_10m", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Current.prototype, "is_day", void 0);
exports.Current = Current = __decorate([
    (0, mongoose_1.Schema)()
], Current);
exports.CurrentSchema = mongoose_1.SchemaFactory.createForClass(Current);
let Weather = class Weather extends mongoose_2.Document {
    latitude;
    longitude;
    generationtime_ms;
    utc_offset_seconds;
    timezone;
    timezone_abbreviation;
    elevation;
    current_units;
    current;
};
exports.Weather = Weather;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Weather.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Weather.prototype, "longitude", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Weather.prototype, "generationtime_ms", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Weather.prototype, "utc_offset_seconds", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Weather.prototype, "timezone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Weather.prototype, "timezone_abbreviation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Weather.prototype, "elevation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.CurrentUnitsSchema }),
    __metadata("design:type", CurrentUnits)
], Weather.prototype, "current_units", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.CurrentSchema }),
    __metadata("design:type", Current)
], Weather.prototype, "current", void 0);
exports.Weather = Weather = __decorate([
    (0, mongoose_1.Schema)({ collection: 'weather' })
], Weather);
exports.WeatherSchema = mongoose_1.SchemaFactory.createForClass(Weather);
//# sourceMappingURL=weather.schema.js.map