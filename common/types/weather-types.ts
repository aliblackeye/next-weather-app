export type WeatherType = "sunny" | "cloudy" | "rainy" | "snowy" | "partly-cloudy" | "thunderstorm" | "windy" | "foggy";

export type Weather = {
    type: WeatherType;
    degree: number;
    time: string;
}
