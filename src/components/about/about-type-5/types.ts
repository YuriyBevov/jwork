export interface AboutDTO {
  title: string;

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
  simpleText: string;
}
