export interface ResultListDetalilsAltDTO {
  title: string;
  titleAlign?: string;
  content: {
    list: ResultListListDetalilsAltItem[];
  };
}

interface ResultListListDetalilsAltItem {
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
  data: ResultListListDetalilsAltData[];
}

export interface ResultListListDetalilsAltData {
  id: number;
  title: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  badge: {
    text: string;
  };
  data_content: [
    {
      'Общая площадь': string;
      Корпус: string;
      '№ квартиры': string;
      'Тип  кв': string;
      Этаж: string;
      Отделка: string;
      'Срок сдачи': string;
    },
  ];
  price: string;
  priceMeasure: string;
}
