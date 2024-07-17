export interface AboutDTO {
  title: string;
  subtitle?: string;
  description?: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  list: AboutList[];
}

interface AboutList {
  id: number;
  boldText: string;
}
