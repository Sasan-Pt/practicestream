import Image from "next/image";
import footerImage from "../../../../public/footer-icon.png";

const Footer = () => {
  return (
    <div className="bg-[#1c1c1c] text-white  w-full col-span-full grid grid-cols-[4%_92%_4%] md:grid-cols-[5%_90%_5%] ">
      <div className="col-start-2">
        <div className="flex gap-x-8 justify-between">
          <div>
            <div>something something aine</div>
            <div>this si something good</div>
            <div>sadasd</div>
            <div>asdasd</div>
          </div>
          <div className="relative  -translate-y-12 translate-x-2 w-[260px] h-[320px]">
            <Image src={footerImage} alt="something" width={260} height={290} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
