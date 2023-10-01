import UserLayout from '@/layouts/UserLayout/UserLayout';
import { Typography } from 'antd';
const { Text, Title, Paragraph } = Typography;

const cast = () => {
    return (
        <UserLayout>
            <div className="mt-4">
                <Title level={3}>ƯU ĐIỂM PHONGTRO123:</Title>
                <ul className="list-disc list-inside">
                    <li>Top đầu google về từ khóa: cho thuê phòng trọ, thuê phòng trọ...</li>
                    <li>Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực...</li>
                    <li>Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực...</li>
                    <li>Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực...</li>
                    <li>Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực...</li>
                </ul>
            </div>
        </UserLayout>
    );
};

export default cast;
