export interface AboutDTO {
  title: string;
  description?: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
