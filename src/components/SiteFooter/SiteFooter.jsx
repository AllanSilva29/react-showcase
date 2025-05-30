import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 p-6 text-center text-sm">
      <p>© {new Date().getFullYear()} Site para a Capacita de React. Feito com ❤️ por Allan Silva.</p>
      {/* Outros links/informações podem vir aqui */}
    </footer>
  );
};

export default SiteFooter;