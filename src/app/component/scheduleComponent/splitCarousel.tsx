"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Kurologo from "../../../../public/Imagebannerlogo.png";
import dayjs from "dayjs";
import { useState } from "react";

const SplitCarousel = () => {
  const [daysInMonth, setDaysInMonth] = useState(() => {
    const year = dayjs().year();
    const month = dayjs().month();
    const daysInMonth = dayjs(`${year}-${month + 1}-01`).daysInMonth();
    const monthName = dayjs(`${year}-${month + 1}-01`).format("MMMM");

    return Array.from({ length: daysInMonth }, (_, i) => {
      const date = dayjs(`${year}-${month + 1}-${i + 1}`);
      return {
        day: date.format("D"),
        weekday: date.format("dddd"),
        month: monthName,
      };
    });
  });

  return (
    <div>
      <Carousel>
        <CarouselContent className="gap-x-4">
          <CarouselItem className="basis-1/3 bg-white">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3 bg-white">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3 bg-white">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3 bg-white">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
          <CarouselItem className="basis-1/3 bg-white">
            <Image src={Kurologo} alt="Loading..." />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SplitCarousel;
