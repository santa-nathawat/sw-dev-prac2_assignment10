export interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
  }
  
  export interface VenueJson {
    success: boolean,
    count: number,
    pagination: { next?: { page: number; limit: number }; prev?: { page: number; limit: number } },
    data: VenueItem[]
  }

export interface VenueDetailJson {
  success: boolean;
  data: VenueItem;
}
