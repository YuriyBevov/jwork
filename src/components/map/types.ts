export interface FilterDTO {
  name: string;
  coords: [number, number];
  filter: FilterItems;
}

export interface FilterItems {
  title: string;
  items: FilterItem[];
}

export type FilterItem = {
  id: string;
  title: string;
  type: string;
  value: FilterItemValue[];
};

export type FilterItemValue = {
  id: string;
  value: [number, number];
};
