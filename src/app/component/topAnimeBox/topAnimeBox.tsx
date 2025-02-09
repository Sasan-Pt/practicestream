import TopNumberOne from "./topNumberOne";
import Kurologo from "../../../../public/Imagebannerlogo.png";
import Image from "next/image";

const TopAnimeBox = () => {
  return (
    <div className="bg-[#1c1c1c] my-4 text-white  min-h-[181px]">
      <div className="flex justify-between">
        <div>Top Anime</div>
        <div className="flex gap-2">
          <div>Today</div>
          <div>Week</div>
          <div>Month</div>
        </div>
      </div>
      <TopNumberOne />
      <div className="text-white flex pl-4 pb-4 mt-6">
        <div className=" border-2 border-white p-2 flex-shrink-0 max-h-[39px] mt-[8px]">
          1
        </div>
        <Image
          src={Kurologo}
          alt="topAnime"
          className="object-fill max-h-[67px] max-w-[48px] "
        />
        <div className="pl-2">
          <div>asd</div>
          <div>sad</div>
        </div>
      </div>
    </div>
  );
};
export default TopAnimeBox;
