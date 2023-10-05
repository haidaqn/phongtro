import MainLayout from '../layouts/MainLayout/MainLayout';
import React, { useState, useEffect, Suspense } from 'react';
import ListPosts from '@/modules/ListPosts';
import authApi from '@/apiClient/auth';
import { useAppDispatch } from '@/app/hooks';
import { authActions } from '@/features/auth/AuthSlice';
import { useSnackbar } from 'notistack';

interface HomeProps {}

function Home(props: HomeProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLoading(true);
            const fetchData = async () => {
                try {
                    const response = await authApi.getHello();
                    if (response.data.success === false) {
                        enqueueSnackbar('Vui lòng đăng nhập lại !', {
                            variant: 'warning',
                        });
                        dispatch(authActions.logout());
                    }
                } catch (err) {
                    console.log(err);
                }
            };
            fetchData();
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
