export interface AboutDTO {
  title: string;
  description?: string;
  titleAlign?: string;

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
    list: AboutListItem[];
  };
}

interface AboutListItem {
  id: number;
  title: string;
  description: string;
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
}
