"use client";
import { UseScheduleInfo } from "@/app/api/apiHooks/useScheduleInfo";

const ReleaseSchedule = () => {
  const {data}=UseScheduleInfo({startDate:"2025-09-01",endDate: "2025-12-01"})

  console.log(data,"im from hookusage")
  return (
    <div>
      <div className="border-2 ">something</div>
    </div>
  );
};
export default ReleaseSchedule;
