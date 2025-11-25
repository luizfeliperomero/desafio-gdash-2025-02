from fastapi import FastAPI
from datetime import datetime, timedelta
from dataclasses import dataclass
from threading import Thread
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from confluent_kafka import Producer
import requests
import schedule
import time
import httpx
import json

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://frontend:80",
    "http://localhost:80",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

producer = Producer({
    "bootstrap.servers": "kafka:29092",
})

@dataclass
class Timestamps:
    last_fetched: datetime
    last_heartbeat: datetime

Location = tuple[float, float]

## TODO: Make it atomic (luizf)
locations: dict[Location, Timestamps] = {}

def LocationBody(BaseModel):
    lat: float
    lon: float

@app.post("/api/v1/heartbeat")
def update_heartbeat(body: LocationBody):
    lat = body.lat
    lon = body.lon
    loc = (lat, lon)


    if loc in locations:
        locations[loc].last_heartbeat = now
    else:
        create_location(loc)
    
    
@app.get("/api/v1/weather")
def add_location(lat, lon):
    create_location((lat, lon));
    return get_weather(lat, lon)

def create_location(loc: [float, float]):
    now = datetime.now()

    locations[loc] = Timestamps(
        last_fetched=now,
        last_heartbeat=now
    )

def scheduler_loop():
    while True:
        schedule.run_pending()
        time.sleep(1)

@app.on_event("startup")
def start_scheduler():
    schedule.every(1).minutes.do(manage_locations)
    t = Thread(target=scheduler_loop, daemon=True)
    t.start()

def manage_locations():
    now = datetime.now()
    one_hour = timedelta(hours=1)
    ten_minutes = timedelta(minutes=10)

    all_locations = list(locations.keys())

    for loc in all_locations:
        job = locations[loc]
        lat, lon = loc

        if now - job.last_heartbeat >= ten_minutes:
            del locations[loc]
            continue

        if now - job.last_fetched >= one_hour:
            job.last_fetched = now
            get_weather(lat, lon)

def get_weather(lat, lon):
    api_url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day"

    with httpx.Client(http2=True, timeout=10) as client:
        response = client.get(api_url)
        payload = json.dumps(response.json()).encode("utf-8")
        producer.produce(
            "weather",
            value=payload
        )
        producer.flush()
        return response.json()

