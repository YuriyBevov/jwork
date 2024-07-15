export interface AdvantagesDTO {
  title: string;
  description?: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  list: NewsList[];
}

interface NewsList {
  id: number;
  title: string;
  description: string;
}