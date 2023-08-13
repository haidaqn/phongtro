import React, { memo, ChangeEvent } from 'react';

interface PropsData {
    label: string;
    value: any;
    setValue: (value: any) => void;
    type: string;
    setInvalidField?: () => void;
    invalidField?: { name: string; message: string }[];
}

const InputForm = ({ label, value, setValue, type, setInvalidField, invalidField }: PropsData) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = { ...value, [type]: e.target.value };
        setValue(newValue);
    };
    const handleFocus = () => {
        if (setInvalidField) {
            setInvalidField();
        }
    };
    const isError = invalidField?.some((item) => item.name === type);
    return (
        <div>
            <label htmlFor={type} className="text-xs">
                {label}
            </label>
            <input
                type={type || 'text'}
                id={type}
                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                value={value[type]}
                onChange={handleChange}
                onFocus={handleFocus}
            />
            {isError && (
                <small className="text-red-500 italic">
                    {invalidField?.find((item) => item.name === type)?.message}
                </small>
            )}
        </div>
    );
};

export default memo(InputForm);
