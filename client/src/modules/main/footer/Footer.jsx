import React from 'react';
import EmptyLayout from '@/layouts/EmptyLayout/EmptyLayout';
import FooterContent from './components/FooterContent';

const Footer = () => {
    return (
        <EmptyLayout>
            <div className="my-5">
                <FooterContent />
            </div>
        </EmptyLayout>
    );
};

export default Footer;
