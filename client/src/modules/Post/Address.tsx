import React, { useCallback, useEffect, useState } from 'react';
import SelectAddress from '@/components/Common/SelectAddress';
import { CityRoot, DistrictRoot } from '@/models/Address';
import addressApi from '@/apiClient/address';
import { Typography } from 'antd';

interface Select {
    id: string;
    name: string;
}
const { Text, Title } = Typography;
const Address = () => {
    const [provinces, setProvinces] = useState<CityRoot[]>([]);
    const [districts, setDistricts] = useState<DistrictRoot[]>([]);
    const [selectProvince, setSelectProvinces] = useState<Select>({ id: '', name: '' });
    const [selectDistrict, setSelectDistricts] = useState<Select>({ id: '', name: '' });
    const [dataInput, setDataInput] = useState<string>('');

    const handleSelectProvince = useCallback(
        (id: string, name: string) => {
            setSelectProvinces({ id, name });
        },
        [selectProvince],
    );

    const handleSelectDistricts = useCallback(
        (id: string, name: string) => {
            setDataInput(`${name}, ${selectProvince.name}`);
            setSelectDistricts({ id, name });
        },
        [selectDistrict],
    );

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await addressApi.getCity();
                setProvinces(response.data?.results);
            };
            fetchData();
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        try {
            const fetchData = async () => {
                if (selectProvince.id !== '') {
                    const response = await addressApi.getDistrict(selectProvince.id);
                    setDistricts(response.data.results);
                    setDataInput(selectProvince.name);
                }
                if (selectProvince.id === '') {
                    setDataInput('');
                    setDistricts([]);
                }
            };
            fetchData();
        } catch (err) {
            console.log(err);
        }
    }, [selectProvince]);
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <SelectAddress
                    value={selectProvince.name}
                    setValue={handleSelectProvince}
                    optionsCity={provinces}
                    label="Tỉnh/TP"
                    type="province"
                />
                <SelectAddress
                    value={selectDistrict.name}
                    setValue={handleSelectDistricts}
                    optionsDistrict={districts}
                    label="Quận/Huyện"
                    type="district"
                />
            </div>
            <div className="w-full flex flex-col ">
                <Title level={5}>Địa chỉ chính xác: </Title>
                <input
                    value={dataInput}
                    type="text"
                    readOnly
                    placeholder="VD:     Đông Anh , Thành phố Hà Nội"
                    className="border w-full border-gray-200 bg-gray-100 p-2 outline-none"
                />
            </div>
        </div>
    );
};

export default Address;
