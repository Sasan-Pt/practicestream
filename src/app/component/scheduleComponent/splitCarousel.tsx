"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Kurologo from "../../../../public/Imagebannerlogo.png";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const SplitCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentDate, setCurrentDate] = useState(() => {
    const year = dayjs().year();
    const month = dayjs().month();
    return { year, month };
  });
  const [daysInMonth, setDaysInMonth] = useState(() => {
    const { year, month } = currentDate;
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

  useEffect(() => {
    async function scrollToCurrentDate() {
      const today = await Number(dayjs().format("D"));
      await carouselApi?.scrollTo(today);
    }
    scrollToCurrentDate();
  }, [currentDate, carouselApi]);

  const scrollToIndex = (index: number) => {
    const today = Number(dayjs().format("D"));
    carouselApi?.scrollTo(today);
  };

  return (
    <div>
      <button onClick={() => scrollToIndex(2)}>click me</button>
      <Carousel setApi={setCarouselApi}>
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
