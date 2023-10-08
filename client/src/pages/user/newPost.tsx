import UserLayout from '@/layouts/UserLayout/UserLayout';
import Address from '@/modules/Post/Address';
import NewPost from '@/modules/Post/NewPost';

const newPost = () => {
    return (
        <UserLayout>
            <div className="flex gap-5">
                <div className="flex-2">
                    <NewPost />
                </div>
                <div className="flex-1 ">
                    <Address />
                </div>
            </div>
        </UserLayout>
    );
};

export default newPost;
