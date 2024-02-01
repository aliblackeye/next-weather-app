"use client";

// Libs
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Flex } from "@radix-ui/themes";

// Services
import { weatherServices } from "@services/weather-services";
import { countryServices } from "@services/country-services";

// Partials
import WeatherConditions from "./_partials/WeatherConditions";
import TodayForecast from "./_partials/TodayForecast";
import WeeklyForecast from "./_partials/WeeklyForecast";

// Components
import { SelectOption } from "@components/select";
import SearchSelect from "@components/search-select";
import Loading from "@components/loading";
import { WeatherIcons } from "@interfaces/weather-types";

export default function Weather() {

  // Variables
  let api_key = "";

  // States
  const [cities, setCities] = useState<SelectOption[]>([]);
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState<string>("");

  if (typeof window !== "undefined") {
    api_key = sessionStorage.getItem("api_key") as string;
  }

  // Functions
  const getCities = useCallback(async () => {
    const res = await countryServices.getCities();

    // Şehirleri options'a uygun hale getiriyoruz
    const options = res?.data?.map((i: any) => {
      return {
        value: i.ID.toString(),
        label: i.TEXT
      }
    });


    // Şehirleri state'e atıyoruz
    setCities(options);

    return options;
  }, [])

  const getWeather = useCallback(async (
    { lat, lon }: { lat: number; lon: number }
  ) => {
    const res = await weatherServices.getWeather(lat, lon, api_key);
    setWeather(res?.data);
  }, [api_key])

  const getCityWeather = useCallback(async (value: string, cityName?: string) => {

    const city = cityName ?? cities.find(i => i.value === value)?.label as string;

    setCity(city);

    const res = await weatherServices.getCoordinatesByLocationName(city, api_key)
    const lat = res?.data[0]?.lat;
    const lon = res?.data[0]?.lon;

    await getWeather({
      lat,
      lon,
    });
  }, [cities, api_key])

  // Effects
  useEffect(() => {
    if (cities.length === 0) {
      getCities().then(async () => {
        getCityWeather("34", "Istanbul");
      });
    }

  }, [cities, getCityWeather, getCities]);

  if (!weather) return <Loading />;

  // Render
  return (
    <div className="container py-8">
      <Flex direction={"column"} align={"center"}>
        {/* SEARCH SELECT */}
        <SearchSelect
          disabled={cities.length === 0}
          defaultValue={"34"}
          options={cities}
          block
          placeholder={"Select a city"}
          onChange={
            getCityWeather
          }
        />

        {/* CITY AND CHANCHES */}
        <div className="flex flex-col items-center my-10">
          <h1 className="text-5xl font-semibold">{city}</h1>
          <h5 className="text-base">Chance of rain: 0%</h5>
        </div>

        {/* WEATHER IMAGE */}
        <Image src={WeatherIcons[weather.list[0].weather[0].icon as unknown as keyof typeof WeatherIcons]} width={200} height={200} alt="weather" />

        <h1 className="text-5xl my-10">31°</h1>

        <Flex direction={"column"} width={"100%"} className="gap-6" >
          <TodayForecast weather={weather} />
          <WeeklyForecast weather={weather} />
          <WeatherConditions weather={weather} />
        </Flex>

      </Flex>



    </div>
  )
}
