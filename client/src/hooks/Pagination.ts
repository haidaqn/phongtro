import React, { useMemo, ReactNode } from 'react'; // Đảm bảo bạn đã thêm ReactNode vào danh sách import
import { generateRange } from '@/utils';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

interface UsePaginationProps {
    totalCountProducts: number;
    currentPage: number;
    siblingCount?: number;
    limit?: number;
}

const usePagination = ({
    totalCountProducts,
    currentPage,
    siblingCount = 1,
    limit = 4,
}: UsePaginationProps):unknown => {
    const paginationArray = useMemo(() => {
        const pageSize = limit;
        const paginationCount = Math.ceil(totalCountProducts / pageSize);
        const totalPaginationItem = siblingCount + 3;
        if (paginationCount <= totalPaginationItem)
            return generateRange(1, paginationCount);

        const isShowLeft = currentPage - siblingCount > 2;
        const isShowRight = currentPage + siblingCount < paginationCount - 1;

        if (isShowLeft && !isShowRight) {
            const rightStart = totalPaginationItem - 4;
            const rightRange = generateRange(rightStart, paginationCount);
            return [1, <BiDotsHorizontalRounded size={30} />, ...rightRange];
        }
        if (!isShowLeft && isShowRight) {
            const leftRange = generateRange(1, 5);
            return [...leftRange, <BiDotsHorizontalRounded size={30} />, paginationCount];
        }

        const siblingLeft = Math.max(currentPage - siblingCount, 1);
        const siblingRight = Math.min(currentPage + siblingCount, paginationCount);
        if (isShowLeft && isShowRight) {
            const middleRange = generateRange(siblingLeft, siblingRight);
            return [
                1,
                <BiDotsHorizontalRounded size={30} />, // Sử dụng typeof để chỉ định kiểu
                ...middleRange,
                <BiDotsHorizontalRounded size={30} />, // Sử dụng typeof để chỉ định kiểu
                paginationCount,
            ];
        }

        return [] as ReactNode[];

    }, [totalCountProducts, currentPage, siblingCount, limit]);

    return paginationArray;
};

export default usePagination;
