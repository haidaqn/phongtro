import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'
import logo from '@/assets/logo-phongtro.svg';
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout';
import { HeartOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';

interface MenuItem {
  label: string;
  key: string;
}

const items: MenuItem[] = [
  {
    label: 'Trang chủ',
    key: '/'
  },
  {
    label: 'Cho thuê phòng trọ',
    key: 'cho-thue-phong-tro',
  },
  {
    label: 'Nhà cho thuê',
    key: 'nha-cho-thue'
  },
  {
    label: 'Căn hộ cho thuê',
    key: 'can-ho-cho-thue'
  },
  {
    label: 'Cho thuê mặt bằng',
    key: 'cho-thue-mat-bang'
  },
  {
    label: 'Tìm người ở ghép',
    key: 'tim-nguoi-o-ghep'
  },
  {
    label: 'Tin tức',
    key: 'tin-tuc'
  },
  {
    label: 'Bảng giá dịch vụ',
    key: 'bang-gia-dich-vu'
  }
];

const CustomHeader: React.FC = () => {

  const router = useRouter();

  return (
    
    <div className="">
      <EmptyLayout>
        <div className="my-3 flex justify-between">
            <Link href="/">
              <Image
              src={logo}
              alt="Picture of the author"
              />
            </Link>
            <div className="flex gap-4 justify-center items-center">
              <span className='cursor-pointer text-center flex items-center justify-center gap-2'><HeartOutlined style={{ fontSize: '22px'}}/>Yêu Thích</span>
              <span className='cursor-pointer text-center flex items-center justify-center gap-2'><UserAddOutlined style={{ fontSize: '22px'}}/>Đăng Nhập</span>
              <span className='cursor-pointer text-center flex items-center justify-center gap-2'><LogoutOutlined style={{ fontSize: '22px'}}/>Đăng Ký</span>
              <span className='cursor-pointer bg-[#f73859] text-white p-2 rounded-md'>Đăng Tin Mới</span>
            </div>
        </div>
      </EmptyLayout>
      <div className="bg-blue-600 w-full h-[40px]">
          <div className="flex items-center h-full text-white font-medium ml-[10%]">
            {items.map((item) => (
              <Link key={item.key} href={item.key} className={`${router.pathname === item.key ? 'bg-red-500' : 'hover:bg-red-500'} h-full flex justify-center items-center px-3 py-1`}>
                  {item.label}
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
};

export default CustomHeader;
