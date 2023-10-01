import { Card, Space, Typography } from 'antd';
import { ReactNode, memo } from 'react';

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
        <Card className="bg-white w-full" bodyStyle={{ padding: '8px 16px' }}>
            <div className="flex items-center justify-center gap-2">
                <Space align="center" style={{ width: '100%' }}>
                    {IconBefore}
                    <Text
                        strong={fontWeight || !!text}
                        style={{ width: '10vw', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                        {text || defaultText}
                    </Text>
                </Space>
                <Text>{IconAfter}</Text>
            </div>
        </Card>
    );
};

export default memo(SearchItem);
