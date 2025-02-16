import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Kurologo from "../../../public/Imagebannerlogo.png";
import HeaderSearchBox from "./headerSearchBox";
import HeaderAvatar from "./headerAvatar";
import DropdownMenuShad from "./dropDownMenu/dropDownMenuShad";

const HeaderMenu = () => {
  return (
    <div
      className={
        "col-start-2 relative flex gap-x-4 bg-black pt-2 sm:justify-between sm:flex-row"
      }
    >
      <div className="flex gap-x-4">
        <DropdownMenuShad />
        <div className={" w-10 min-w-[34px] "}>
          <Image src={Kurologo} alt="Loading..." />
        </div>
        <HeaderSearchBox />
      </div>

      <HeaderAvatar />
    </div>
  );
};

export default HeaderMenu;
