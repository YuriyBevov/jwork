export interface ResultListDetalilsDTO {
  title: string;
  titleAlign?: string;
  content: {
    list: ResultListListDetalilsItem[];
  };
}

interface ResultListListDetalilsItem {
  id: number;
  title: string;
  description?: string;
  badge: {
    text: string;
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
  properties: [
    {
      Дом: string;
      Корпус: string;
      Этажей: string;
      'Срок сдачи': [
        {
          title: string;
        },
      ];
    },
  ];
  info: {
    title: string;
    description: string;
  };
  table: ResultListListDetalilsTab[];
  apartments: ResultListListDetalilsApartments[];
}

export interface ResultListListDetalilsTab {
  id: string;
  title: string;
  layout: string;
  frame: string;
  completionDate: string;
  numberApartment: string;
  type: string;
  lavel: string;
  totalArea: string;
  price: string;
  finishing: string;
  data: ResultListListDetalilsData[];
}

export interface ResultListListDetalilsData {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  id: number;
  frame: string;
  completionDate: string;
  numberApartment: string;
  type: string;
  lavel: string;
  totalArea: string;
  price: string;
  finishing: string;
}
export interface ResultListListDetalilsApartments {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  id: number;
  type: string;
  level: string;
  square: string;
  kitchensArea: string;
  totalArea: string;
  roomArea: string;
}
