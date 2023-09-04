import React from 'react';
import { Button } from 'antd';

interface ReusableButtonProps {
    onClick: () => void;
    label: string;
    type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link';
    icon?: React.ReactNode;
    loading?: boolean;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ onClick, label, type = 'default', icon, loading = false }) => {
    return (
        <Button icon={icon} onClick={onClick} loading={loading}>
            {label}
        </Button>
    );
};

export default ReusableButton;
