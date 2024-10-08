export interface AdvantagesDTO {
  title: string;
  description?: string;
  titleAlign: string;

  content: {
    title?: string;
    description?: string;
    image?: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    list: AdvantagesListItem[];
  };
}

interface AdvantagesListItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
  label?: string;
}
