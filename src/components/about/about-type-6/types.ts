export interface AboutDTO {
  title: string;
  description?: string;
  subtitle?: string;
  label: string;
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
  simpleText: string;
}
