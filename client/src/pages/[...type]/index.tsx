import React from 'react';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ListPosts from '@/modules/ListPosts';
import { useRouter } from 'next/router';

const TypeCategory = () => {
    return (
        <MainLayout>
            <ListPosts />
        </MainLayout>
    );
};

export default TypeCategory;
