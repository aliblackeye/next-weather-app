import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { BsMap } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";

export default function Sidebar() {
  return (
    <aside className="sider w-[110px] flex flex-col gap-16 items-center bg-primary border border-primary p-8 rounded-3xl">

      <div>Logo</div>
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
    </aside>
  )
}
