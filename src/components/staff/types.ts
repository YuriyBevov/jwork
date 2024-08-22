export interface StaffDTO {
  title: string;
  titleAlign?: string;
  description?: string;
  content: {
    list: StaffListItem[];
  };
}

interface StaffListItem {
  id: number;
  title: string;
  badge: {
    text: string;
  };
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  properties: [];
}
