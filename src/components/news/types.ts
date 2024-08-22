export interface NewsDTO {
  title: string;
  description: string;
  titleAlign?: string;
  content: {
    list: NewsListItem[];
    tabs: TabItem[];
  };
}

export interface TabItem {
  id: string;
  tag: string;
  content: {
    list: NewsListItem[];
  };
}

interface NewsListItem {
  id: number;
  title: string;
  description: string;
  detailPageUrl: string;
  badge: {
    text: string;
  };
  note: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };

  author: NewsAuthor;
}

export interface NewsAuthor {
  name: string;
  createFrom: string;
  note: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
