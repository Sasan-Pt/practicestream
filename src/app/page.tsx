import { Suspense } from "react";
import CarouselCn from "./component/carousel";
import RecentsUpdates from "./component/recentsUpdates";
import Schedule from "./component/scheduleComponent/schedule";
import TopAnimeBox from "./component/topAnimeBox/topAnimeBox";
export default function Home() {
  return (
    <div className={"col-start-2  mt-12"}>
      <div className="lg:grid lg:grid-cols-[65%_35%] gap-x-4">
        <Suspense fallback={<div>Loading...</div>}>
        <CarouselCn />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RecentsUpdates />
        </Suspense>
        <Schedule />
        <TopAnimeBox />
      </div>
    </div>
  );
}
