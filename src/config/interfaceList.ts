export interface Dashboard {
  dogList: any[];
  isBucketFull: boolean;
  paginationIndex: 0;
  sortBy: String;
  allDataList: any[];
}

export interface AppConfig {
  showSpinner: boolean;
  showToast: boolean;
  toastMsg: String;
}

export interface Dog {
  bred_for: String;
  breed_group: String;
  height: any;
  id: number;
  image?: any;
  origin: String;
  reference_image_id: String;
  temperament: String;
  weight: any;
  life_span?: String;
  name: String;
  filteredHeight?: number;
  filteredLife?: number;
}

export interface Card {
  dog: Dog;
}
