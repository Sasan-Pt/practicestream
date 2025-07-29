"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { UseCarouselPic } from "../api/apiHooks/UseCarouselPic";
import RibbonOverImage from "./shareComponent/ribbonOverImage";

const CarouselCn = () => {
  const { data, isLoading, error, isFetching } = UseCarouselPic();
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className=" relative !rounded-lg "
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent className="!ml-0">
        {data?.images?.map((imageUrl: string, index: number) => (
          <CarouselItem
            key={imageUrl}
            className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]  !rounded-lg !pl-0"
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              priority={index === 0}
              className="object-cover rounded-lg "
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <RibbonOverImage />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white" />
    </Carousel>
  );
};

export default CarouselCn;
