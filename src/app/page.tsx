import CarouselCn from "./component/carousel";
import Footer from "./component/footer/footer";
import RecentsUpdates from "./component/recentsUpdates";
import Schedule from "./component/scheduleComponent/schedule";
import TopAnimeBox from "./component/topAnimeBox/topAnimeBox";
export default function Home() {
  return (
    <div className={"col-start-2  mt-12"}>
      <div>
        <CarouselCn />
        <RecentsUpdates />
        <Schedule />
        <TopAnimeBox />
        <Footer />
      </div>
    </div>
  );
}
