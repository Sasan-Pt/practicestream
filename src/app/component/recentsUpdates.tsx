import Image from "next/image";
import Kurologo from "../../../public/Imagebannerlogo.png";
const RecentsUpdates = () => {
  return (
    <div>
      <div>Recent Updates</div>
      <div className="flex flex-row flex-wrap">
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div>asdasd</div>
        </div>
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div>asdasd</div>
        </div>
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div>asdasd</div>
        </div>
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div>asdasd</div>
        </div>
        <div>
          <Image src={Kurologo} alt="Loading..." />
          <div>asdasd</div>
        </div>
      </div>
    </div>
  );
};

export default RecentsUpdates;
