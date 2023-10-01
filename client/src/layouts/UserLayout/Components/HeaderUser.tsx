import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/app/hooks';

const HeaderUser = () => {
    const { category } = useAppSelector((state) => state.category);
    return (
        <div className="flex gap-3 h-[8vh] w-full bg-blue-600 items-center fixed top-0 left-0 right-0">
            <Link className="text-white font-medium text-lg flex-2 w-full flex items-center justify-center" href="/">
                <span>Phongtro123.com</span>
            </Link>
            <div className="flex-7 gap-7 flex text-lg text-white">
                <Link href={'/'}>Trang Chủ</Link>
                {category.map((item) => (
                    <Link key={item.code} href={item.code}>
                        {item.value}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HeaderUser;
