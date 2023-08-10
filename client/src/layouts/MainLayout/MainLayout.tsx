import { LayoutProps } from '@/models/common';
import CustomHeader from '@/modules/main/header/Header';
import Footer from '@/modules/main/footer/Footer';
import { Layout } from 'antd';

const { Content } = Layout;

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <Layout style={{ width: 'full' }}>
            <CustomHeader />
            <Layout>
                <Content style={{ marginTop: '10px', marginLeft: '10%', marginRight: '10%', overflow: 'hidden' }}>
                    {children}
                </Content>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
