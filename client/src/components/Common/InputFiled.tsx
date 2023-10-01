import React from 'react';
import { Input, Typography } from 'antd';

interface propsData {
    placeholder: string;
    label: string;
    type: string;
    value?: string;
    onChange?: () => void;
}

const { Text } = Typography;
export const CustomInput = (props: propsData) => {
    const { placeholder, type, value, label, onChange } = props;
    return (
        <div className="flex flex-col gap-2">
            <Text className="text-base uppercase font-sans">{label}</Text>
            <Input placeholder={placeholder} type={type} value={value} onChange={onChange} />
        </div>
    );
};
