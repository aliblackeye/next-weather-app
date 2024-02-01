import { Flex } from '@radix-ui/themes'
import React from 'react'
import { FaShower, FaThermometerFull } from 'react-icons/fa'
import { IoWaterOutline } from 'react-icons/io5'
import { RiWindyFill } from 'react-icons/ri'

import { motion } from "framer-motion";
interface IWeatherConditions {
    weather: any;
}
export default function WeatherConditions(props: IWeatherConditions) {

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

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        }

    }


    return (
        <div className="bg-primary pt-4 px-6 pb-6 rounded-3xl w-full">
            <h1 className="font-bold text-secondary">AIR CONDITIONS</h1>
            <Flex direction="column">
                <motion.div
                    animate="visible"
                    variants={container}
                    initial="hidden"
                    className='flex py-4'>
                    <motion.div variants={item} animate="visible" initial="hidden" className='flex w-full gap-[1px]'>
                        <FaThermometerFull className='text-secondary mt-1 mx-1' />
                        <Flex direction={"column"} className='text-secondary'>
                            Real Feel
                            <span className='text-white font-bold'>{(weather.list[0].main.feels_like - 273.15).toFixed(0)}°</span>
                        </Flex>

                    </motion.div>
                    <motion.div variants={item} animate="visible" initial="hidden" className='flex w-full gap-[1px]'>
                        <RiWindyFill className='text-secondary mt-1 mx-1' />
                        <Flex direction={"column"} className='text-secondary'>
                            Wind
                            <span className='text-white font-bold'>{weather.list[0].wind.speed} km/h</span>
                        </Flex>
                    </motion.div>
                </motion.div>
                <motion.div
                    animate="visible"
                    variants={container}
                    initial="hidden"
                    className='flex py-4'>
                    <motion.div variants={item} animate="visible" initial="hidden" className='flex w-full gap-[1px]'>
                        <IoWaterOutline className='text-secondary mt-1 mx-1' />
                        <Flex direction={"column"} className='text-secondary'>
                            Chance of rain
                            <span className='text-white font-bold'>{weather.list[0].pop * 100}%</span>
                        </Flex>
                    </motion.div>
                    <motion.div variants={item} animate="visible" initial="hidden" className='flex w-full gap-[1px]'>
                        <FaShower className='text-secondary mt-1 mx-1' />
                        <Flex direction={"column"} className='text-secondary'>
                            Humidity
                            <span className='text-white font-bold'>{weather.list[0].main.humidity}%</span>
                        </Flex>
                    </motion.div>
                </motion.div>
            </Flex>

        </div>
    )
}
