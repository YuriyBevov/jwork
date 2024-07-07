export interface StaffDTO {
  title: string;
  description?: string;
  list: StaffList[];
}

interface StaffList {
  id: number;
  name: string;
  label: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  property: StaffListProperty[];
}

interface StaffListProperty {
  id: string;
  name: string;
  value: string;
}
