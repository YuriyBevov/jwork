export interface FooterData {
  logo: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  social: SocialList[];
  subscribe: {
    title: string;
    text: string;
    note: string;
  };
  copyright: string;
  bottomMenu: {
    title: string;
    href: string;
  }[];
  mainMenu: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }[];
}

export interface SocialList {
  id: number;
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  href: string;
}
