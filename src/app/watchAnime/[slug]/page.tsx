'use client'
import { useParams } from "next/navigation";

const WatchAnime = () => {
    const { slug } = useParams();
  return <div className={"col-start-2  mt-12"}>
    {slug}
    </div>;
};

export default WatchAnime;

