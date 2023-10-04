import addressApi from '@/apiClient/address';
import { useAppSelector } from '@/app/hooks';
import { InputFormV2, InputReadOnly, SelectAddress } from '@/components/Common';
import { CityRoot, DistrictRoot } from '@/models/Address';
import { CameraOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import dynamic from 'next/dist/shared/lib/dynamic';
import { useCallback, useEffect, useState } from 'react';

const SelectOptionsDynamic = dynamic(() => import('.././../components/Common/SelectOptions'), { ssr: false });
interface Select {
    id: string;
    name: string;
}

const genderData = [
    {
        id: 1,
        code: 'nam',
        value: 'nam',
    },
    {
        id: 2,
        code: 'nữ',
        value: 'nữ',
    },
];

const { Text, Title } = Typography;
const Address = () => {
    const [provinces, setProvinces] = useState<CityRoot[]>([]);
    const [districts, setDistricts] = useState<DistrictRoot[]>([]);
    const [selectProvince, setSelectProvinces] = useState<Select>({ id: '', name: '' });
    const [selectDistrict, setSelectDistricts] = useState<Select>({ id: '', name: '' });
    const [selectCategory, setSelectCategory] = useState<string>('');
    const [selectObject, setSelectObject] = useState<string>('');
    const [dataInput, setDataInput] = useState<string>('');
    const { category } = useAppSelector((state) => state.category);
    const { name, phone } = useAppSelector((state) => state.auth.currentUser);

    const handleSelectProvince = useCallback(
        (id: string, name: string) => {
            setDataInput(name);
            setSelectProvinces({ id, name });
        },
        [selectProvince],
    );
    const handleSelectCategory = useCallback(
        (name: string) => {
            setSelectCategory(name);
        },
        [selectCategory],
    );
    const handleSelectObject = useCallback(
        (name: string) => {
            setSelectObject(name);
        },
        [selectObject],
    );
    const handleSelectDistricts = useCallback(
        (id: string, name: string) => {
            setSelectDistricts({ id, name });
            setDataInput(`${name}, ${selectProvince.name}`);
        },
        [selectDistrict, selectProvince],
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
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[10px]">
                <Title level={3}>Địa chỉ cho thuê:</Title>
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
                        className="border w-3/5 border-gray-200 bg-gray-100 p-2 outline-none"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <Title level={3}>Thông tin mô tả: </Title>
                <SelectOptionsDynamic
                    label="Loại chuyên mục"
                    value={selectCategory}
                    setValue={handleSelectCategory}
                    options={category}
                />
                <div className="flex flex-col gap-3">
                    {/* <InputFormV2 label="Tiêu đề" /> */}
                    <div className="flex flex-col gap-2">
                        <label>Nội dung mô tả</label>
                        <textarea
                            id="desc"
                            cols={30}
                            rows={10}
                            className="min-h-[100px] border border-gray-200 rounded-md"
                        ></textarea>
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                        <InputReadOnly label="Thông tin liên hệ" value={name} />
                        <InputReadOnly label="Điện thoại" value={phone} />
                        <InputFormV2 label="Giá cho thuê" type="đồng" />
                        <InputFormV2 label="Giá cho thuê" type="" />
                    </div>
                    <SelectOptionsDynamic
                        label="Đối tượng cho thuê"
                        value={selectObject}
                        setValue={handleSelectObject}
                        options={genderData}
                    />
                    <div className="w-full">
                        <h2 className="font-medium text-xl py-4">Hình ảnh</h2>
                        <small className="">Cung cấp hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className="w-full">
                            <label
                                className="cursor-pointer w-full flex flex-col gap-2 items-center justify-center text-xl font-semibold my-4 h-[200px] border-2 rounded-md border-dashed"
                                htmlFor="file"
                            >
                                <CameraOutlined style={{ fontSize: '60px' }} />
                                <Text className="text-xl font-medium">Thêm ảnh</Text>
                            </label>
                            <input hidden type="file" id="file" />
                        </div>
                    </div>
                </div>
                <div className="h-52"></div>
            </div>
        </div>
    );
};

export default Address;
