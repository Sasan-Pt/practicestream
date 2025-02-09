import Image from "next/image";
import Kurologo from "../../../../public/Imagebannerlogo.png";
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
      <div className="relative min-h-[200px] overflow-hidden flex items-end">
        <div>
          <Image
            src={Kurologo}
            alt="topAnime"
            fill
            className="object-fill z-[1]"
          />
        </div>
        <div className="text-white min-h-[44px]  z-[2] flex pl-8 pb-4">
          <div className=" border-2 border-white p-2">1</div>
          <div className="pl-2">
            <div>asd</div>
            <div>sad</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopAnimeBox;
