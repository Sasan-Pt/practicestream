"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const SplitCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentDate, ] = useState(() => {
    const year = dayjs().year();
    const month = dayjs().month();
    return { year, month };
  });
  const [daysInMonth, ] = useState(() => {
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

  return (
    <div className="py-4  relative">
      <Carousel setApi={setCarouselApi}>
        <CarouselContent className="gap-x-4 !h-20">
          {daysInMonth &&
            daysInMonth.map((days) => {
              return (
                <CarouselItem
                  className="basis-1/4 bg-[#303030] text-white !pl-0"
                  key={`splitCarousel${days.day}`}
                >
                  <div className="flex justify-center items-center flex-col">
                    <div>{days.month}</div>
                    <div>{days.weekday}</div>
                    <div>{days.day}</div>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="!h-20 !rounded-none bg-[#303030] absolute left-0" />
        <CarouselNext className="!h-20 !rounded-none bg-[#303030] absolute right-0" />
      </Carousel>
    </div>
  );
};

export default SplitCarousel;
