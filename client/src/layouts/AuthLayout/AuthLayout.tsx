import { LayoutProps } from '@/models/common';
import CustomHeader from '@/modules/main/header/Header';
import Footer from '@/modules/main/footer/Footer';
import { Layout } from 'antd';
import { useAppSelector } from '@/app/hooks';

const { Content } = Layout;

const AuthLayout = ({ children }: LayoutProps): JSX.Element => {
    const { category } = useAppSelector(state => state.category);

    return (
        <Layout style={{ width: 'full' }}>
            <CustomHeader category={category} />
            <Layout>
                <Content style={{ marginTop: '10px', marginLeft: '10%', marginRight: '10%', overflow: 'hidden' }}>
                    {children}
                </Content>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default AuthLayout;
