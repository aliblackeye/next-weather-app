export type WeatherType = "sunny" | "cloudy" | "rainy" | "snowy" | "partly-cloudy" | "thunderstorm" | "windy" | "foggy";

export type Weather = {
    type: WeatherType;
    degree: number;
    time: string;
}

export enum WeatherIcons {
    "01d" = "/images/clear_sky.svg",
    "01n" = "/images/clear_sky_night.svg",
    "02d" = "/images/few_clouds.svg",
    "02n" = "/images/few_clouds_night.svg",
    "03d" = "/images/scattered_clouds.svg",
    "03n" = "/images/scattered_clouds_night.svg",
    "04d" = "/images/broken_clouds.svg",
    "04n" = "/images/broken_clouds_night.svg",
    "09d" = "/images/shower_rain.svg",
    "09n" = "/images/shower_rain_night.svg",
    "10d" = "/images/rain.svg",
    "10n" = "/images/rain_night.svg",
    "11d" = "/images/thunderstorm.svg",
    "11n" = "/images/thunderstorm_night.svg",
    "13d" = "/images/snow.svg",
    "13n" = "/images/snow_night.svg",
    "50d" = "/images/mist.svg",
    "50n" = "/images/mist_night.svg",
}
