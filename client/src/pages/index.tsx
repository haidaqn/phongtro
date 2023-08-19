import MainLayout from '../layouts/MainLayout/MainLayout';
import * as React from 'react';
import postsApi from '@/apiClient/post';
import { Post } from '@/models/Post';
import ListPosts from '@/modules/ListPosts';
interface responseData {
    err: number;
    data: Post[];
    msg: string;
}

interface HomeProps {}

function Home(props: HomeProps) {

    return (
        <MainLayout>
            <ListPosts />
        </MainLayout>
    );
}

export default Home;
