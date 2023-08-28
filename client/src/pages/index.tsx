import MainLayout from '../layouts/MainLayout/MainLayout';
import * as React from 'react';
import ListPosts from '@/modules/ListPosts';

interface HomeProps {}

function Home(props: HomeProps) {
    return (
        <MainLayout>
            <ListPosts />
        </MainLayout>
    );
}

export default Home;
