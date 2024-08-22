export interface NewsDTO {
  title: string;
  tabs: TabItem[];
}

export interface TabItem {
  id: string;
  tag: string;
  content: {
    list: list[];
  };
}

export interface listItem {
  id: string;
  badge: {
    text: string;
  };
  // timeRead: string;
  // title: string;
  // description: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  // author: NewsAuthor;
}

export interface NewsAuthor {
  name: string;
  createDate: string;
  timeRead: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
