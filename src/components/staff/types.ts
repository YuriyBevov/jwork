export interface StaffDTO {
  title: string;
  titleAlign?: string;
  description?: string;
  content: {
    list: StaffList[];
  };
}

interface StaffList {
  id: number;
  title: string;
  badge: {
    text: string;
    outlined?: boolean;
    accent?: boolean;
  };
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  properties: [];
}
