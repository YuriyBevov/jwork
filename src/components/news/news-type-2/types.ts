export interface NewsDTO {
  title: string;
  list: NewsList[];
}

export interface NewsList {
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
  author: NewsAuthor;
}

export interface NewsAuthor {
  name: string;
  createDate: string;
  timeRead: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
