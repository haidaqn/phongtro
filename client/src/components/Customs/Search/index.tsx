import React, { useState } from 'react';
import SearchItem from '@/components/Common/SearchItem';
import icons from '../../../utils/Icons';
import Modal from '../Modal/Modal';
import { useAppSelector } from '@/app/hooks';
import { PriceAndAreaAndProvince } from '@/models';

const { HiOutlineLocationMarker, BsChevronRight, TbReportMoney, RiCrop2Line } = icons;

const Search = () => {
    const { area, price, provinces, category } = useAppSelector((state) => state.category);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState<any>([]);
    const [title, setTitle] = useState<string>('');

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
                        defaultText={'Phòng trọ, Nhà trọ...'}
                        fontWeight
                    />
                </span>
                <span className="cursor-pointer flex-2" onClick={() => handleOpenModal(provinces, 'CHỌN TỈNH THÀNH')}>
                    <SearchItem
                        IconBefore={<HiOutlineLocationMarker />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />} 
                        defaultText={'Toàn quốc'}
                    />
                </span>
                <span className="cursor-pointer flex-2" onClick={() => handleOpenModal(price, 'CHỌN GIÁ')}>
                    <SearchItem
                        IconBefore={<TbReportMoney />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        defaultText={'Chọn giá'}
                    />
                </span>
                <span className="cursor-pointer flex-2" onClick={() => handleOpenModal(area, 'CHỌN DIỆN TÍCH')}>
                    <SearchItem
                        IconBefore={<RiCrop2Line />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        defaultText={'Chọn diện tích'}
                    />
                </span>
                <button
                    type="button"
                    onClick={() => alert('tìm kiếm')}
                    className="outline-none py-2 px-4 flex-1 rounded-md bg-main text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
                >
                    Tìm kiếm
                </button>
            </div>
            {isModalVisible && (
                <Modal visible={isModalVisible} onClose={handleCloseModal} modalData={modalData} title={title} />
            )}
        </>
    );
};

export default Search;
