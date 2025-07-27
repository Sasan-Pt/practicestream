"use client";
import { UseTopAnime } from "@/app/api/apiHooks/useTopAnime";
import LazyImage from "../shareComponent/lazyImage";

const TopAnimeRows = () => {
  const { data } = UseTopAnime();
  return (
    <div className="text-white flex pl-4 pb-4 mt-6 gap-x-4">
      <div className=" border-2 border-white p-2 flex-shrink-0 max-h-[39px] mt-[8px] ">
        1
      </div>
      <div className="relative h-[60px] w-[46px] ">
        <LazyImage
          src={data?.images?.[5]}
          fill
          alt="loading ...."
          sizes="100"
        />
      </div>
      <div className="pl-2">
        <div>something something</div>
        <div>sad</div>
      </div>
    </div>
  );
};
export default TopAnimeRows;
