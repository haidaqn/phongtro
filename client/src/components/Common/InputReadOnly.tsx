import React from 'react';

interface propsData {
    label: string;
    value: string;
    setValue?: () => void;
}

export const InputReadOnly = (props: propsData) => {
    const { label, value } = props;

    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium " htmlFor="exactly-address">
                {label}
            </label>
            <input
                type="text"
                readOnly
                id="exactly-address"
                className="border border-gray-200 outline-none rounded-md bg-gray-100 p-2 w-full"
                value={value}
            />
        </div>
    );
};
