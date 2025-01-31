import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Kurologo from "../../../public/Imagebannerlogo.png";
import HeaderSearchBox from "./headerSearchBox";
import HeaderAvatar from "./headerAvatar";
const HeaderMenu = () => {
  return (
    <div className={"col-start-2 flex  bg-black pt-2"}>
      <Bars3Icon className={"h-10 w-14 text-white"} />
      <div className={"h-10 w-14"}>
        <Image src={Kurologo} alt="Loading..." />
      </div>
      <HeaderSearchBox />
      <HeaderAvatar />
    </div>
  );
};

export default HeaderMenu;
