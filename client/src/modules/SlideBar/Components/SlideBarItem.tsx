import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import * as actions from '@/features/Post/postAction';
import { Category, PriceAndAreaAndProvince } from '@/models';
import icons from '@/utils/Icons';
import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router';
export interface propsData {
    title: string;
    content?: Category[] | PriceAndAreaAndProvince[];
    isDouble: boolean;
    type: string | '';
}
const { AiOutlineRight } = icons;
const SlideBarItem = (props: propsData) => {
    const { title, content, isDouble, type } = props;
    const dispatch = useAppDispatch();
    const router = useRouter();
    const routerName = (router.query.type && router.query.type[0]) || '';

    const priceCode: string | null = useAppSelector((state: RootState) => state.post.type.priceCode);
    const areaCode: string | null = useAppSelector((state: RootState) => state.post.type.areaCode);
    const provinceCode: string | null = useAppSelector((state: RootState) => state.post.type.provinceCode);
    const categoryCode: string | null = useAppSelector((state: RootState) => state.post.type.categoryCode);
    const handle = (code: string): void => {
        if (routerName !== '') {
            if (type === 'priceCode') {
                if (areaCode && provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: areaCode,
                                provinceCode: provinceCode,
                                priceCode: code !== priceCode ? code : priceCode,
                            },
                        }),
                    );
                } else if (!areaCode && provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                provinceCode: provinceCode,
                                priceCode: code !== priceCode ? code : priceCode,
                            },
                        }),
                    );
                } else if (areaCode && !provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: areaCode,
                                priceCode: code !== priceCode ? code : priceCode,
                            },
                        }),
                    );
                } else {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                priceCode: code !== priceCode ? code : priceCode,
                            },
                        }),
                    );
                }
            } else if (type === 'areaCode') {
                if (priceCode && provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: code !== areaCode ? code : areaCode,
                                priceCode: priceCode,
                                provinceCode: provinceCode,
                            },
                        }),
                    );
                } else if (!priceCode && provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: code !== areaCode ? code : areaCode,
                                provinceCode: provinceCode,
                            },
                        }),
                    );
                } else if (priceCode && !provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: code !== areaCode ? code : areaCode,
                                priceCode: priceCode,
                            },
                        }),
                    );
                } else {
                    dispatch(
                        actions.getPostLimit({
                            query: { page: 0, categoryCode: routerName, areaCode: code !== areaCode ? code : areaCode },
                        }),
                    );
                }
            } else if (type === 'provinceCode') {
                if (priceCode && areaCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: areaCode,
                                priceCode: priceCode,
                                provinceCode: code !== provinceCode ? code : provinceCode,
                            },
                        }),
                    );
                } else if (!priceCode && areaCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: areaCode,
                                provinceCode: code !== provinceCode ? code : provinceCode,
                            },
                        }),
                    );
                } else if (priceCode && !areaCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                priceCode: priceCode,
                                provinceCode: code !== provinceCode ? code : provinceCode,
                            },
                        }),
                    );
                } else {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                provinceCode: code !== provinceCode ? code : provinceCode,
                            },
                        }),
                    );
                }
            } else {
                dispatch(actions.getPostLimit({ query: { page: 0, categoryCode: routerName } }));
            }
        } else {
            if (type === 'priceCode') {
                if (areaCode && provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: areaCode,
                                provinceCode: provinceCode,
                                priceCode: code !== priceCode ? code : priceCode,
                            },
                        }),
                    );
                } else if (!areaCode && provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                provinceCode: provinceCode,
                                priceCode: code !== priceCode ? code : priceCode,
                            },
                        }),
                    );
                } else if (areaCode && !provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: areaCode,
                                priceCode: code !== priceCode ? code : priceCode,
                            },
                        }),
                    );
                } else {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                priceCode: code !== priceCode ? code : priceCode,
                            },
                        }),
                    );
                }
            } else if (type === 'areaCode') {
                if (priceCode && provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: code !== areaCode ? code : areaCode,
                                priceCode: priceCode,
                                provinceCode: provinceCode,
                            },
                        }),
                    );
                } else if (!priceCode && provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: code !== areaCode ? code : areaCode,
                                provinceCode: provinceCode,
                            },
                        }),
                    );
                } else if (priceCode && !provinceCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: code !== areaCode ? code : areaCode,
                                priceCode: priceCode,
                            },
                        }),
                    );
                } else {
                    dispatch(
                        actions.getPostLimit({
                            query: { page: 0, categoryCode: routerName, areaCode: code !== areaCode ? code : areaCode },
                        }),
                    );
                }
            } else if (type === 'provinceCode') {
                if (priceCode && areaCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: areaCode,
                                priceCode: priceCode,
                                provinceCode: code !== provinceCode ? code : provinceCode,
                            },
                        }),
                    );
                } else if (!priceCode && areaCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: areaCode,
                                provinceCode: code !== provinceCode ? code : provinceCode,
                            },
                        }),
                    );
                } else if (priceCode && !areaCode) {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                priceCode: priceCode,
                                provinceCode: code !== provinceCode ? code : provinceCode,
                            },
                        }),
                    );
                } else {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                provinceCode: code !== provinceCode ? code : provinceCode,
                            },
                        }),
                    );
                }
            } else {
                dispatch(actions.getPostLimit({ query: { page: 0, categoryCode: routerName } }));
            }
        }
    };
    return (
        <div className="bg-white rounded-md px-2 py-3 border-[1px] capitalize">
            <h1 className="text-lg font-medium capitalize">{title}</h1>
            <div className="flex flex-col gap-2 mt-2">
                {isDouble ? (
                    <div className="grid grid-cols-2 gap-1">
                        {content?.map((item) => (
                            <div
                                onClick={() => handle(item.code)}
                                key={item.code}
                                className="pl-3 flex gap-1 items-center text-[14px] border-b pb-2 border-dashed cursor-pointer hover:text-orange-500"
                            >
                                <AiOutlineRight size={15} color="#ccc" /> <span className="">{item.value}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {content?.map((item) => (
                            <Link
                                href={`${item.code}`}
                                onClick={() => handle(item.code)}
                                key={item.code}
                                className="pl-3 flex gap-1 items-center text-[14px] border-b pb-2 border-dashed cursor-pointer hover:text-orange-500"
                            >
                                <AiOutlineRight size={15} color="#ccc" /> <span className="">{item.value}</span>
                            </Link>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
export default React.memo(SlideBarItem);
