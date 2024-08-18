export interface ServicesDTO {
  title: string;
  description?: string;
  list: ServicesList[];
}

interface ServicesList {
  id: number;
  title: string;
  description: string;
  icon?: string;
  badges?: Badges[];
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
