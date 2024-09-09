export interface ResultListDTO {
  title: string;
  titleAlign?: string;
  description?: string;
  quantity?: string;
  content: {
    list: ResultListListItem[];
  };
}

interface ResultListListItem {
  id: number;
  title: string;
  description?: string;
  badge: {
    text: string;
    text_2: string;
  };
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
  properties_alt: [
    {
      title: string;
      description: string;
    },
  ];
  price: string;
  price_alt: string;
  priceMeasure: string;
  priceMeasure_alt: string;
}
