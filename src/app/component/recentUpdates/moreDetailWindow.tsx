"use client"
import Link from "next/link";
import Tooltip from "../shareComponent/tooltip";
import LazyImage from "../shareComponent/lazyImage";
import { useState } from "react";
import { RecentUploadsinnerDataType } from "@/app/api/apiHooks/useRecentUploads";

const MoreDetailWindow = (props: RecentUploadsinnerDataType) => {
  const { link, name } = props;
  const newNmes = name.substring(0, name.lastIndexOf("."));

  return (
    <div
      className="flex flex-col relative group">
      <Link
        href={`/watchAnime/${link}`}
        key={link}
        className="relative aspect-[2/3] w-full"
      >
        <LazyImage
          src={link}
          alt="loading...."
          fill
          sizes="(min-width:1024px) 186px, (min-width:768px) 170px, 154px"
          className=" rounded z-[5]"
        />
      </Link>
      <div className="text-white text-center">{newNmes}</div>
      <div className="hidden lg:group-hover:block ">
       <Tooltip {...props}/>
       </div>
    </div>
  );
};
export default MoreDetailWindow;