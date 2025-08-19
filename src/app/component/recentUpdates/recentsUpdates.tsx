"use client";
import Link from "next/link";
import Kurologo from "../../../public/Imagebannerlogo.png";
import LazyImage from "../shareComponent/lazyImage";
import { UseTopAnime } from "../../api/apiHooks/useTopAnime";
import Modal from "../shareComponent/tooltip";
import Tooltip from "../shareComponent/tooltip";
import MoreDetailWindow from "./moreDetailWindow";
const RecentsUpdates = () => {
  const names: Array<string> = [
    "firstone",
    "secondone",
    "thirdone",
    "fourthone",
    "fifthone",
  ];
  const { data } = UseTopAnime();

  return (
    <div className="pt-8 sm:col-start-1">
      <div className="text-white">Recent Updates</div>
      <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4">
        {data?.images &&
          data?.images?.map((images: string) => {
            return <MoreDetailWindow images={images} />;
          })}
      </div>
    </div>
  );
};

export default RecentsUpdates;
