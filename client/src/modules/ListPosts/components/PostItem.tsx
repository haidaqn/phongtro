import { Post } from '@/models/Post';
import * as React from 'react';
import img_user from '@/assets/user/Default_user.png';

interface propsData {
    data: Post;
}
const PostItem = (props: propsData) => {
    const { data } = props;
    const img = JSON.parse(data.images.image);
    const description = JSON.parse(data.description);

  

    return (
        <div className="border-t-[1px] py-4 flex gap-3">
            <img
                src={img[0]}
                alt="Picture of the author"
                className="flex-1 h-[220px] w-[220px] object-contain rounded-md"
            />
            <div className="flex flex-col flex-3 gap-4 ">
                <h1 className="cursor-pointer text-main text-lg font-semibold">{data.title}</h1>
                <div className="flex gap-8 items-center text-lg">
                    <span>{data.attributes.price}</span>
                    <span>{data.attributes.acreage}</span>
                    <span>
                        {`${data.address.split(',')[data.address.split(',').length - 2]}${
                            data.address.split(',')[data.address.split(',').length - 1]
                        }`}
                    </span>
                </div>
                <span className="text-gray-500 w-full  text-ellipsis">{description.slice(0, 3)}</span>
                <div className="flex justify-between items-center ">
                    <div className="flex gap-3 items-center ">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                            alt=""
                            className="w-10 h-10"
                        />
                        <span className="text-lg font-medium">{data.user.name}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-lg">
                        <span className=" font-medium cursor-pointer bg-main py-1 px-2 rounded-sm text-white">
                            {data.user.phone}
                        </span>
                        <span className="font-medium cursor-pointer bg-white py-1 px-2 rounded-sm text-main border-main border">
                            Nhắn tin zalo
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
