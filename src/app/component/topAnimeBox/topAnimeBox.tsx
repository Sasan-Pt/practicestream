import TopAnimeRows from "./topAnimeRows";
import TopNumberOne from "./topNumberOne";

const TopAnimeBox = () => {
  return (
    <div className="bg-[#1c1c1c] my-4 text-white  min-h-[181px]">
      <div className="flex justify-between">
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
