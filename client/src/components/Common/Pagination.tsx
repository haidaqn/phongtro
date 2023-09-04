// components/PaginationComponent.tsx
import { Pagination } from 'antd';
import { useEffect } from 'react';

interface PaginationComponentProps {
    total: number;
    pageSize: number;
    currentPage: number;
    page: number;
    setPage: (value: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ total, pageSize, currentPage, page, setPage }) => {
    const handleChangePage = (value: number) => {
        setPage(value);
    };

    useEffect(() => {
        if (page !== currentPage) {
            handleChangePage(currentPage);
        }
    }, [currentPage]);

    return <Pagination current={currentPage} total={total} pageSize={pageSize} onChange={handleChangePage} />;
};

export default PaginationComponent;
