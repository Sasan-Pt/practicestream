import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getImagesSlider } from "../../api";

export function UseCarouselPic() {
  const CarouselPics = useQuery({
    queryKey: ["carouselPic"],
    queryFn: () => getImagesSlider(),
  });
  return CarouselPics;
}
