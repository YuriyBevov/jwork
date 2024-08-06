export interface FooterDTO {
  logo: FooterLogo;
  social: FooterSocial[];
  subscribe?: FooterSubscribe;
  copyright: string;
  bottomMenu: FooterBottomMenu[];
  mainMenu: FooterMenu[];
  topMenu: TopMenu[];
  requisites: Requisites;
  contactAddress: ContactInfo;
  contactInfo: ContactInfo;
}

export interface FooterLogo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface FooterSocial {
  id: number;
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  href: string;
}

export interface FooterSubscribe {
  title: string;
  text: string;
  note: string;
}

export interface FooterBottomMenu {
  title: string;
  href: string;
}

export interface TopMenu {
  title: string;
  href: string;
}

export interface FooterMenu {
  title: string;
  items: FooterMenuList[];
}

export interface FooterMenuList {
  title: string;
  href: string;
}

export interface Requisites {
  title: string;
  items: RequisitesItem[];
}

export interface RequisitesItem {
  id: string;
  title: string;
  href: string;
}

export interface ContactInfo {
  id: string;
  title: string;
  items: ContactInfoItems[];
}

export interface ContactInfoItems {
  id: string;
  type: string;
  text: string;
}
