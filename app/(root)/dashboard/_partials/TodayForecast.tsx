import { Box, Flex } from "@radix-ui/themes";
import { WeatherIcons } from "@interfaces/weather-types";
import Image from "next/image";


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
    return <Flex direction="column" align={"center"} width={"100%"} gap={"4"}>
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
    </Flex>
}

export default function TodayForecast(props: ITodayForecast) {

    // Props
    const { weather } = props;

    return (
        <div className="bg-primary pt-4 px-6 pb-6 rounded-3xl w-full">
            <h1 className="font-bold text-secondary mb-4">TODAY&apos;S FORECAST</h1>

            <Flex>
                {weather.list.slice(0, 3).map((item: any, key: number) => {

                    const info = {
                        time: item.dt_txt.split(' ')[1], // Sadece saat kısmını al
                        temp: (item.main.temp - 273.15).toFixed(0), // Kelvin'den Celsius'a çevirme ve yuvarlama
                        description: item.weather[0].description,
                        icon: item.weather[0].icon
                    };

                    console.log(info)

                    return <TodayWeather info={info} key={key} />
                })}


            </Flex>
        </div>
    )
}
