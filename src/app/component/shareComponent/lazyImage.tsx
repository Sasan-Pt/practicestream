import Image, { StaticImageData } from "next/image";

type ImageProps = {
    src: StaticImageData;
    alt?: string;
    fill?: boolean;
    width?: number;
    height?: number;
}
const LazyImage = (props:ImageProps) => {
    const {src,fill} = props;
  return <Image src={src} alt="Loading..." loading="lazy"  fill={fill}  />
};

export default LazyImage;
