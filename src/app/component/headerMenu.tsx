import React from "react";
import Kurologo from "../../../public/Imagebannerlogo.png";
import HeaderSearchBox from "./headerSearchBox";
import HeaderAvatar from "./headerAvatar";
import DropdownMenuShad from "./dropDownMenu/dropDownMenuShad";
import { Button } from "@/components/ui/button"
import LazyImage from "./shareComponent/lazyImage";
import Link from "next/link";


const HeaderMenu = () => {
  return (
    <div
      className={
        "col-start-2 relative flex gap-x-4 bg-black pt-4 justify-between "
      }
    >
      <div className="flex gap-x-4">
        <DropdownMenuShad />
        <Link href={"/"} className={" w-10 min-w-[34px] "} prefetch={false}>
          <LazyImage src={Kurologo}  />
        </Link>
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
