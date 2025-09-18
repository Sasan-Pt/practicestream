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
import { useEffect, useMemo, useState } from "react";
import CarouselItems from "./carouselItem";
import { UseScheduleInfo } from "@/app/api/apiHooks/useScheduleInfo";
import CarouselcontentMemo from "./carouselcontentMemo";
import ReleaseSchedule from "./releaseSchedule";

const SplitCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const { year, month } = useMemo(() => {
    const now = dayjs();
    return { year: now.year(), month: now.month() };
  }, []);

  const daysInMonth = useMemo(() => {
    const days = dayjs(`${year}-${month + 1}-01`).daysInMonth();
    const monthName = dayjs(`${year}-${month + 1}-01`).format("MMMM");

    return Array.from({ length: days }, (_, i) => {
      const date = dayjs(`${year}-${month + 1}-${i + 1}`);
      return {
        day: date.format("D"),
        weekday: date.format("dddd"),
        month: monthName,
      };
    });
  }, [year, month]);

  const [todayDate, setTodayDate] = useState(() => Number(dayjs().format("D")));

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(todayDate - 1);
    }
  }, [carouselApi, todayDate]);

  const { data } = UseScheduleInfo({
    startDate: "2025-09-01",
    endDate: "2025-12-01",
  });

  const scheduleLookup = useMemo(() => {
    if (!data?.data) return {};

    return data?.data.reduce((acc: Record<string, any[]>, obj: any) => {
      const date = dayjs(obj.release_date);
      const key = `${date.date()}-${date.format("dddd")}-${date.format(
        "MMMM"
      )}`;
      acc[key] = acc[key] ? [...acc[key], obj] : [obj];
      return acc;
    }, {});
  }, [data]);

  return (
    <div className="py-4 relative">
      <Carousel setApi={setCarouselApi}>
        <CarouselcontentMemo
          daysInMonth={daysInMonth}
          scheduleLookup={scheduleLookup}
          setTodayDate={setTodayDate}
          todayDate={todayDate}
        />
        <CarouselPrevious className="!h-20 !rounded-none bg-[#303030] absolute left-0" />
        <CarouselNext className="!h-20 !rounded-none bg-[#303030] absolute right-0" />
      </Carousel>

      <ReleaseSchedule />
    </div>
  );
};

export default SplitCarousel;
