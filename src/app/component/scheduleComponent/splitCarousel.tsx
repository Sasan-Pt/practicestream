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
import CarouselItems from "./carouselItem";

const SplitCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentDate] = useState(() => {
    const year = dayjs().year();
    const month = dayjs().month();
    return { year, month };
  });
  const [daysInMonth] = useState(() => {
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
  const [todayDate, setTodayDate] = useState<number>(() => {
    return Number(dayjs().format("D"));
  });

  useEffect(() => {
    async function scrollToCurrentDate() {
      await carouselApi?.scrollTo(todayDate - 1);
    }
    scrollToCurrentDate();
  }, [currentDate, carouselApi, todayDate]);

  const changeDateOnCarousel = (clickedDate: number) => {
    setTodayDate(clickedDate);
  };

  return (
    <div className="py-4  relative">
      <Carousel setApi={setCarouselApi}>
        <CarouselContent className="gap-x-4 !h-20">
          {daysInMonth &&
            daysInMonth.map((days) => {
              return (
                <CarouselItems
                  onClick={() => changeDateOnCarousel(Number(days.day))}
                  days={days}
                  key={days.day}
                  bgcolor={
                    Number(days.day) === todayDate
                      ? "bg-[#5a2e98]"
                      : "bg-[#303030]"
                  }
                />
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
