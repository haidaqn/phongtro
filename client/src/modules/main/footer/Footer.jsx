import React from 'react';
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout';
import FooterContent from './components/FooterContent';
import FooterPanner from './components/FooterPanner';
import FooterSupport from './components/FooterSupport';

const Footer = () => {
    return (
        <EmptyLayout>
            <div className="my-5 flex flex-col gap-3">
                <FooterContent />
                <FooterSupport />
                <FooterPanner />
            </div>
        </EmptyLayout>
    );
};

export default Footer;
