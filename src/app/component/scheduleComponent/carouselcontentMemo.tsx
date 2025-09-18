import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React, { memo } from "react";
import CarouselItems from "./carouselItem";

interface Episode {
  id: number;
  series_id: number;
  episode_number: number;
  release_date: string;
  title: string;
  season_number: number;
}

interface EpisodesByDate {
  [dateKey: string]: Episode[];
}
interface daysInMonth {
  day: string;
  month: string;
  weekday: string;
}
interface CarouselContentMemoProps {
  scheduleLookup: EpisodesByDate;
  daysInMonth: daysInMonth[];
  setTodayDate: React.Dispatch<React.SetStateAction<number>>;
  todayDate: number;
}

const CarouselcontentMemo = (props: CarouselContentMemoProps) => {
  const { daysInMonth, scheduleLookup, setTodayDate, todayDate } = props;

  return (
    <>
      <CarouselContent className="gap-x-4  w-[30%] p-4 mx-4">
        {daysInMonth.map((dayObj) => {
          const key = `${dayObj.day}-${dayObj.weekday}-${dayObj.month}`;
          const relatedEvents = scheduleLookup[key] || [];

          return (
            <CarouselItem key={key}>
              <CarouselItems
                onClick={() => setTodayDate(Number(dayObj.day))}
                days={dayObj}
                events={relatedEvents}
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
