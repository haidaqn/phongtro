import MainLayout from '../layouts/MainLayout/MainLayout';
import * as React from 'react';
import postsApi from '@/apiClient/post'
import { Post } from '@/models/Post';
import ListPosts from '@/modules/ListPosts';
import { useAppDispatch , useAppSelector } from '@/app/hooks';
import { getPosts } from '@/features/Post/postAction';
interface responseData {
    err:number,
    data: Post[],
    msg: string,
}

interface HomeProps{}

function Home(props:HomeProps) {
    // const [data, setData] = React.useState<Post[]>([]);
    const dispatch = useAppDispatch();
    dispatch(getPosts());
    // const { posts }= useAppSelector(state => state.post);
    
    // console.log(posts);

    return (
        <MainLayout>
            {/* <ListPosts data={data.slice(0,2)} /> */}
        </MainLayout>
    );
}

export default Home;
