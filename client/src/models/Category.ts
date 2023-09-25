export interface Category {
    id: number;
    code: string;
    value: string;
    header?: string;
    subheader?: string;
    order?: string;
}

export interface PriceAndAreaAndProvince {
    code: string;
    value: string;
    order: string | null;
}
