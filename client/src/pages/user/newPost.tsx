import UserLayout from '@/layouts/UserLayout/UserLayout';
import { Breadcrumb, Layout, Menu, MenuProps, Typography, theme } from 'antd';
const { Content, Sider } = Layout;
const { Text, Title } = Typography;
import Address from '@/modules/Post/Address';

const newPost = () => {
    return (
        <UserLayout>
            <div className="flex gap-5">
                <div className="flex-2 flex flex-col gap-2">
                    <Title level={3}>Địa chỉ cho thuê:</Title>
                    <Address />
                </div>
                <div className="flex-1 border"></div>
            </div>
        </UserLayout>
    );
};

export default newPost;
