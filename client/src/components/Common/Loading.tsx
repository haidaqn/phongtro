import { Space, Spin } from 'antd';

export const Loading = () => {
    return (
        <div className="bg-[rgba(0,0,0,0.1)] flex items-center justify-center rounded-lg z-20 absolute inset-0">
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    );
};
