export interface NewsDTO {
  title: string;
  list: NewsList[];
}

interface NewsList {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
