export interface BlogDetailDTO {
  title: string;
  content: string;
  timestamp: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
