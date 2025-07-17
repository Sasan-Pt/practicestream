import Image, { ImageProps, StaticImageData } from "next/image";

const LazyImage = (props: ImageProps) => {
  return <Image loading="lazy" {...props} />;
};

export default LazyImage;
