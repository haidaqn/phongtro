import UserLayout from '@/layouts/UserLayout/UserLayout';
import { CustomInput } from '@/components/Common';
import { Button, Typography } from 'antd';

const { Text } = Typography;

const contact = () => {
    return (
        <UserLayout>
            <div className="flex gap-5 p-5">
                <div className="flex-1 text-white rounded-lg p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500">
                    <span className="text-lg ">Thông tin liên hệ</span>
                    <ul className="flex-col flex gap-2 ">
                        <li>
                            Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa chọn PhongTro123.Com
                        </li>
                        <li>
                            <Text className="text-white font-medium">Điện thoại:</Text> 0917 686 101
                        </li>
                        <li>
                            <Text className="text-white font-medium">Email:</Text> cskh.phongtro123@gmail.com
                        </li>
                        <li>
                            <Text className="text-white font-medium">Zalo:</Text> 0917 686 101
                        </li>
                        <li>
                            <Text className="text-white font-medium">Viber:</Text> 0917 686 101
                        </li>
                        <li>
                            <Text className="text-white font-medium">Địa chỉ:</Text>
                            LD - 02.06, Toà nhà Lexington Residence, Số 67 Mai Chí Thọ, Phường An Phú, Quận 2, Tp. Hồ
                            Chí Minh.
                        </li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-col gap-3 p-3 bg-gray-100 rounded-lg">
                    <Text className="text-xl font-medium"> Liên hệ trực tuyến </Text>
                    <CustomInput label="Họ tên của bạn" placeholder="VD: Hải Đăng" type="text" />
                    <CustomInput label="SỐ ĐIỆN THOẠI" placeholder="VD:03123..." type="text" />
                    <Button className="bg-blue-600 text-white text-lg font-semibold py-2 flex items-center justify-center">
                        Gửi Liên Hệ
                    </Button>
                </div>
            </div>
        </UserLayout>
    );
};

export default contact;
