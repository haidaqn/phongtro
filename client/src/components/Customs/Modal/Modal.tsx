import React, { memo, useEffect, useRef, useState } from 'react';
import { Modal, Button, Radio } from 'antd';
import { PriceAndAreaAndProvince } from '@/models'; // Thay đổi đường dẫn

interface ModalCustomProps {
    visible: boolean;
    onClose: () => void;
    modalData: PriceAndAreaAndProvince[];
    title: string;
    handleSelect: (data: string, title: string) => void;
}

const ModalCustom: React.FC<ModalCustomProps> = ({ visible, onClose, modalData, title, handleSelect }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>();

    const handleOk = () => {
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    const handleSelectModal = () => {
        if (selectedValue) handleSelect(selectedValue, title);
        onClose();
    };

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <div>
            <Modal
                title={title}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel} className="hidden">
                        Hủy
                    </Button>,
                    <Button key="ok" type="primary" onClick={handleOk} className="hidden">
                        OK
                    </Button>,
                ]}
            >
                {modalData && (
                    <div>
                        <Radio.Group
                            className={`${
                                title === 'CHỌN DIỆN TÍCH' || title === 'CHỌN GIÁ' ? '' : 'flex flex-col gap-3 '
                            }`}
                            onChange={(e) => handleChange(e.target.value)}
                            value={selectedValue}
                        >
                            {modalData.map((option: { value: string; code: string }) => (
                                <Radio
                                    key={option.code}
                                    value={option.code}
                                    className={`${
                                        title === 'CHỌN DIỆN TÍCH' || title === 'CHỌN GIÁ'
                                            ? 'inline-block bg-gray-100 mr-2 mb-2 px-1 py-1 rounded-md text-black'
                                            : 'border-b'
                                    } text-lg`}
                                >
                                    {option.value}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </div>
                )}
                <div
                    onClick={() => handleSelectModal()}
                    className="mt-3 w-full text-center border border-red-300 py-1 rounded-md bg-red-300 cursor-pointer hover:opacity-90"
                >
                    <span className="uppercase text-base font-medium">áp dụng</span>
                </div>
            </Modal>
        </div>
    );
};

export default memo(ModalCustom);
