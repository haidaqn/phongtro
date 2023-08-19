import * as React from 'react';
import SlideBarItem from './Components/SlideBarItem';
import { Category } from '@/models';

export interface propsData{
    category : Category[]
}

const SlideBar = (props: propsData) => {

    const { category } = props;

    return (
        <div className="flex gap-5 flex-col justify-start">
            <SlideBarItem title='danh mục cho thuê' content={category}/>
            <SlideBarItem title='xem theo giá'/>
            <SlideBarItem title='xem theo diện tích'/>
        </div>
    );
};

export default SlideBar;
