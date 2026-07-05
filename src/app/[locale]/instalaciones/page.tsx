import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientContent from './ClientContent';

export default function InstalacionesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ClientContent />
      <Footer />
    </main>
  );
}
