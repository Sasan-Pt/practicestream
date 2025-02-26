import Kurologo from "../../../public/Imagebannerlogo.png";
import LazyImage from "./shareComponent/lazyImage";
const RecentsUpdates = () => {
  const names:Array<string>=["firstone","secondone","thirdone","fourthone","fifthone"]
  return (
    <div className="pt-8 sm:col-start-1">
      <div className="text-white">Recent Updates</div>
      <div className="grid grid-cols-3  gap-x-4  gap-y-4  pt-4">
        {names.map((animeName) => (
          <div key={animeName}>
            <LazyImage src={Kurologo} />
            <div className="text-white text-center">{animeName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentsUpdates;
