import React, { ReactNode, memo } from 'react';
import { Card, Space, Typography } from 'antd';
import { FontColorsOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface SearchItemProps {
    IconBefore: ReactNode;
    IconAfter: ReactNode;
    text?: string;
    fontWeight?: boolean;
    defaultText: string;
}

const SearchItem = ({ IconBefore, IconAfter, text, fontWeight, defaultText }: SearchItemProps) => {
    return (
        <Card className="bg-white w-full" bodyStyle={{ padding: '8px 16px', display: 'flex', alignItems: 'center' }}>
            <Space align="center" style={{ width: '100%' }}>
                {IconBefore}
                <Text
                    strong={fontWeight || !!text}
                    style={{ width: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                    {text || defaultText}
                </Text>
            </Space>
            <Text>{IconAfter}</Text>
        </Card>
    );
};

export default memo(SearchItem);
