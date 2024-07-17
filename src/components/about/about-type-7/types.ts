export interface AboutDTO {
  title: string;
  description?: string;

  list: AboutList[];
}

interface AboutList {
  id: number;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
