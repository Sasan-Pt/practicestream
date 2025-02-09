import CarouselCn from "./component/carousel";
import RecentsUpdates from "./component/recentsUpdates";
import Schedule from "./component/scheduleComponent/schedule";
import TopAnimeBox from "./component/topAnimeBox/topAnimeBox";
export default function Home() {
  return (
    <div className={"col-start-2  mt-12"}>
      <CarouselCn />
      <RecentsUpdates />
      <Schedule />
      <TopAnimeBox />
    </div>
  );
}
