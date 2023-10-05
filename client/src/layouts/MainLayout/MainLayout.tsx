import * as React from 'react';
import { LayoutProps } from '@/models/common';
import CustomHeader from '@/modules/main/header/Header';
import Footer from '@/modules/main/footer/Footer';
import Search from '@/components/Customs/Search';
import { Layout } from 'antd';
import SlideBar from '@/modules/SlideBar';
import Breadcrumbs from '@/components/Customs/Breadcrumbs';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { getCategories, getPrice, getArea, getProvinces } from '@/features/Category/categoryActions';
import authApi from '@/apiClient/auth';

const { Content } = Layout;

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getCategories());
        dispatch(getPrice());
        dispatch(getArea());
        dispatch(getProvinces());
    }, []);

    const { category, area, price, provinces } = useAppSelector((state) => state.category);

    return (
        <Layout style={{ width: 'full' }}>
            <CustomHeader category={category} />
            <Layout>
                <Content style={{ marginTop: '10px', marginLeft: '10%', marginRight: '10%', overflow: 'hidden' }}>
                    <Search />
                    <h1 className="text-2xl font-bold">Kênh thông tin Phòng Trọ số 1 Việt Nam</h1>
                    <Breadcrumbs />
                    <div className="flex gap-5 mt-3">
                        <div className="flex-3 rounded-md border-[1px] py-2 px-5 bg-white">
                            <h1 className="text-xl font-bold my-2">Danh sách tin đăng</h1>
                            {children}
                        </div>
                        <div className="flex-1 items-center justify-center">
                            <SlideBar category={category} price={price} area={area} provinces={provinces} />
                        </div>
                    </div>
                </Content>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
