import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import logo from '@/assets/logo-phongtro.svg';
import * as actions from '@/features/Post/postAction';
import { authActions } from '@/features/auth/AuthSlice';
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout';
import { Category } from '@/models';
import { LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

export interface propsData {
    category: Category[];
}
const { Text } = Typography;

const FixedTopHeader = (props: propsData) => {
    const { category } = props;
    const { enqueueSnackbar } = useSnackbar();
    const categoryCode: string | null = useAppSelector((state) => state.post.type.categoryCode);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const name = useAppSelector((state: RootState) => state.auth.currentUser?.name);
    const [scrollY, setScrollY] = useState<number>(0);

    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            enqueueSnackbar('Đăng xuất thành công !', {
                variant: 'success',
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handle = (code: string): void => {
        dispatch(
            actions.getPostLimit({
                query: {
                    page: 0,
                    categoryCode: code,
                },
            }),
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menu = (
        <Menu className="absolute top-1 z-10 w-full rounded-md bg-gray-100 space-y-1">
            <Menu.Item className="border-b " key="1">
                Đăng tin
            </Menu.Item>
            <Menu.Item className="border-b " key="2">
                Quản lý tin
            </Menu.Item>
            <Menu.Item className="border-b " key="3">
                Nạp tiền
            </Menu.Item>
            <Menu.Item className="border-b " key="4">
                Lịch sử nạp tiền
            </Menu.Item>
            <Menu.Item className="border-b " key="5">
                <Link href="/user/userInfo">Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item className="border-b " key="6">
                Tin đã lưu
            </Menu.Item>
            <Menu.Item onClick={() => handleLogout()} className="border-b " key="7">
                Đăng xuất
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="">
            <EmptyLayout>
                <div className="my-3 flex justify-between">
                    <Link href="/">
                        <Image src={logo} alt="Picture of the author" />
                    </Link>
                    <div className="flex gap-4 justify-center items-center">
                        {name ? (
                            <>
                                <Text className="text-lg font-semibold">Xin chào, {name}</Text>
                                <div className="relative">
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <Button className="flex justify-center items-center bg-main h-10 text-white text-lg px-5 py-3 hover:opacity-90">
                                            Quản lý tài khoản
                                        </Button>
                                    </Dropdown>
                                </div>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={() => router.push('/auth/login')}
                                    className="flex justify-center items-center bg-main h-10 text-white text-lg px-5 py-3 hover:opacity-90"
                                >
                                    <UserAddOutlined style={{ fontSize: '22px' }} />
                                    Đăng Nhập
                                </Button>
                                <Button
                                    onClick={() => router.push('/auth/register')}
                                    className="flex justify-center items-center bg-main h-10 text-white text-lg px-5 py-3 hover:opacity-90"
                                >
                                    <LogoutOutlined style={{ fontSize: '22px' }} />
                                    Đăng Ký
                                </Button>
                            </>
                        )}
                        <Button
                            onClick={() => router.push('/user/newPost')}
                            className="flex justify-center items-center bg-[#f73859] h-10 text-white text-lg px-5 py-3 hover:opacity-90"
                        >
                            Đăng Tin Mới
                        </Button>
                    </div>
                </div>
            </EmptyLayout>
            <div className={`bg-blue-600 w-full h-[40px] z-50 ${scrollY >= 60 && 'fixed top-0 right-0 left-0'}}`}>
                <div className="flex items-center h-full text-white text-base font-medium ml-[10%]">
                    <Link
                        href={'/'}
                        className={`${router.pathname === `${categoryCode}/` ? 'bg-red-500' : 'hover:bg-red-500'}
                h-full flex justify-center items-center px-3 py-1`}
                    >
                        Trang Chủ
                    </Link>
                    {category.map((item) => (
                        <Link
                            onClick={() => handle(item.code)}
                            key={item.code}
                            href={item.code}
                            className={`${item.code === `${categoryCode}` ? 'bg-red-500' : 'hover:bg-red-500'}
                h-full flex justify-center items-center px-3 py-1`}
                        >
                            {item.value}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FixedTopHeader;
