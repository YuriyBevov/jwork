export interface BlogDetailDTO {
  title: string;
  subtitle: string;
  content: string;
  timestamp: string;
  cathegory: string;
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
  badges: Badges[];
}

export interface Badges {
  text: string;
  outlined?: boolean;
}
