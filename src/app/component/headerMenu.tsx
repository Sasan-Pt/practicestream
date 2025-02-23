import React from "react";
import Image from "next/image";
import Kurologo from "../../../public/Imagebannerlogo.png";
import HeaderSearchBox from "./headerSearchBox";
import HeaderAvatar from "./headerAvatar";
import DropdownMenuShad from "./dropDownMenu/dropDownMenuShad";
import { Button } from "@/components/ui/button"


const HeaderMenu = () => {
  return (
    <div
      className={
        "col-start-2 relative flex gap-x-4 bg-black pt-4 justify-between "
      }
    >
      <div className="flex gap-x-4">
        <DropdownMenuShad />
        <div className={" w-10 min-w-[34px] "}>
          <Image src={Kurologo} alt="Loading..." />
        </div>
        <HeaderSearchBox />
      </div>
      <div className="sm:hidden">
      <HeaderAvatar />
      </div>
      <div className="hidden sm:block">
      <Button variant="outline" className="min-w-[100px] rounded-full">sign up</Button>
      </div>
    </div>
  );
};

export default HeaderMenu;
