import { Suspense } from "react";
import CarouselCn from "./component/carousel";
import RecentsUpdates from "./component/recentUpdates/recentsUpdates";
import Schedule from "./component/scheduleComponent/schedule";
import TopAnimeBox from "./component/topAnimeBox/topAnimeBox";

export declare const salam: string;

export default function Home() {
  return (
    <div className={"col-start-2  mt-12 h-[60%] mb-[7%]"}>
      <div className="lg:grid lg:grid-cols-[60%_40%]  gap-x-4">
        <Suspense fallback={<div>Loading...</div>}>
          <CarouselCn />
        </Suspense>
        <RecentsUpdates />
        <Schedule />
        <TopAnimeBox />
      </div>
    </div>
  );
}
