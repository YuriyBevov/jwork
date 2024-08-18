export interface ServicesDTO {
  title: string;
  description?: string;
  titleAlign: string;
  list: ServicesList[];
}

interface ServicesList {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
