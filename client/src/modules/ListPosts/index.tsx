import * as React from 'react';
import { Post } from '@/models/Post';
import PostItem from './components/PostItem';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { RootState } from '@/app/store';
import { getPostLimit } from '@/features/Post/postAction';
import Pagination from '@/components/Common/Pagination';

interface propsData {}

const ListPosts = (props: propsData) => {
    const dispatch = useAppDispatch();
    const [page, setPage] = React.useState<number>(1);
    React.useEffect(() => {
        dispatch(getPostLimit(page - 1));
    }, [page]);
    const posts: Post[] = useAppSelector((state: RootState) => state.post.posts);
    const count: number = useAppSelector((state: RootState) => state.post.count);

    // console.log(posts)
    return (
        <div className='w-full'>
            <div className="flex flex-col gap-3 mt-2">
                {posts?.map((item, index) => <PostItem data={item} key={index} />)}
            </div>
            <div className="flex justify-center items-center w-full py-2 gap-5">
                <Pagination total={count} pageSize={4} currentPage={page} page={page} setPage={setPage} />
            </div>
        </div>
    );
};

export default ListPosts;
