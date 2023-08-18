import React from 'react';
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout';
import SearchItem from '@/components/Common/SearchItem';
import icons from '../../utils/Icons';

const { HiOutlineLocationMarker, BsChevronRight, TbReportMoney, RiCrop2Line } = icons;

const Search = () => {
    return (
        <div className="my-2 bg-[#febb02] rounded-md flex gap-3 px-3 py-3">
            <span className="cursor-pointer flex-2">
                <SearchItem
                    IconBefore={<HiOutlineLocationMarker />}
                    IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                    defaultText={'Phòng trọ, Nhà trọ'}
                    fontWeight  
                />
            </span>
            <span className="cursor-pointer flex-2">
                <SearchItem
                    IconBefore={<HiOutlineLocationMarker />}
                    IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                    defaultText={'Toàn quốc'}
                />
            </span>
            <span className="cursor-pointer flex-2">
                <SearchItem
                    IconBefore={<TbReportMoney />}
                    IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                    defaultText={'Chọn giá'}
                />
            </span>
            <span className="cursor-pointer flex-2">
                <SearchItem
                    IconBefore={<RiCrop2Line />}
                    IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                    defaultText={'Chọn diện tích'}
                />
            </span>
            <button
                type="button"
                className="outline-none py-2 px-4 flex-1 rounded-md bg-main text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
            >
                Tìm kiếm
            </button>
        </div>
    );
};

export default Search;
