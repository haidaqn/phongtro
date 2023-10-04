import React from 'react';

interface propsData {
    label: string;
    value?: string;
    type: string;
    setValue?: () => void;
}

const typeCustom = () => {
    return (
        <>
            m<sup>2</sup>
        </>
    );
};

export const InputFormV2 = (props: propsData) => {
    const { label, type } = props;
    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="title">
                {label}
            </label>
            <div className="flex items-center justify-center">
                <input type="text" id="title" className="w-full rounded-l-md outline-none border border-gray-300 p-2" />
                <span className="bg-gray-400 p-[9px] rounded-r-md">{type !== '' ? type : typeCustom()}</span>
            </div>
        </div>
    );
};
