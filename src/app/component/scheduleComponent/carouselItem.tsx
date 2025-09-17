import { CarouselItem } from "@/components/ui/carousel";

interface carouselProps {
  days: {
    day: string;
    weekday: string;
    month: string;
  };
  bgcolor: string;
  onClick: () => void;
  events: {
    id: number;
    series_id: number;
    episode_number: number;
    release_date: string;
    title: string;
    season_number: number;
  }[];
}
const CarouselItems = (props: carouselProps) => {
  const { days, bgcolor, onClick, events } = props;
  return (
    <CarouselItem
      className={`basis-1/4 text-white !pl-0 ${bgcolor}`}
      key={`splitCarousel${days.day}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center flex-col">
        <div>{days.month}</div>
        <div>{days.weekday}</div>
        <div>{days.day}</div>
      </div>
    </CarouselItem>
  );
};
export default CarouselItems;
