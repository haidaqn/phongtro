import * as React from 'react';
import icons from '@/utils/Icons';
import { Category, PriceAndArea } from '@/models';

export interface propsData {
    title: string;
    content?: Category[] | PriceAndArea[];
    isDouble: boolean;
}

const { AiOutlineRight } = icons;

const SlideBarItem = (props: propsData) => {
    const { title, content, isDouble } = props;

    return (
        <div className="bg-white rounded-md px-2 py-3 border-[1px] capitalize">
            <h1 className="text-lg font-medium capitalize">{title}</h1>
            <div className="flex flex-col gap-2 mt-2">
                {isDouble ? (
                    <div className="grid grid-cols-2 gap-1">
                        {content?.map((item) => (
                            <div
                                key={item.code}
                                className="pl-3 flex gap-1 items-center text-[14px] border-b pb-2 border-dashed cursor-pointer hover:text-orange-500"
                            >
                                <AiOutlineRight size={15} color="#ccc" />
                                <span className="">{item.value}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {content?.map((item) => (
                            <div
                                key={item.code}
                                className="pl-3 flex gap-1 items-center text-[14px] border-b pb-2 border-dashed cursor-pointer hover:text-orange-500"
                            >
                                <AiOutlineRight size={15} color="#ccc" />
                                <span className="">{item.value}</span>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default React.memo(SlideBarItem);
