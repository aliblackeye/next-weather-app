import { Flex } from "@radix-ui/themes";
import { WeatherIcons } from "@interfaces/weather-types";
import Image from "next/image";

import { motion } from "framer-motion";

interface ITodayForecast {
    weather: any;
}

const TodayWeather = ({ info }: {
    info: {
        time: string;
        temp: string;
        description: string;
        icon: WeatherIcons;
    }
}) => {

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
        className="flex flex-col items-center w-full gap-2">
        {/* CLOCK */}
        <span className="font-bold text-secondary">{info.time.slice(0, 2)}:00
            <span>{Number(info.time.slice(0, 2)) >= 12 ? " PM" : " AM"}</span>
        </span>

        {/* WEATHER IMAGE */}
        <Image src={
            WeatherIcons[info.icon as unknown as keyof typeof WeatherIcons]
        } width={70} height={70} alt="weather" />

        {/* DEGREE */}
        <h1 className="text-2xl font-bold">{info.temp}°</h1>
    </motion.div>
}

export default function TodayForecast(props: ITodayForecast) {

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
        <div className="bg-primary pt-4 px-6 pb-6 rounded-3xl w-full">
            <h1 className="font-bold text-secondary mb-4">TODAY&apos;S FORECAST</h1>

            <motion.div
                className="flex"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {weather.list.slice(0, 3).map((item: any, key: number) => {

                    const info = {
                        time: item.dt_txt.split(' ')[1], // Sadece saat kısmını al
                        temp: (item.main.temp - 273.15).toFixed(0), // Kelvin'den Celsius'a çevirme ve yuvarlama
                        description: item.weather[0].description,
                        icon: item.weather[0].icon
                    };

                    return <TodayWeather info={info} key={key} />
                })}


            </motion.div>
        </div>
    )
}
