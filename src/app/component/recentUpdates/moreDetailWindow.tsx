import Link from "next/link";
import Tooltip from "../shareComponent/tooltip";
import LazyImage from "../shareComponent/lazyImage";
import { useState } from "react";

interface MoreDetailWindowProps {
  images: string;
}
const MoreDetailWindow = (props: MoreDetailWindowProps) => {
  const { images } = props;
  const [openMoreDetail, setOpenMoreDetail] = useState(false);
  return (
    <div
      className="flex flex-col relative "
      onMouseEnter={() => setOpenMoreDetail(true)}
      onMouseLeave={() => setOpenMoreDetail(false)}
    >
      <Link
        href={`/watchAnime/${images}`}
        key={images}
        className="relative aspect-[2/3] w-full"
      >
        <LazyImage
          src={images}
          alt="loading...."
          fill
          sizes="(min-width:1024px) 186px, (min-width:768px) 170px, 154px"
          className=" rounded"
        />
      </Link>
      <div className="text-white text-center">loram</div>
      {openMoreDetail && <Tooltip />}
    </div>
  );
};
export default MoreDetailWindow;
