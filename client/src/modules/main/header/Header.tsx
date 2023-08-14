import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '@/assets/logo-phongtro.svg';
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout';
import { HeartOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { items } from '@/utils/Contants';
import { Button } from 'antd';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { RootState } from '@/app/store';
import { setData, setIsLoggedIn } from '@/features/useSlice';

const FixedTopHeader: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector<boolean>((state: RootState) => state.user.isLoggedIn);
    const data = useAppSelector<{name : string, phone : string}>((state: RootState) => state.user.data);
    const [scrollY, setScrollY] = useState<number>(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        dispatch(setData({ name: '', phone: '' }));
        dispatch(setIsLoggedIn(false));
    }

    // console.log(isLoggedIn);

    return (
        <div className="">
            <EmptyLayout>
                <div className="my-3 flex justify-between">
                    <Link href="/">
                        <Image src={logo} alt="Picture of the author" />
                    </Link>
                    <div className="flex gap-4 justify-center items-center">
                        
                        {isLoggedIn ? <>{data?.name}
                            <Button
                            onClick={() => handleLogout()}
                            className="flex justify-center items-center bg-main h-10 text-white text-lg px-5 py-3 hover:opacity-90"
                        >
                                {/* <UserAddOutlined style={{ fontSize: '22px' }} /> */}
                                Đăng Xuất
                        </Button>
                        </> : <>

                            <Button
                            onClick={() => router.push('/auth/login')}
                            className="flex justify-center items-center bg-main h-10 text-white text-lg px-5 py-3 hover:opacity-90"
                        >
                            <UserAddOutlined style={{ fontSize: '22px' }} /> Đăng Nhập
                        </Button>
                        <Button
                            onClick={() => router.push('/auth/register')}
                            className="flex justify-center items-center bg-main h-10 text-white text-lg px-5 py-3 hover:opacity-90"
                        >
                            <LogoutOutlined style={{ fontSize: '22px' }} /> Đăng Ký
                        </Button>
                        </>}
                        <Button
                            onClick={() => router.push('/dang-tin-moi')}
                            className="flex justify-center items-center bg-[#f73859] h-10 text-white text-lg px-5 py-3 hover:opacity-90"
                        >
                            Đăng Tin Mới
                        </Button>
                    </div>
                </div>
            </EmptyLayout>
            <div className={`bg-blue-600 w-full h-[40px] z-50 ${scrollY >= 60 && 'fixed top-0 right-0 left-0'}}`}>
                <div className="flex items-center h-full text-white text-base font-medium ml-[10%]">
                    {items.map((item) => (
                        <Link
                            key={item.key}
                            href={item.key}
                            className={`${router.pathname === item.key ? 'bg-red-500' : 'hover:bg-red-500'}
                h-full flex justify-center items-center px-3 py-1`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FixedTopHeader;
