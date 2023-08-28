import React from 'react';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ListPosts from '@/modules/ListPosts';
import { useRouter } from 'next/router';

const TypeCategory = () => {
    const router = useRouter();
    const routerName = router.query.type && router.query.type[0];

    return (
        <MainLayout>
            <ListPosts />
        </MainLayout>
    );
};

export default TypeCategory;
