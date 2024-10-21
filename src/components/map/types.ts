export interface FilterDTO {
  name: string;
  coords: [number, number];
  filter: Filter;
}

export interface Filter {
  title: string;
  items: FilterItem[];
}

export interface FilterItem {
  id: string;
  title: string;
  type: string;
  value: FilterItemValue[] | [number, number];
}

interface FilterItemValue {
  id: string;
  value: string | number;
}
