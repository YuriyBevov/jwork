export interface BlogDetailDTO {
  title: string;
  content: string;
  timestamp: string;
  badges: Badges[];
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  author: {
    user?: string;
    date?: string;
    note?: string;
    avatar?: string;
  };
}

export interface Badges {
  text: string;
  outlined?: boolean;
}
