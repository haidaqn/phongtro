import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import logo from '@/assets/logo-phongtro.svg';
import * as actions from '@/features/Post/postAction';
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout';
import { Category } from '@/models';
import { LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { authActions } from '@/features/auth/AuthSlice';
import { useSnackbar } from 'notistack';
import { useInforUser } from '@/hooks';

export interface propsData {
    category: Category[];
}

const FixedTopHeader = (props: propsData) => {
    const { category } = props;
    const { enqueueSnackbar } = useSnackbar();
    const user = useInforUser();
    const categoryCode: string | null = useAppSelector((state) => state.post.type.categoryCode);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const actionAuth = useAppSelector((state: RootState) => state.auth.actionAuth);
    const name = useAppSelector((state: RootState) => state.auth.currentUser?.name);
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
                                <span className="text-lg font-semibold">Xin chào, {name}</span>
                                <Button
                                    onClick={() => handleLogout()}
                                    className="flex justify-center items-center bg-main h-10 text-white text-lg px-5 py-3 hover:opacity-90"
                                >
                                    Đăng Xuất
                                </Button>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                        <Button
                            // onClick={() => router.push('/dang-tin-moi')}
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
