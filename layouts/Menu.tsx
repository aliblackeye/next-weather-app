import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";

export default function Menu() {
  return (
    <div className="
    container 
    flex 
    items-center 
    justify-evenly 
    w-full p-6 
    bg-primary mt-16 
    sticky 
    bottom-0 
    drop-shadow-2xl 
    border-t
    border-secondary/20
    ">
      <Link href={"/dashboard"}>
        <TiWeatherCloudy size={40} />
      </Link>
      <Link href={"/cities"}>
        <BiMenu size={40} />
      </Link>
      <Link href={"/map"}>
        <BsMap size={24} />
      </Link>
      <Link href={"/settings"}>
        <IoSettings size={30} />
      </Link>
    </div>
  )
}
