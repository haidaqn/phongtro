export interface Category {
    id: number;
    code: string;
    value: string;
    header?: string;
    subheader?: string;
    order?: string;
}

export interface PriceAndArea {
    code: string;
    value: string;
    order: string;
}
