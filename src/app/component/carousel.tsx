"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Kurologo from "../../../public/Imagebannerlogo.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
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
          <Image src={Kurologo} alt="Loading..." />
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
