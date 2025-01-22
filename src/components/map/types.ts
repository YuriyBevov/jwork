export interface FilterDTO {
  name: string;
  coords: [];
  type: string;
  data: Data;
}

export interface Data {
  block: Block;
  type: string;
  filter: FilterItems;
}

interface Block {
  id: number;
  name: string;
  address: string;
  note: string;
  latitude: number;
  longitude: number;
  status: string;
  region_name: string;
  apartment: Apartment;
  block_img: string[];
  metros: MetrosList[];
  block_info: BlockInfo;
}

interface Apartment {
  id: number;
  room_type_name: string;
  decoration?: string;
  space_total: number;
  space_room: string;
  base_price: number;
  space_kitchen: string;
  number: string;
  price: number;
  meter_price: number;
  flat_floor: number;
  image: string;
  image2: string;
  building_corp: string;
  building_floors: number;
  building_deadline: string;
}

export interface MetrosList {
  subway_id: number;
  distance: string;
  metro: string;
}

interface BlockInfo {
  building_corps: string[];
  max_floors: number;
  deadlines: string[];
  coords: [number, number];
}

export interface FilterItems {
  title: string;
  items: FilterItem[];
  select: FilterItemSelect[];
}

export type FilterItem = {
  id: string;
  title: string;
  type: string;
  value: FilterItemValue[];
};

export type FilterItemSelect = {
  id: string;
  title: string;
  type: string;
  content?: { value: string }[];
};

export type FilterItemValue = {
  id: string;
  value: string | number[];
};
