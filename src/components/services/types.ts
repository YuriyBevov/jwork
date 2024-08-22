export interface ServicesDTO {
  title: string;
  description?: string;
  titleAlign: string;
  content: {
    list: ServicesListItem[];
  };
}

interface ServicesListItem {
  id: number;
  title: string;
  description: string;
  badges: Badges[];
  icon?: string;
  image: {
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
