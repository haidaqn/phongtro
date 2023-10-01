export interface CityRoot {
    province_id: string;
    province_name: string;
    province_type: string;
}

export interface DistrictRoot {
    district_id: string;
    district_name: string;
    district_type: string;
    lat: any;
    lng: any;
    province_id: string;
}
