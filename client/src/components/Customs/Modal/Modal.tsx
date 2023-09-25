import React, { memo, useEffect, useRef, useState } from 'react';
import { Modal, Button, Radio } from 'antd';
import { PriceAndAreaAndProvince } from '@/models'; // Thay đổi đường dẫn

interface ModalCustomProps {
    visible: boolean;
    onClose: () => void;
    modalData: PriceAndAreaAndProvince[];
    title: string;
}

const ModalCustom: React.FC<ModalCustomProps> = ({ visible, onClose, modalData, title }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>();
    const [currentLeft, setCurrentLeft] = useState<number>(0);
    const [currentRight, setCurrentRight] = useState<number>(100);

    const ref = useRef<HTMLDivElement | null>(null);

    const handleOk = () => {
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };
    useEffect(() => {
        if (ref.current) {
            ref.current.style.left = `${currentLeft}%`;
        }
    }, [currentLeft]);

    useEffect(() => {
        if (ref.current) {
            ref.current.style.right = `${100 - currentRight}%`;
        }
    }, [currentRight]);

    return (
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
            {(title === 'CHỌN DIỆN TÍCH' || title === 'CHỌN GIÁ') && (
                <div className="flex items-center justify-center w-full relative my-8 ">
                    <div className=" h-[8px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full"></div>
                    <div ref={ref} className=" h-[8px] absolute top-0 bottom-0 w-full bg-orange-600 rounded-full"></div>
                    <input
                        max="100"
                        min="0"
                        value={currentLeft}
                        onChange={(e) => setCurrentLeft(+e.target.value)}
                        step={5}
                        className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                        type="range"
                    />
                    <input
                        max="100"
                        min="0"
                        value={currentRight}
                        onChange={(e) => setCurrentRight(+e.target.value)}
                        step={5}
                        className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                        type="range"
                    />
                </div>
            )}
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
        </Modal>
    );
};

export default memo(ModalCustom);
