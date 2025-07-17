"use client";
import { UseTopAnime } from "@/app/api/apiHooks/useTopAnime";
import LazyImage from "../shareComponent/lazyImage";
import { EyeDropperIcon, EyeIcon } from "@heroicons/react/24/solid";

const TopNumberOne = () => {
  const { data } = UseTopAnime();
  return (
    <div className="relative min-h-[200px] overflow-hidden flex items-end ">
      <LazyImage
        src={data?.images?.[5]}
        alt="topAnime"
        fill
        className="z-[1]"
      />
      <div className="absolute inset-0 shadow-[inset_0_-60px_60px_-10px_rgba(0,0,0,0.7)] z-[3]" />
      <div className="text-white min-h-[44px]  z-[4] flex pl-4 pb-1 ">
        <div className=" border-2 border-white p-2 bg-[#f8f8f8] text-black font-bold">
          1
        </div>
        <div className="pl-2">
          <div>something</div>
          <div className="flex  items-center gap-x-1 text-[#9cabab]">
            <EyeIcon className="h-5" />
            34234
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNumberOne;
