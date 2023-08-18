import { Post } from '@/models/Post'
import * as React from 'react'

interface propsData {
    data : Post
}

const img = 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/366889364_1691964134605760_835912844914180400_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=be3454&_nc_ohc=60UhM2pQnnsAX84XcOs&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDSsB_6Ynhau14od-XMSqiBLraUv2vtBTwLYbOj8lNg-g&oe=64DDC9C6';


const PostItem = (props: propsData) => {

    const { data } = props;    return (
        <div className='border-t-[1px] py-4 flex gap-3'>
            <img src={img} alt="Picture of the author" className='w-40 h-40 rounded-md'/>
            <div className="flex flex-col gap-4 ">
                <h1 className="cursor-pointer text-main text-lg font-semibold">Cho thue cua hang tai Le van Luong</h1>
                <div className="flex gap-3 justify-between w-3/5">
                    <span>3.8 triệu/tháng</span>
                    <span>20m²</span>
                    <span>Quận Tân Bình, Hồ Chí Minh</span>
                </div>
                <span>Lưu ý phòng giống hình nhưng k có cửa sổĐịa chỉ : Bình Giã Tân Bình - Ngay cầu Cộng Hoà,chợ Phạm Văn Hai,...- Full nội thất thang máy,hầm xe,tủ…</span>
                <span>Phạm Duy Quang</span>
            </div>
        </div>
    )
}

export default PostItem