import ReleaseSchedule from "./releaseSchedule";
import SplitCarousel from "./splitCarousel";

const Schedule = () => {
  return (
    <div className="bg-[#1c1c1c]  mt-4  sm:col-start-1">
      <div className="bold text-[20px] pt-2 pl-2 text-white">
        Estimated Schedule
      </div>
      <SplitCarousel />
    </div>
  );
};
export default Schedule;
