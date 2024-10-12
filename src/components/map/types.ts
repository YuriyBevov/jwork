export interface PageDTO {
  name: string;
  coords: [number, number];
  filter: FilterDTO;
}

export interface FilterDTO {
  title: string;
  items: FilterItem[];
}

interface FilterItem {
  title: string;
  type: string;
  name: string;
  placeholder: string;
}
