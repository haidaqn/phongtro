import { CityRoot, DistrictRoot } from '@/models/Address';

interface propsData {
    label: string;
    optionsCity?: CityRoot[];
    optionsDistrict?: DistrictRoot[];
    value: string;
    setValue: (id: string, name: string) => void;
    type: string;
}

export const SelectAddress = (props: propsData) => {
    const { label, optionsCity, optionsDistrict, value, setValue, type } = props;

    const handleSelect = (value: string) => {
        if (value === '') {
            setValue('', '');
        } else {
            if (type === 'province') {
                const item = optionsCity?.find((item) => item.province_name === value);
                if (item) {
                    setValue(item.province_id, item.province_name);
                }
            }
            if (type === 'district') {
                const item = optionsDistrict?.find((item) => item.district_name === value);
                if (item) {
                    setValue(item.district_id, item.district_name);
                }
            }
        }
    };

    return (
        <div className="flex flex-col gap-2 w-1/4">
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
                {type === 'province'
                    ? optionsCity?.map((item) => (
                          <option className="my-1" key={item.province_id}>
                              {item?.province_name}
                          </option>
                      ))
                    : optionsDistrict?.map((item) => (
                          <option className="my-1" key={item.district_id}>
                              {item?.district_name}
                          </option>
                      ))}
            </select>
        </div>
    );
};
