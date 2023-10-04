import { useAppDispatch } from '@/app/hooks';
import { authActions } from '@/features/auth/AuthSlice';
import { LayoutProps } from '@/models/common';
import {
    AuditOutlined,
    FormOutlined,
    LogoutOutlined,
    MenuUnfoldOutlined,
    PhoneOutlined,
    TagsOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, MenuProps, Typography, theme } from 'antd';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useEffect, useState } from 'react';
const { Content, Sider } = Layout;
const { Text } = Typography;
const DynamicComponent = dynamic(() => import('./Components/HeaderUser'), { ssr: false });
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    style?: React.CSSProperties,
    children?: MenuItem[] | null,
): MenuItem {
    return {
        key,
        icon,
        style,
        children,
        label,
    } as MenuItem;
}

const ListMenuItem: MenuProps['items'] = [
    getItem('Đăng tin cho thuê', 'newPost', <TagsOutlined style={{ fontSize: 18 }} />, { fontSize: 16 }),
    getItem('Quản lý tin đăng', 'posts', <MenuUnfoldOutlined style={{ fontSize: 18 }} />, { fontSize: 16 }),
    getItem('Sửa thông tin cá nhân', 'userInfo', <FormOutlined style={{ fontSize: 18 }} />, { fontSize: 16 }),
    getItem('Bảng giá dịch vụ', 'cast', <AuditOutlined style={{ fontSize: 18 }} />, { fontSize: 16 }),
    getItem('Liên hệ', 'contact', <PhoneOutlined style={{ fontSize: 18 }} />, { fontSize: 16 }),
    getItem('Thoát', '/logout', <LogoutOutlined style={{ fontSize: 18 }} />, { fontSize: 16 }),
];

const UserLayout = ({ children }: LayoutProps): JSX.Element => {
    const [selectedKeyMenu, setSelectedKeyMenu] = useState<string[]>(['/userInfo']);
    const [titleSelect, setTitleSelect] = useState<string>('Sửa thông tin cá nhân');
    const router = useRouter();
    const currentPathname = router.pathname;
    const dispatch = useAppDispatch();
    const { token } = theme.useToken();
    const { enqueueSnackbar } = useSnackbar();

    const handleClickMenu = (value: MenuInfo) => {
        if (value.key !== selectedKeyMenu[0]) {
            if (value.key !== '/logout') {
                router.push({ pathname: `/user/${value.key}` });
            } else {
                dispatch(authActions.logout());
                enqueueSnackbar('Đăng xuất thành công !', {
                    variant: 'success',
                });
                router.push('/');
            }
        }
    };
    useEffect(() => {
        let res: string[] = ['/userInfo'];
        let newTitleSelect: string = 'Sửa thông tin cá nhân';
        if (currentPathname.includes('/posts')) {
            res = ['posts'];
            newTitleSelect = 'Quản lý tin đăng';
        } else if (currentPathname.includes('/userInfo')) {
            res = ['userInfo'];
            newTitleSelect = 'Sửa thông tin cá nhân';
        } else if (currentPathname.includes('/newPost')) {
            res = ['newPost'];
            newTitleSelect = 'Đăng tin cho thuê';
        } else if (currentPathname.includes('/cast')) {
            res = ['cast'];
            newTitleSelect = 'Bảng giá dịch vụ';
        } else if (currentPathname.includes('/contact')) {
            res = ['contact'];
            newTitleSelect = 'Liên hệ';
        }
        setSelectedKeyMenu(res);
        setTitleSelect(newTitleSelect);
    }, [currentPathname]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <DynamicComponent />
            <Layout>
                <Sider
                    theme="light"
                    width={300}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: '8vh',
                        bottom: 0,
                        zIndex: 100,
                        boxShadow:
                            '0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    }}
                >
                    <Menu
                        style={{ marginTop: '15px' }}
                        selectedKeys={selectedKeyMenu}
                        items={ListMenuItem}
                        onClick={handleClickMenu}
                    />
                </Sider>
                <Layout style={{ marginLeft: '300px' }}>
                    <Content
                        style={{
                            paddingTop: '75px',
                            paddingLeft: '24px',
                            paddingRight: '24px',
                            minHeight: '280px',
                        }}
                    >
                        <Breadcrumb
                            items={[
                                {
                                    title: (
                                        <Link href="/" style={{ fontWeight: 500, color: token.colorPrimary }}>
                                            Trang chủ
                                        </Link>
                                    ),
                                },
                                {
                                    title: <Text style={{ fontWeight: 500, color: token.colorPrimary }}>Cá nhân</Text>,
                                },
                                {
                                    title: (
                                        <Text style={{ fontWeight: 500, color: token.colorPrimary }}>
                                            {titleSelect}
                                        </Text>
                                    ),
                                },
                            ]}
                            style={{
                                fontSize: '16px',
                                display: 'flex',
                                alignContent: 'center',
                                marginBottom: '24px',
                            }}
                        />
                        <Layout
                            style={{
                                minHeight: '500px',
                                borderRadius: '12px',
                                width: '100%',
                                backgroundColor: 'white',
                                padding: '24px',
                                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                marginBottom: '20px',
                            }}
                        >
                            {children}
                        </Layout>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default UserLayout;
// export default dynamic(() => Promise.resolve(UserLayout), { ssr: false });
