import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";

export default function WeeklyForecast() {
  return (
    <Flex direction="column" className="bg-primary pt-4 px-6 pb-6 rounded-3xl w-full">
      <h1 className="font-bold text-secondary">5- DAY FORECAST</h1>

      <Flex direction={"column"} className="weekly-forecast-wrapper">
        <Flex gap="4" className="weekly-forecast-item border-b-2 py-4 border-secondary/30">
          <Flex align="center" justify="between" width="100%">
            <span className="text-secondary">Today</span>
            {/* WEATHER IMAGE */}
            <Image src={"/images/sunny.png"} width={70} height={70} alt="weather" />
          </Flex>
          <Flex align="center" justify="between" width="100%">
            <span>Sunny</span>
            {/* WEATHER IMAGE */}
            <span className="text-secondary"><span className="font-bold text-white">36</span>/22</span>
          </Flex>
        </Flex>
        <Flex gap="4" className="weekly-forecast-item border-b-2 py-4 border-secondary/30">
          <Flex align="center" justify="between" width="100%">
            <span className="text-secondary">Today</span>
            {/* WEATHER IMAGE */}
            <Image src={"/images/sunny.png"} width={70} height={70} alt="weather" />
          </Flex>
          <Flex align="center" justify="between" width="100%">
            <span>Sunny</span>
            {/* WEATHER IMAGE */}
            <span className="text-secondary"><span className="font-bold text-white">36</span>/22</span>
          </Flex>
        </Flex>
        <Flex gap="4" className="weekly-forecast-item border-b-2 py-4 border-secondary/30">
          <Flex align="center" justify="between" width="100%">
            <span className="text-secondary">Today</span>
            {/* WEATHER IMAGE */}
            <Image src={"/images/sunny.png"} width={70} height={70} alt="weather" />
          </Flex>
          <Flex align="center" justify="between" width="100%">
            <span>Sunny</span>
            {/* WEATHER IMAGE */}
            <span className="text-secondary"><span className="font-bold text-white">36</span>/22</span>
          </Flex>
        </Flex>
        <Flex gap="4" className="weekly-forecast-item border-b-2 py-4 border-secondary/30">
          <Flex align="center" justify="between" width="100%">
            <span className="text-secondary">Today</span>
            {/* WEATHER IMAGE */}
            <Image src={"/images/sunny.png"} width={70} height={70} alt="weather" />
          </Flex>
          <Flex align="center" justify="between" width="100%">
            <span>Sunny</span>
            {/* WEATHER IMAGE */}
            <span className="text-secondary"><span className="font-bold text-white">36</span>/22</span>
          </Flex>
        </Flex>
        <Flex gap="4" className="weekly-forecast-item border-b-2 py-4 border-secondary/30">
          <Flex align="center" justify="between" width="100%">
            <span className="text-secondary">Today</span>
            {/* WEATHER IMAGE */}
            <Image src={"/images/sunny.png"} width={70} height={70} alt="weather" />
          </Flex>
          <Flex align="center" justify="between" width="100%">
            <span>Sunny</span>
            {/* WEATHER IMAGE */}
            <span className="text-secondary"><span className="font-bold text-white">36</span>/22</span>
          </Flex>
        </Flex>


      </Flex>
    </Flex>
  )
}
