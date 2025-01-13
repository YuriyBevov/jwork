export interface MapDataDto {
  coords: [number, number];
  data: MapOptions[];
}

export interface MapDataItem {
  data: MapOptions;
}

export interface MapOptions {
  id: number;
  url: string;
  imgs: Image[];
  badges: Badge[];
  title: string;
  metros: Metro[];
  chars: Char[];
  price: string;
  price_per: string;
}

interface Image {
  id: number;
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface Badge {
  id: number;
  title: string;
}

interface Metro {
  subway_id: number;
  distance: string;
  metro: string;
}

interface Char {
  id: number;
  title: string;
  value: string;
}
