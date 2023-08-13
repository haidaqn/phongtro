import * as React from 'react';
import danang from '../../assets/thanh-toan/location_dn.jpg';
import hcm from '../../assets/thanh-toan/location_hcm.jpg';
import hn from '../../assets/thanh-toan/location_hn.jpg';
import Link from 'next/link';
import Image from 'next/image';

interface propsData {
    title: string;
    text: string;
    routerValue?: string;
}

const Breadcrumbs = (props: propsData) => {
    const { title, text, routerValue } = props;
    return (
        <div className="my-2">
            {routerValue && <div>router</div>}
            <h1 className="text-2xl font-bold">{title}</h1>
            <span  className="text-gray-500">{text}</span>
            <div className="flex gap-7 justify-center items-center mt-3 capitalize text-lg">
                <Link href="/">
                    <div className='h-48 bg-white rounded-lg '>
                        <Image src={hcm} alt="Picture of the author" className='w-44 rounded-t-lg h-40 object-cover' />
                        <h1 className='text-center font-medium text-main hover:text-orange-300'>hồ chí minh</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className='h-48 bg-white rounded-lg '>
                        <Image src={danang} alt="Picture of the author" className='w-44 rounded-t-lg h-40 object-cover' />
                        <h1 className='text-center font-medium text-main hover:text-orange-300'>đà nẵng</h1>
                    </div>
                </Link>
                <Link href="/">
                    <div className='h-48 bg-white rounded-lg '>
                        <Image src={hn} alt="Picture of the author" className='w-44 rounded-t-lg h-40 object-cover' />
                        <h1 className='text-center font-medium text-main hover:text-orange-300'>hà nội</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Breadcrumbs;
