import * as React from 'react';
import icons from '@/utils/Icons';
import { Category, PriceAndAreaAndProvince } from '@/models';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import * as actions from '@/features/Post/postAction';
import { useRouter } from 'next/router';
import { RootState } from '@/app/store';

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

    const handle = (code: string): void => {
        if (routerName) {
            if (type === 'priceCode') {
                if (areaCode) {
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
                    console.log('1');
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
                if (priceCode) {
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
                    console.log('2');
                } else {
                    dispatch(
                        actions.getPostLimit({
                            query: {
                                page: 0,
                                categoryCode: routerName,
                                areaCode: code !== areaCode ? code : areaCode,
                            },
                        }),
                    );
                }
            } else {
                dispatch(
                    actions.getPostLimit({
                        query: {
                            page: 0,
                            categoryCode: routerName,
                        },
                    }),
                );
                console.log('3');
            }
        }
        // console.log(routerName, priceCode, areaCode);
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
                                <AiOutlineRight size={15} color="#ccc" />
                                <span className="">{item.value}</span>
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
                                <AiOutlineRight size={15} color="#ccc" />
                                <span className="">{item.value}</span>
                            </Link>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default React.memo(SlideBarItem);
