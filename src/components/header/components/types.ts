export interface HeaderDTO {
  logo: Logo;
  address: string;
  phone: string;
  email: string;
  navigation: Navigation[];
}

export interface Navigation {
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

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}
