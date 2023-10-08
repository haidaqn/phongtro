import addressApi from '@/apiClient/address';
import postsApi from '@/apiClient/post';
import { useAppSelector } from '@/app/hooks';
import { InputFormV2, InputReadOnly, SelectAddress } from '@/components/Common';
import { CityRoot, DistrictRoot } from '@/models/Address';
import { getCodeArea, getCodePrice } from '@/utils/CommonFunc';
import { CameraOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Space, Spin, Typography } from 'antd';
import dynamic from 'next/dist/shared/lib/dynamic';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';

const SelectOptionsDynamic = dynamic(() => import('../../components/Common/SelectOptions'), { ssr: false });
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
const NewPost = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [provinces, setProvinces] = useState<CityRoot[]>([]);
    const [districts, setDistricts] = useState<DistrictRoot[]>([]);
    const [selectProvince, setSelectProvinces] = useState<Select>({ id: '', name: '' });
    const [selectDistrict, setSelectDistricts] = useState<Select>({ id: '', name: '' });
    const [selectCategory, setSelectCategory] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [images, setImages] = useState<string[]>([]);
    const [selectObject, setSelectObject] = useState<string>('');
    const [dataInput, setDataInput] = useState<string>('');
    const [price, setPrice] = useState<number | null>(null);
    const [area, setArea] = useState<number | null>(null);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const { category } = useAppSelector((state) => state.category);
    const { name, phone, id } = useAppSelector((state) => state.auth.currentUser);

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
    const handlePrice = (value: number) => {
        setPrice(value);
    };
    const handleArea = (value: number) => {
        setArea(value);
    };
    const handleDeleteImage = (value: string) => {
        setImages((prev) => prev.filter((item) => item !== value));
    };

    const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = e.target;
        setIsLoading(false);
        if (inputElement.files) {
            const images = new FormData();
            const selectedFiles = inputElement.files;
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];
                images.append('file', file);
                images.append('upload_preset', 'oksl1k1o');
                try {
                    const response = await postsApi.getUploadImages(images);
                    if (response.status === 200) {
                        setImages((prev) => [...prev, response.data.secure_url]);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
            setIsLoading(true);
        }
    };

    const handleSubmit = async () => {
        const priceCode = getCodePrice(price || 0);
        const areaCode = getCodeArea(area || 0);
        if (price && area) {
            const payload = {
                categoryCode: `${category.find((item) => item.value === selectCategory)?.code}`,
                title: title,
                priceNumber: price / 1000000,
                areaNumber: area,
                images: images,
                address: dataInput,
                priceCode,
                areaCode,
                description: description,
                target: selectObject || 'Tất cả',
                provinceCode: selectProvince.name,
                label: `${category.find((item) => item.code === selectCategory)?.value} ${dataInput.split(',')[0]}`,
            };
            try {
                const response = await postsApi.createNewPost(payload);
                if (response) {
                    enqueueSnackbar('Tạo bài đăng thành công !', {
                        variant: 'success',
                    });
                    // setDataInput('');
                    // setOu===
                } else {
                    enqueueSnackbar('Tạo bài đăng thất bại !', {
                        variant: 'error',
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

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
                    <div className="flex flex-col gap-2">
                        <label className="font-medium" htmlFor="title">
                            Tiêu đề
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-md outline-none border border-gray-300 p-2"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label>Nội dung mô tả</label>
                        <textarea
                            id="desc"
                            cols={30}
                            rows={10}
                            onChange={(e) => setDescription(e.target.value)}
                            className="min-h-[100px] border border-gray-200 rounded-md px-5 py-4"
                        ></textarea>
                    </div>
                    <div className="w-1/2 flex flex-col gap-3">
                        <InputReadOnly label="Thông tin liên hệ" value={name} />
                        <InputReadOnly label="Điện thoại" value={phone} />
                        <InputFormV2 label="Giá cho thuê" setValue={handlePrice} value={price} type="đồng" />
                        <InputFormV2 label="Diện tích" setValue={handleArea} value={area} type="" />
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
                                {isLoading ? (
                                    <>
                                        <CameraOutlined style={{ fontSize: '60px' }} />
                                        <Text className="text-xl font-medium">Thêm ảnh</Text>
                                    </>
                                ) : (
                                    <>
                                        <Space size="middle">
                                            <Spin size="large" />
                                        </Space>
                                    </>
                                )}
                            </label>
                            <input onChange={(e) => handleFiles(e)} hidden type="file" id="file" multiple />
                            <div className="">
                                <Title level={3}>Preview</Title>
                                <div className="flex gap-4 items-center ">
                                    {images.map((item) => (
                                        <div className="relative w-1/4 h-1/4" key={item}>
                                            <img
                                                src={item}
                                                alt="preview"
                                                className=" h-full w-full object-cover rounded-md cursor-pointer"
                                            />
                                            <span
                                                title="xóa ảnh"
                                                onClick={() => handleDeleteImage(item)}
                                                className="absolute hover:bg-gray-400 top-[-20px] right-[-15px] w-10 h-10 flex items-center justify-center cursor-pointer p-2 text-white text-xl bg-gray-300 rounded-full"
                                            >
                                                <DeleteOutlined style={{ fontSize: '20px' }} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    onClick={() => handleSubmit()}
                    className="text-lg uppercase bg-green-300 rounded-md h-12 text-green-900 hover:opacity-70  hover:transition-opacity"
                    style={{
                        borderColor: 'transparent',
                        color: 'inherit',
                    }}
                >
                    Tạo tin mới
                </Button>
            </div>
        </div>
    );
};

export default NewPost;
