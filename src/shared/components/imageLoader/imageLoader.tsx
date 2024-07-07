type Props = {
  src: string;
  width: number;
  quality?: number;
};

export const ImageLoader: React.FC<Props> = ({ src, width, quality }) => {
  return `/assets/images/${src}?w=${width}&q=${quality || 25}`;
};
