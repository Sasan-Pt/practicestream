import TopAnimeRows from "./topAnimeRows";
import TopNumberOne from "./topNumberOne";

const TopAnimeBox = () => {
  return (
    <div className="bg-[#1c1c1c]  text-white  min-h-[181px] sm:col-start-2 sm:row-start-1 w-[96%]">
      <div className="flex justify-between p-4">
        <div>Top Anime</div>
        <div className="flex gap-2">
          <div>Today</div>
          <div>Week</div>
          <div>Month</div>
        </div>
      </div>
      <TopNumberOne />
      <TopAnimeRows />
    </div>
  );
};
export default TopAnimeBox;
