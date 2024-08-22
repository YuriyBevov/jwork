export interface NewsDTO {
  title: string;
  list: NewsList[];
}

interface NewsList {
  id: number;
  category: string;
  timeRead: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
