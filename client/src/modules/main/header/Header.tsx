import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '@/assets/logo-phongtro.svg';
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout';
import { HeartOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { items } from '@/utils/Contants';

const FixedTopHeader: React.FC = () => {
  const router = useRouter();

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

  return (
    <div className="">
      <EmptyLayout>
        <div className="my-3 flex justify-between">
          <Link href="/">
            <Image src={logo} alt="Picture of the author" />
          </Link>
          <div className="flex gap-4 justify-center items-center">
            <span className='cursor-pointer text-center flex items-center justify-center gap-2'><HeartOutlined style={{ fontSize: '22px'}}/>Yêu Thích</span>
            <span className='cursor-pointer text-center flex items-center justify-center gap-2'><UserAddOutlined style={{ fontSize: '22px'}}/>Đăng Nhập</span>
            <span className='cursor-pointer text-center flex items-center justify-center gap-2'><LogoutOutlined style={{ fontSize: '22px'}}/>Đăng Ký</span>
            <span className='cursor-pointer bg-[#f73859] text-white p-2 rounded-md'>Đăng Tin Mới</span>
          </div>
        </div>
      </EmptyLayout>
      <div className={`bg-blue-600 w-full h-[40px] ${scrollY >= 60 && 'fixed top-0 right-0 left-0 z-10'}}`}>
        <div className="flex items-center h-full text-white text-base font-medium ml-[10%]">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.key}
              className={`${
                router.pathname === item.key
                  ? 'bg-red-500'
                  : 'hover:bg-red-500'
                }
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
