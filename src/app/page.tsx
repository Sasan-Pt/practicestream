import CarouselCn from "./component/carousel";
import RecentsUpdates from "./component/recentsUpdates";
export default function Home() {
  return (
    <div className={"col-start-2  mt-12"}>
      <CarouselCn />
      <RecentsUpdates />
    </div>
  );
}
