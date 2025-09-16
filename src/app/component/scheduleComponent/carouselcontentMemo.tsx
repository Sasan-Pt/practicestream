import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React, { memo } from "react";
import CarouselItems from "./carouselItem";

const CarouselcontentMemo = (props: any) => {
  const { daysInMonth, scheduleLookup, setTodayDate, todayDate } = props;
  return (
    <>
      <CarouselContent className="gap-x-4 !h-20">
        {daysInMonth.map((dayObj, index) => {
          const key = `${dayObj.day}-${dayObj.weekday}-${dayObj.month}`;
          const relatedEvents = scheduleLookup[key] || [];

          console.log(relatedEvents, "relatedEvents");

          return (
            <CarouselItem key={key}>
              <CarouselItems
                onClick={() => setTodayDate(Number(dayObj.day))}
                days={dayObj}
                events={[relatedEvents]}
                bgcolor={
                  Number(dayObj.day) === todayDate
                    ? "bg-[#5a2e98]"
                    : "bg-[#303030]"
                }
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </>
  );
};

export default memo(CarouselcontentMemo);
