import React from 'react';
import Navbar from '../Navbar/Navbar';
import SiteFooter from '../SiteFooter/SiteFooter';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50"> {/* Adicionado um fundo claro */}
      <Navbar /> {/* Usar o componente Navbar */}

      <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8">
        {children}
      </main>

      <SiteFooter /> {/* Usar o componente SiteFooter */}
    </div>
  );
};

export default Layout;