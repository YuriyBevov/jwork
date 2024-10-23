export interface ResultListDTO {
  count_blocks: number;
  type: string;
  blocks: ResultList[];
}

export interface ResultList {
  id: number;
  apartment_count: number;
  name: string;
  address: string;
  note: string;
  latitude: number;
  longitude: number;
  status: string;
  region_name: string;
  block_img: string[];
  apartments: ApartmentsList[];
  metros: MetrosList[];
  block_info: BlockInfo;
  badge: {
    text: string;
    text2: string;
  };
}

interface ApartmentsList {
  id: number;
  room_type_name: string;
  decoration?: string;
  space_total: number;
  space_room: string;
  space_kitchen: string;
  number: string;
  price: number;
  base_price: number;
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
}
