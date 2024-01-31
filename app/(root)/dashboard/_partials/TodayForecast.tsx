import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
const TodayWeather = () => {
    return <Flex direction="column" align={"center"} width={"100%"} gap={"4"}>
        {/* CLOCK */}
        <span className="font-bold text-secondary">8:00 AM</span>

        {/* WEATHER IMAGE */}
        <Image src={"/images/sunny.png"} width={70} height={70} alt="weather" />

        {/* DEGREE */}
        <h1 className="text-2xl font-bold">31°</h1>
    </Flex>
}

export default function TodayForecast() {
    return (
        <div className="bg-primary pt-4 px-6 pb-6 rounded-3xl w-full">
            <h1 className="font-bold text-secondary mb-4">TODAY&apos;S FORECAST</h1>

            <Flex>
                <TodayWeather />
                <TodayWeather />
                <TodayWeather />
            </Flex>
        </div>
    )
}
