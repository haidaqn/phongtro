import { useAppSelector, useAppDispatch } from '@/app/hooks';
import SearchItem from '@/components/Common/SearchItem';
import { useCallback, useState } from 'react';
import icons from '../../../utils/Icons';
import Modal from '../Modal/Modal';

const { HiOutlineLocationMarker, BsChevronRight, TbReportMoney, RiCrop2Line } = icons;

const Search = () => {
    const { area, price, provinces, category } = useAppSelector((state) => state.category);
    const dispatch = useAppDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState<any>([]);
    const [title, setTitle] = useState<string>('');
    const [categoryHome, setCategoryHome] = useState<string>('Phòng trọ, Nhà trọ...');
    const [address, setAddress] = useState<string>('Toàn quốc');
    const [priceSelect, setPriceSelect] = useState<string>('Chọn giá');
    const [areaSelect, setAreaSelect] = useState<string>('Chọn diện tích');

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
                console.log(data);
                const result = category.find((item) => item.code === data);
                if (result) setCategoryHome(result.value);
            }
            if (title === 'CHỌN TỈNH THÀNH') {
                console.log(data);
                const result = provinces.find((item) => item.code === data);
                if (result) setAddress(result.value);
            }
            if (title === 'CHỌN GIÁ') {
                console.log(data);
                const result = price.find((item) => item.code === data);
                if (result) setPriceSelect(result.value);
            }
            if (title === 'CHỌN DIỆN TÍCH') {
                console.log(data);
                const result = area.find((item) => item.code === data);
                if (result) setAreaSelect(result.value);
            }
        },
        [categoryHome, address, priceSelect, areaSelect],
    );
    const handleSearch = () => {
        if (categoryHome !== 'Phòng trọ, Nhà trọ...') {
            alert('1');
        }
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
                        defaultText={address}
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
