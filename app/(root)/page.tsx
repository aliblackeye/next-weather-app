"use client";
import { useEffect, useState } from "react";

// Components
import Select, { SelectOption } from "@components/select";

// Services
import { weatherServices } from "@services/weather-services";
import { countryServices } from "@services/country-services";

export default function Index() {

  // Variables
  let api_key = "";

  // States
  const [cities, setCities] = useState<SelectOption[]>([]);
  const [weather, setWeather] = useState<any>(null);

  if (typeof window !== "undefined") {
    api_key = sessionStorage.getItem("api_key") as string;
  }

  // Functions
  const getWeather = async (
    { lat, lon }: { lat: number; lon: number }
  ) => {
    const data = await weatherServices.getWeather(lat, lon, api_key);
    setWeather(data);
  };

  const getCities = async () => {
    const res = await countryServices.getCities();

    // Şehirleri seçeneklere ekliyoruz.
    const options = res?.data?.map((i: any) => {
      return {
        value: i.ID,
        label: i.TEXT
      }
    });

    // Şehirleri state'e atıyoruz.
    setCities(options);
  };

  const handleChangeCity = async (value: any) => {
    const city = cities.find(i => i.value === value)?.label as string;
    const res = await weatherServices.getCoordinatesByLocationName(city, api_key)
    const lat = res?.data[0]?.lat;
    const lon = res?.data[0]?.lon;

    await getWeather({
      lat,
      lon,
    });
  }

  // Effects
  useEffect(() => {
    getCities();
  }, []);

  // Render
  return (
    <main className="main container">
      <Select options={cities} placeholder="Bir şehir seçiniz." onChange={
        handleChangeCity
      } />

    </main>
  )
}
