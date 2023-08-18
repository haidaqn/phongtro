import React from 'react';
import logo from '@/assets/logo-phongtro.svg';
import Image from 'next/image';
import Link from 'next/link';
import icon_face from '@/assets/icons/icon_facebook.svg';
import icon_youtube from '@/assets/icons/icon_youtube.svg';
import icon_tw from '@/assets/icons/icon_twitter.svg';
import icon_zalo from '@/assets/icons/icon_zalo.svg';

const FooterPanner = () => {
    return (
        <div className="flex justify-between w-full gap-10">
            <div className="flex-1 flex flex-col gap-2">
                <Link href="/" className="mb-4">
                    <Image src={logo} alt="Picture of the author" />
                </Link>
                Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng trọ.
            </div>
            <div className="flex-2 flex gap-8">
                <div className="flex-1">
                    <h1 className="text-base font-semibold">Về PHONGTRO123.COM</h1>
                    <ul className="flex gap-2 flex-col">
                        <li>Trang chủ</li>
                        <li>Giới thiệu</li>
                        <li>Blog</li>
                        <li>Quy chế hoạt động</li>
                        <li>Quy định sử dụng</li>
                        <li>Chính sách bảo mật</li>
                        <li>Liên hệ</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h1 className="text-base font-semibold">Hỗ trợ khách hàng</h1>
                    <ul className="flex gap-2 flex-col">
                        <li>Câu hỏi thường gặp</li>
                        <li>Hướng dẫn đăng tin</li>
                        <li>Bảng giá dịch vụ</li>
                        <li>Quy định đăng tin</li>
                        <li>Giải quyết khiếu nại</li>
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                <div className="mb-3">
                    <h1 className="text-base font-semibold mb-2">Liên hệ với chúng tôi</h1>
                    <div className="flex gap-1">
                        <Image src={icon_face} alt="Picture of the author" style={{ width: '35px', height: '35px' }} />
                        <Image
                            src={icon_youtube}
                            alt="Picture of the author"
                            style={{ width: '35px', height: '35px' }}
                        />
                        <Image src={icon_tw} alt="Picture of the author" style={{ width: '35px', height: '35px' }} />
                        <Image src={icon_zalo} alt="Picture of the author" style={{ width: '35px', height: '35px' }} />
                    </div>
                </div>
                <div className="">
                    <h1 className="text-base font-semibold mb-2">Phương thức thanh toán</h1>
                    <div className="flex gap-1">
                        <Image src={icon_face} alt="Picture of the author" style={{ width: '35px', height: '35px' }} />
                        <Image
                            src={icon_youtube}
                            alt="Picture of the author"
                            style={{ width: '35px', height: '35px' }}
                        />
                        <Image src={icon_tw} alt="Picture of the author" style={{ width: '35px', height: '35px' }} />
                        <Image src={icon_zalo} alt="Picture of the author" style={{ width: '35px', height: '35px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterPanner;
