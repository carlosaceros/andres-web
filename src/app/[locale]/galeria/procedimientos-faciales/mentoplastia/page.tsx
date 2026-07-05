import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientContent from './ClientContent';
import { procedureImages } from './data';

export default function MentoplastiaPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <ClientContent procedureImages={procedureImages} />
            <Footer />
        </div>
    );
}
