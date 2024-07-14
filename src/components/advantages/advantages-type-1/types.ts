export interface AdvantagesDTO {
  title: string;
  description?: string;
  list: NewsList[];
}

interface NewsList {
  id: number;
  title: string;
  description: string;
}
