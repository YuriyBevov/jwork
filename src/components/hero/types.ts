export interface HeroDTO {
  title: string;
  description: string;
  backgroundImagePath: string;
  tabs: Hero[];
}

interface Hero {
  id: string;
  title: string;
  items: HeroItem[];
}

export interface HeroItem {
  id: string;
  type: string;
  title: string;
  content?: { value: string }[];
}
