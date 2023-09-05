import React from 'react';
import icons from '@/utils/Icons';
import { Button } from 'antd';

const { AiFillStar } = icons;

const FooterContent = () => {
    return (
        <div className="flex-col gap-5 border rounded-lg bg-white py-[30px] px-[70px] flex items-center justify-center flex-col">
            <h1 className="font-bold text-xl">Tại sao lại chọn PhongTro123.com?</h1>
            <p className="text-center">
                Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào là trang web đứng top google về
                các từ khóa: cho thuê phòng trọ, nhà trọ, thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép, cho
                thuê mặt bằng...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó
                giao dịch nhanh hơn, tiết kiệm chi phí hơn
            </p>
            <div className="flex gap-3 items-center justify-around w-full">
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-xl font-semibold">116.998+</h4>
                    <p>Thành viên</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-xl font-semibold">103.348+</h4>
                    <p>Tin đăng</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-xl font-semibold">300.000+</h4>
                    <p>Lượt truy cập/tháng</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-xl font-semibold">2.500.000+</h4>
                    <p>Lượt xem/tháng</p>
                </div>
            </div>
            <h1 className="font-bold text-xl">Chi phí thấp, hiệu quả tối đa</h1>
            <span className="flex gap-2">
                <AiFillStar size={22} color="orange" />
                <AiFillStar size={22} color="orange" />
                <AiFillStar size={22} color="orange" />
                <AiFillStar size={22} color="orange" />
                <AiFillStar size={22} color="orange" />
            </span>
            <p className="text-center">
                "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho thuê:
                từ việc phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết
                website phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao trong khi chi phí khá
                thấp, không còn tình trạng phòng trống kéo dài."
            </p>
            <p>Anh Đăng (Chủ hệ thống phòng trọ clone tại Hà Nội)</p>
            <h1 className="font-bold text-xl">Bạn đang có phòng trọ / căn hộ cho thuê?</h1>
            <p>Không phải lo tìm người cho thuê, phòng trống kéo dài</p>
            <Button
                style={{ backgroundColor: '#f73859', color: 'white', border: '#f73859' }}
                className="flex justify-center items-center h-10 text-lg px-5 py-3 hover:opacity-80"
            >
                Đăng Tin Mới
            </Button>
        </div>
    );
};

export default FooterContent;
