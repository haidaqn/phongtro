import { useAppSelector, useAppDispatch } from '@/app/hooks';
import SearchItem from '@/components/Common/SearchItem';
import { useCallback, useState } from 'react';
import icons from '../../../utils/Icons';
import Modal from '../Modal/Modal';
import * as actions from '@/features/Post/postAction';

const { HiOutlineLocationMarker, BsChevronRight, TbReportMoney, RiCrop2Line } = icons;

const Search = () => {
    const { area, price, provinces, category } = useAppSelector((state) => state.category);
    const { type } = useAppSelector((state) => state.post);
    const dispatch = useAppDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState<any>([]);
    const [title, setTitle] = useState<string>('');
    const [categoryHome, setCategoryHome] = useState<string>(
        category.find((item) => item.value === type.areaCode)?.value || 'Phòng trọ, Nhà trọ...',
    );
    const [province, setProvince] = useState<string>('Toàn quốc');
    const [priceSelect, setPriceSelect] = useState<string>(
        price.find((item) => item.value === type.priceCode)?.value || 'Chọn giá',
    );
    const [areaSelect, setAreaSelect] = useState<string>(
        area.find((item) => item.code === type.areaCode)?.value || 'Chọn diện tích',
    );

    const handleOpenModal = (data: any, title: string) => {
        setModalData(data);
        setTitle(title);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setModalData([]);
        setTitle('');
    };

    const handleSelect = useCallback(
        (data: string, title: string) => {
            if (title === 'CHỌN LOẠI BẤT ĐỘNG SẢN') {
                const result = category.find((item) => item.code === data);
                if (result) setCategoryHome(result.value);
            }
            if (title === 'CHỌN TỈNH THÀNH') {
                const result = provinces.find((item) => item.code === data);
                if (result) setProvince(result.value);
            }
            if (title === 'CHỌN GIÁ') {
                const result = price.find((item) => item.code === data);
                if (result) setPriceSelect(result.value);
            }
            if (title === 'CHỌN DIỆN TÍCH') {
                const result = area.find((item) => item.code === data);
                if (result) setAreaSelect(result.value);
            }
        },
        [categoryHome, province, priceSelect, areaSelect],
    );
    const handleSearch = () => {
        const priceCode = price.find((item) => item.value === priceSelect)?.code;
        const categoryCode = category.find((item) => item.value === categoryHome)?.code;
        const areaCode = area.find((item) => item.value === areaSelect)?.code;
        const provinceCode = provinces.find((item) => item.value === province)?.code;
        console.log(priceCode, categoryCode, areaCode, provinceCode);
        dispatch(
            actions.getPostLimit({
                query: {
                    page: 0,
                    categoryCode: categoryCode,
                    areaCode: areaCode,
                    priceCode: priceCode,
                    provinceCode: provinceCode,
                },
            }),
        );
    };

    return (
        <>
            <div className="my-2 bg-[#febb02] rounded-md flex gap-3 px-3 py-3">
                <span
                    className="cursor-pointer flex-2"
                    onClick={() => handleOpenModal(category, 'CHỌN LOẠI BẤT ĐỘNG SẢN')}
                >
                    <SearchItem
                        IconBefore={<HiOutlineLocationMarker />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        defaultText={categoryHome}
                        fontWeight
                    />
                </span>
                <span className="cursor-pointer flex-2" onClick={() => handleOpenModal(provinces, 'CHỌN TỈNH THÀNH')}>
                    <SearchItem
                        IconBefore={<HiOutlineLocationMarker />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        defaultText={province}
                    />
                </span>
                <span className="cursor-pointer flex-2" onClick={() => handleOpenModal(price, 'CHỌN GIÁ')}>
                    <SearchItem
                        IconBefore={<TbReportMoney />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        defaultText={priceSelect}
                    />
                </span>
                <span className="cursor-pointer flex-2" onClick={() => handleOpenModal(area, 'CHỌN DIỆN TÍCH')}>
                    <SearchItem
                        IconBefore={<RiCrop2Line />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        defaultText={areaSelect}
                    />
                </span>
                <button
                    type="button"
                    onClick={() => handleSearch()}
                    className="outline-none py-2 px-4 flex-1 rounded-md bg-main text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
                >
                    Tìm kiếm
                </button>
            </div>
            {isModalVisible && (
                <Modal
                    handleSelect={handleSelect}
                    visible={isModalVisible}
                    onClose={handleCloseModal}
                    modalData={modalData}
                    title={title}
                />
            )}
        </>
    );
};

export default Search;
