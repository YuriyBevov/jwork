export interface AboutDTO {
  title: string;
  description?: string;

  content: {
    title: string;
    description?: string;
    subtitle?: string;
    badges: Badges[];
    image: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    list: AboutList[];
  };
}

interface AboutList {
  id: number;
  boldText: string;
  simpleText: string;
  label?: string;
  image?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface Badges {
  text: string;
  outlined?: boolean;
}
