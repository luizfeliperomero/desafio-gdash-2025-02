package main

import (
	"encoding/json"
    "context"
    "fmt"
    "log"
	"net/http"
    "github.com/twmb/franz-go/pkg/kgo"
	"bytes"
)

type WeatherMessage struct {
    Latitude  float64 `json:"latitude"`
    Longitude float64 `json:"longitude"`
    Current   struct {
        Time              string  `json:"time"`
        Temperature2m     float64 `json:"temperature_2m"`
        RelativeHumidity2m int     `json:"relative_humidity_2m"`
        Precipitation     float64 `json:"precipitation"`
        WeatherCode       int     `json:"weather_code"`
        WindSpeed10m      float64 `json:"wind_speed_10m"`
        IsDay             int     `json:"is_day"`
    } `json:"current"`
}

func main() {
    brokers := []string{"kafka:9092"}
    topic := "weather"

    client, err := kgo.NewClient(
        kgo.SeedBrokers(brokers...),
		kgo.ConsumerGroup("weather-worker-group"),
        kgo.ConsumeTopics(topic),
		kgo.ConsumeResetOffset(kgo.NewOffset().AtStart()),
    )
    if err != nil {
        log.Fatalf("unable to create kafka client: %v", err)
    }
    defer client.Close()

    fmt.Println("Kafka consumer started...")

    for {
        fetches := client.PollFetches(context.Background())

        if errs := fetches.Errors(); len(errs) > 0 {
            for _, e := range errs {
                log.Printf("error consuming topic %s: %v", e.Topic, e.Err)
            }
            continue
        }

        fetches.EachRecord(func(record *kgo.Record) {
			var msg WeatherMessage
			if err := json.Unmarshal(record.Value, &msg); err != nil {
				log.Println("JSON decode error:", err)
				return
			}
			jsonBytes, err := json.Marshal(msg)
			if err != nil {
				log.Println("JSON encode error:", err)
				return
			}

			resp, err := http.Post(
				"http://weather:3000/weather",
				"application/json",
				bytes.NewBuffer(jsonBytes),
			)
			if err != nil {
				log.Println("POST request failed:", err)
				return
			}
			defer resp.Body.Close()

			log.Println("POST OK:", resp.Status)
        })
    }
}

