import { Category } from '@/models/Category';

interface propsData {
    label: string;
    value: string;
    setValue: (name: string) => void;
    options: Category[];
}

const SelectOptions = (props: propsData) => {
    const { label, value, setValue, options } = props;

    const handleSelect = (value: string) => {
        // const newValue = options.find((item) => item.value === value)?.code;
        setValue(value);
    };

    return (
        <div className="flex flex-col gap-2 w-3/5">
            <label className="font-medium capitalize" htmlFor="select-address">
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => handleSelect(e.target.value)}
                id="select-address"
                className="outline-none border border-gray-300 px-1 py-2"
            >
                <option value="" className="px-2">
                    --Chọn {label}--
                </option>
                {options.map((item) => (
                    <option className="my-1" key={item.id}>
                        {item?.value}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default SelectOptions;
