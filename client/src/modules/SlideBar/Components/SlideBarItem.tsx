import * as React from 'react';
import icons from '@/utils/Icons';
import { Category, PriceAndArea } from '@/models';
import Link from 'next/link';
import { useAppDispatch } from '@/app/hooks';
import * as actions from '@/features/Post/postAction';
import { useRouter } from 'next/router';

export interface propsData {
    title: string;
    content?: Category[] | PriceAndArea[];
    isDouble: boolean;
    type: string | '';
}

const { AiOutlineRight } = icons;

const SlideBarItem = (props: propsData) => {
    const { title, content, isDouble, type } = props;
    const dispatch = useAppDispatch();
    const router = useRouter();
    const routerName = router.query.type && router.query.type[0];

    const handle = (code: string): void => {
        dispatch(
            actions.getPostLimit({
                query: {
                    page: 0,
                    categoryCode: routerName || '',
                    [type]: code,
                },
            }),
        );
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
