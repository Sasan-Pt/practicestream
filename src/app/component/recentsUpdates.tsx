import Image from "next/image";
import Kurologo from "../../../public/Imagebannerlogo.png";
const RecentsUpdates = () => {
  return (
    <div className="pt-8">
      <div className="text-white">Recent Updates</div>
      <div className="grid grid-cols-3  gap-x-4  gap-y-4  pt-4">
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div className="text-white text-center">asdasd</div>
        </div> 
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div className="text-white text-center">asdasd</div>
        </div>
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div className="text-white text-center">asdasd</div>
        </div>
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div className="text-white text-center">asdasd</div>
        </div>
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div className="text-white text-center">asdasd</div>
        </div>
      </div>
    </div>
  );
};

export default RecentsUpdates;
