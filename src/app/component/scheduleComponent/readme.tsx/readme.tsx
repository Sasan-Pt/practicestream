// "use client";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselApi,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import dayjs from "dayjs";
// import { useEffect, useState, useMemo, useCallback } from "react";
// import CarouselItems from "./carouselItem";
// import { UseScheduleInfo } from "@/app/api/apiHooks/useScheduleInfo";

// const SplitCarousel = () => {
//   const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
//   const [currentDate] = useState(() => {
//     const year = dayjs().year();
//     const month = dayjs().month();
//     return { year, month };
//   });
//   const [daysInMonth] = useState(() => {
//     const { year, month } = currentDate;
//     const daysInMonth = dayjs(`${year}-${month + 1}-01`).daysInMonth();
//     const monthName = dayjs(`${year}-${month + 1}-01`).format("MMMM");

//     return Array.from({ length: daysInMonth }, (_, i) => {
//       const date = dayjs(`${year}-${month + 1}-${i + 1}`);
//       return {
//         day: date.format("D"),
//         weekday: date.format("dddd"),
//         month: monthName,
//       };
//     });
//   });
//   const [todayDate, setTodayDate] = useState<number>(() => {
//     return Number(dayjs().format("D"));
//   });

//   useEffect(() => {
//     async function scrollToCurrentDate() {
//       await carouselApi?.scrollTo(todayDate - 1);
//     }
//     scrollToCurrentDate();
//   }, [currentDate, carouselApi, todayDate]);

//   const changeDateOnCarousel = (clickedDate: number) => {
//     setTodayDate(clickedDate);
//   };

//   const { data } = UseScheduleInfo({
//     startDate: "2025-09-01",
//     endDate: "2025-12-01",
//   });

//   // Memoize the processed schedule data for efficient lookups
//   const scheduleDataByDate = useMemo(() => {
//     if (!data?.data) return new Map();

//     const scheduleMap = new Map();

//     data.data.forEach((obj: any) => {
//       if (!obj?.release_date) return;

//       const releaseDate = dayjs(obj.release_date);
//       const dateKey = releaseDate.format("YYYY-MM-DD");

//       if (!scheduleMap.has(dateKey)) {
//         scheduleMap.set(dateKey, []);
//       }
//       scheduleMap.get(dateKey).push(obj);
//     });

//     return scheduleMap;
//   }, [data?.data]);

//   // Memoize the carousel items to prevent unnecessary re-renders
//   const carouselItems = useMemo(() => {
//     if (!daysInMonth || !data?.data) return [];

//     return daysInMonth.map((days) => {
//       const dateKey = dayjs(
//         `${currentDate.year}-${currentDate.month + 1}-${days.day}`
//       ).format("YYYY-MM-DD");
//       const results = scheduleDataByDate.get(dateKey) || [];

//       return {
//         days,
//         results,
//         key: days.day,
//       };
//     });
//   }, [daysInMonth, data?.data, currentDate, scheduleDataByDate]);

//   // Memoize the click handler to prevent unnecessary re-renders
//   const handleDateClick = useCallback((day: string) => {
//     changeDateOnCarousel(Number(day));
//   }, []);

//   return (
//     <div className="py-4  relative">
//       <Carousel setApi={setCarouselApi}>
//         <CarouselContent className="gap-x-4 !h-20">
//           {carouselItems.map(({ days, results, key }) => {
//             console.log(results, "results");
//             return (
//               <CarouselItems
//                 onClick={() => handleDateClick(days.day)}
//                 days={days}
//                 key={key}
//                 bgcolor={
//                   Number(days.day) === todayDate
//                     ? "bg-[#5a2e98]"
//                     : "bg-[#303030]"
//                 }
//               />
//             );
//           })}
//         </CarouselContent>
//         <CarouselPrevious className="!h-20 !rounded-none bg-[#303030] absolute left-0" />
//         <CarouselNext className="!h-20 !rounded-none bg-[#303030] absolute right-0" />
//       </Carousel>
//     </div>
//   );
// };

// export default SplitCarousel;
