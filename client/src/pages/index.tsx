import MainLayout from '../layouts/MainLayout/MainLayout';
import React, { useState, useEffect, Suspense } from 'react';
import ListPosts from '@/modules/ListPosts';

interface HomeProps {}

function Home(props: HomeProps) {
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLoading(true);
        }
    }, []);

    return (
        <>
            {loading ? (
                <Suspense fallback={<p>Loading feed...</p>}>
                    <MainLayout>
                        <ListPosts />
                    </MainLayout>
                </Suspense>
            ) : (
                <div className="bg-white h-screen w-screen"></div>
            )}
        </>
    );
}

export default Home;
