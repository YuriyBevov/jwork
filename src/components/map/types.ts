export interface FilterDTO {
  name: string;
  coords: [number, number];
  filter: FilterItems;
}

export interface FilterItems {
  title: string;
  items: FilterItem[];
}

export interface FilterItem {
  id: string;
  title: string;
  type: string;
  value: FilterItemValue[] | [number, number];
}

export interface FilterItemValue {
  id: string;
  value: {
    id: string;
    value: string;
  }[];
}
