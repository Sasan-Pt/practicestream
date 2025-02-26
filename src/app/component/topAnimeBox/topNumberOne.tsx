import Kurologo from "../../../../public/Imagebannerlogo.png";
import LazyImage from "../shareComponent/lazyImage";

const TopNumberOne = () => {
  return (
    <div className="relative min-h-[200px] overflow-hidden flex items-end shadow-lg">
      <div>
        <LazyImage
          src={Kurologo}
          alt="topAnime"
          fill
        />
      </div>
      <div className="text-white min-h-[44px]  z-[2] flex pl-4 pb-4">
        <div className=" border-2 border-white p-2">1</div>
        <div className="pl-2">
          <div>asd</div>
          <div>sad</div>
        </div>
      </div>
    </div>
  );
};

export default TopNumberOne;
