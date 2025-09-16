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
// import { useEffect, useState } from "react";
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

//   function toISO8601({
//     day,
//     month,
//     weekday,
//   }: {
//     day: string;
//     month: string;
//     weekday: string;
//   }) {
//     const months = {
//       January: 0,
//       February: 1,
//       March: 2,
//       April: 3,
//       May: 4,
//       June: 5,
//       July: 6,
//       August: 7,
//       September: 8,
//       October: 9,
//       November: 10,
//       December: 11,
//     };

//     const date = new Date(
//       2025,
//       months[month as keyof typeof months],
//       Number(day)
//     );
//     return date.toISOString();
//   }
//   return (
//     <div className="py-4  relative">
//       <Carousel setApi={setCarouselApi}>
//         <CarouselContent className="gap-x-4 !h-20">
//           {daysInMonth &&
//             data?.data &&
//             daysInMonth.map((days) => {
//               // const toDate = toISO8601({
//               //   day: days.day,
//               //   weekday: days.weekday,
//               //   month: days.month,
//               // });
//               console.log(days, "days");
//               console.log(data?.data, "data");
//               let results = data?.data.filter((obj: any) => {
//                 let newdate = new Date(obj?.release_date);
//                 const options = { weekday: "long", month: "long" };

//                 const result = {
//                   day: newdate.getUTCDate().toString(), // "28"
//                   weekday: newdate.toLocaleDateString("en-US", {
//                     weekday: "long",
//                   }), // "Sunday"
//                   month: newdate.toLocaleDateString("en-US", { month: "long" }), // "September"
//                 };

//                 return (
//                   result.day === days.day &&
//                   result.weekday === days.weekday &&
//                   result.month === days.month &&
//                   obj
//                 );
//               });
//               console.log(results, "results");
//               return (
//                 <CarouselItems
//                   onClick={() => changeDateOnCarousel(Number(days.day))}
//                   days={days}
//                   key={days.day}
//                   bgcolor={
//                     Number(days.day) === todayDate
//                       ? "bg-[#5a2e98]"
//                       : "bg-[#303030]"
//                   }
//                 />
//               );
//             })}
//         </CarouselContent>
//         <CarouselPrevious className="!h-20 !rounded-none bg-[#303030] absolute left-0" />
//         <CarouselNext className="!h-20 !rounded-none bg-[#303030] absolute right-0" />
//       </Carousel>
//     </div>
//   );
// };

// export default SplitCarousel;

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

const SplitCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  // Current year/month
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

  // API fetch
  const { data } = UseScheduleInfo({
    startDate: "2025-09-01",
    endDate: "2025-12-01",
  });

  const scheduleLookup = useMemo(() => {
    if (!data?.data) return {};

    return data.data.reduce((acc: Record<string, any[]>, obj: any) => {
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
    </div>
  );
};

export default SplitCarousel;
