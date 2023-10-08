import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import Pagination from '@/components/Common/Pagination';
import { getPostLimit } from '@/features/Post/postAction';
import { Post } from '@/models/Post';
import { useRouter } from 'next/router';
import * as React from 'react';
import PostItem from './components/PostItem';
import dynamic from 'next/dist/shared/lib/dynamic';

interface propsData {}

const ListPosts = (props: propsData) => {
    const router = useRouter();
    const routerName = Array.isArray(router.query.type) ? router.query.type[0] : null;
    const routerPrice = Array.isArray(router.query.priceCode) ? router.query.priceCode[0] : null;
    const routerArea = Array.isArray(router.query.areaCode) ? router.query.areaCode[0] : null;
    const dispatch = useAppDispatch();
    const [page, setPage] = React.useState<number>(1);

    const posts: Post[] = useAppSelector((state: RootState) => state.post.posts);
    const count: number = useAppSelector((state: RootState) => state.post.count);
    const priceCode: string | null = useAppSelector((state: RootState) => state.post.type.priceCode);
    const areaCode: string | null = useAppSelector((state: RootState) => state.post.type.areaCode);

    React.useEffect(() => {
        if (!priceCode && !areaCode) {
            dispatch(
                getPostLimit({
                    query: {
                        page: page - 1,
                        categoryCode: routerName,
                    },
                }),
            );
        } else if (priceCode && areaCode) {
            dispatch(
                getPostLimit({
                    query: {
                        page: page - 1,
                        categoryCode: routerName,
                        priceCode,
                        areaCode,
                    },
                }),
            );
        } else {
            if (priceCode && !areaCode) {
                dispatch(
                    getPostLimit({
                        query: {
                            page: page - 1,
                            categoryCode: routerName,
                            priceCode,
                        },
                    }),
                );
            }
            if (!priceCode && areaCode) {
                dispatch(
                    getPostLimit({
                        query: {
                            page: page - 1,
                            categoryCode: routerName,
                            areaCode,
                        },
                    }),
                );
            }
        }
    }, [page, routerName, routerPrice, routerArea]);
    // console.log(posts);
    return (
        <div className="w-full">
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
