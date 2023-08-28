import * as React from 'react';
import SlideBarItem from './Components/SlideBarItem';
import { Category, PriceAndArea } from '@/models';

export interface propsData {
    category: Category[];
    price: PriceAndArea[];
    area: PriceAndArea[];
}

const SlideBar = (props: propsData) => {
    const { category, area, price } = props;

    return (
        <div className="flex gap-5 flex-col justify-start">
            <SlideBarItem title="danh mục cho thuê" type="" content={category} isDouble={false} />
            <SlideBarItem title="xem theo giá" type="priceCode" content={price} isDouble={true} />
            <SlideBarItem title="xem theo diện tích" type="areaCode" content={area} isDouble={true} />
        </div>
    );
};

export default SlideBar;
