import React from 'react';
import logo from '@/assets/footer/support-bg.jpg';
import { Card } from 'antd';

const FooterSupport = () => {
    return (
        <div className="border flex flex-col gap-3 rounded-lg h-full bg-white py-[30px] px-[70px] flex items-center justify-center flex-col">
            <img className="h-1/2 w-1/2" src="https://phongtro123.com/images/support-bg.jpg" alt="Mô tả hình ảnh" />
            <p>Liên hệ với chúng tôi nếu bạn cần hỗ trợ:</p>
            <div className="flex gap-3 items-center justify-around w-full uppercase">
                <div className="flex flex-col font-semibold justify-center gap-1 items-center">
                    <h4 className="text-xl text-orange-600 font-semibold">HỖ TRỢ ĐĂNG TIN</h4>
                    <p className="text-[#1266dd]">Điện thoại: 0902657123</p>
                    <p className="text-[#1266dd]">Zalo: 0902657123 </p>
                </div>
                <div className="flex flex-col font-semibold justify-center gap-1 items-center">
                    <h4 className="text-xl text-orange-600 font-semibold">HỖ TRỢ ĐĂNG TIN</h4>
                    <p className="text-[#1266dd]">Điện thoại: 0902657123</p>
                    <p className="text-[#1266dd]">Zalo: 0902657123 </p>
                </div>
                <div className="flex flex-col font-semibold justify-center gap-1 items-center">
                    <h4 className="text-xl text-orange-600 font-semibold">HỖ TRỢ ĐĂNG TIN</h4>
                    <p className="text-[#1266dd]">Điện thoại: 0902657123</p>
                    <p className="text-[#1266dd]">Zalo: 0902657123 </p>
                </div>
                <div className="flex flex-col font-semibold justify-center gap-1 items-center">
                    <h4 className="text-xl text-orange-600 font-semibold">PHẢN ÁNH/KHIẾU NẠI</h4>
                    <p className="text-[#1266dd]">Điện thoại: 0902657123</p>
                    <p className="text-[#1266dd]">Zalo: 0902657123 </p>
                </div>
            </div>
        </div>
    );
};

export default FooterSupport;
