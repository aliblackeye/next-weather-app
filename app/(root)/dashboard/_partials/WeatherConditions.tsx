import { Flex } from '@radix-ui/themes'
import React from 'react'
import { FaThermometerFull } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { IoWaterOutline } from 'react-icons/io5'
import { RiWindyFill } from 'react-icons/ri'

export default function WeatherConditions() {
    return (
        <div className="bg-primary pt-4 px-6 pb-6 rounded-3xl w-full">
            <h1 className="font-bold text-secondary">AIR CONDITIONS</h1>
            <Flex direction="column">
                <Flex className='py-4'>
                    <Flex width="100%" className='gap-[1px]'>
                        <FaThermometerFull className='text-secondary mt-1 mx-1' />
                        <Flex direction={"column"} className='text-secondary'>
                            Real Feel
                            <span className='text-white font-bold'>31°</span>
                        </Flex>

                    </Flex>
                    <Flex width="100%" className='gap-[1px]'>
                        <RiWindyFill className='text-secondary mt-1 mx-1' />
                        <Flex direction={"column"} className='text-secondary'>
                            Wind
                            <span className='text-white font-bold'>31°</span>
                        </Flex>

                    </Flex>
                </Flex>
                <Flex className='py-4'>
                    <Flex width="100%" className='gap-[1px]'>
                        <IoWaterOutline className='text-secondary mt-1 mx-1' />
                        <Flex direction={"column"} className='text-secondary'>
                            Chance of rain
                            <span className='text-white font-bold'>31°</span>
                        </Flex>

                    </Flex>
                    <Flex width="100%" className='gap-[1px]'>
                        <FiSun className='text-secondary mt-1 mx-1' />
                        <Flex direction={"column"} className='text-secondary'>
                            UV Index
                            <span className='text-white font-bold'>31°</span>
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>

        </div>
    )
}
