export interface AdvantagesDTO {
  title: string;
  description?: string;
  content: {
    title?: string;
    description?: string;
    image?: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    list: NewsList[];
  };
}

interface NewsList {
  id: number;
  title: string;
  description: string;
  icon?: string;
  label?: string;
}
