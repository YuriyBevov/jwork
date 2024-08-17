export interface HeaderDTO {
  logo: Logo;
  contactInfo: ContactInfo;
  navigation: Navigation[];
}

interface Navigation {
  id: string;
  title: string;
  link: string;
  items?: NavigationSubmenu[];
}

interface NavigationSubmenu {
  id: string;
  title: string;
  link: string;
}

interface ContactInfo {
  id: string;
  items: Item[];
}

interface Item {
  id: string;
  type: string;
  text: string;
}

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}
