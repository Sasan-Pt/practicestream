import Kurologo from "../../../../public/Imagebannerlogo.png";
import LazyImage from "../shareComponent/lazyImage";

const TopAnimeRows = () => {
  return (
    <div className="text-white flex pl-4 pb-4 mt-6">
      <div className=" border-2 border-white p-2 flex-shrink-0 max-h-[39px] mt-[8px]">
        1
      </div>
      <LazyImage
        src={Kurologo}
      />
      <div className="pl-2">
        <div>asd</div>
        <div>sad</div>
      </div>
    </div>
  );
};
export default TopAnimeRows;
