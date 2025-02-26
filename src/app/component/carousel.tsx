"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Kurologo from "../../../public/Imagebannerlogo.png";
import Autoplay from "embla-carousel-autoplay";
import LazyImage from "./shareComponent/lazyImage";
const CarouselCn = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="mx-12 sm:col-start-1"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <LazyImage src={Kurologo}/>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCn;
