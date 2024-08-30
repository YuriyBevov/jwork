export interface HousingListDTO {
  title: string;
  titleAlign?: string;
  description?: string;
  quantity?: string;
  content: {
    list: HousingListListItem[];
  };
}

interface HousingListListItem {
  id: number;
  title: string;
  description?: string;
  image: [
    {
      url: string;
      alt: string;
      width: number;
      height: number;
    },
  ];
  district: string;
  location: [
    {
      name: string;
      time: string;
      image: {
        url: string;
        alt: string;
        width: number;
        height: number;
      };
    },
  ];
  properties: {
    type: string;
    level: string;
    square: string;
    kitchensArea: string;
    totalArea: string;
    roomArea: string;
  };
  price: string;
  priceMeasure: string;
}
