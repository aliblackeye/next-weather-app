import { WeatherIcons } from "@interfaces/weather-types";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";

import { motion } from "framer-motion";
interface IWeeklyForecast {
  weather: any;
}

const DayItem = ({ info, noBorder }: { info: any, noBorder?: boolean }) => {

  // Animations
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }

  }

  return <motion.div
    variants={item}
    initial="hidden"
    animate="visible"
    className={`flex weekly-forecast-item gap-2 py-4 ${noBorder ? "" : "border-b-2 border-secondary/30"
      }`}>
    <Flex align="center" justify="between" width="100%">
      <span className="text-secondary">{info.day}</span>
      {/* WEATHER IMAGE */}
      <Image src={WeatherIcons[info.icon as unknown as keyof typeof WeatherIcons]} width={60} height={60} alt="weather" />
    </Flex>
    <Flex align="center" justify="between" width="100%">
      <span>{info.description}</span>
      {/* WEATHER IMAGE */}
      <span className="text-secondary"><span className="font-bold text-white">{info.tempMax}</span>/{info.tempMin}</span>
    </Flex>
  </motion.div>
}

export default function WeeklyForecast(props: IWeeklyForecast) {

  // Props
  const { weather } = props;


  // Animations
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }






  return (
    <div className="flex flex-col bg-primary pt-4 px-6 pb-6 rounded-3xl w-full">
      <h1 className="font-bold text-secondary">5-DAY FORECAST</h1>

      <Flex direction={"column"} className="weekly-forecast-wrapper">


        {weather.list.filter((_entry: any, i: number) => i % 8 === 0).map((item: any, index: number) => {

          const info = {
            icon: item.weather[0].icon,
            day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }), // Günü dönüştürme
            tempMin: (item.main.temp_min - 273.15).toFixed(0), // Kelvin'den Celsius'a çevirme ve yuvarlama
            tempMax: (item.main.temp_max - 273.15).toFixed(0), // Kelvin'den Celsius'a çevirme ve yuvarlama
            description: item.weather[0].main
          }
          return <DayItem key={index} info={info} />

        })}



      </Flex>
    </div>
  )
}
