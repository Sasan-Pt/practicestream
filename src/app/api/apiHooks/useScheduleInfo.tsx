import { useQuery } from "@tanstack/react-query";
import {  GetSchedule } from "../../api";

interface ScheduleProps{
    startDate:string
    endDate:string
}
export function UseScheduleInfo(props:ScheduleProps) {
    const {startDate,endDate}=props
    console.log(startDate,endDate,"before getting initilizes")
  const ScheduleInfo = useQuery({
    queryKey: ["ScheduleRequest"],
    queryFn: () => GetSchedule(startDate,endDate),
  });
  return ScheduleInfo;
}
