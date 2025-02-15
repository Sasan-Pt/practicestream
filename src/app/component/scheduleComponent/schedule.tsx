import ReleaseSchedule from "./releaseSchedule";
import SplitCarousel from "./splitCarousel";

const Schedule = () => {
  return (
    <div className="bg-[#1c1c1c]  mt-4  sm:col-start-1">
      <div>Estimated Schedule</div>
      <SplitCarousel />
      <ReleaseSchedule />
    </div>
  );
};
export default Schedule;
