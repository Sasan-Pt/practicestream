import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Kurologo from "../../../public/Imagebannerlogo.png";

const HeaderMenu = () => {
  return (
    <div className={"col-start-2 flex justify-between bg-black"}>
      <Bars3Icon className={"h-10 w-14 text-white"} />
      <div className={"h-10 w-14"}>
        <Image src={Kurologo} />
      </div>
    </div>
  );
};

export default HeaderMenu;
