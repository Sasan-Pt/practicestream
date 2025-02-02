import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Kurologo from "../../../../public/Imagebannerlogo.png";

const SplitCarousel = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SplitCarousel;
