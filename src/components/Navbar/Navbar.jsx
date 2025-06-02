import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'; // Adicionado useLocation
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation(); // Para obter o pathname atual

  // Estilos para links ativos e inativos na barra principal
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? "block sm:inline-block px-3 py-2 rounded-md text-white font-medium bg-sky-700 sm:bg-transparent sm:text-white sm:border-b-2 sm:border-white sm:rounded-none" // Mais destaque para ativo
      : "block sm:inline-block px-3 py-2 rounded-md text-sky-100 hover:bg-sky-700 hover:text-white sm:hover:bg-transparent sm:hover:text-white transition-colors";
  };

  // Estilos para links ativos e inativos no dropdown
  const getDropdownLinkClass = ({ isActive }) => {
    return isActive
      ? "block w-full text-left px-4 py-2 text-sm text-white bg-sky-700 transition-colors" // Destaque no dropdown
      : "block w-full text-left px-4 py-2 text-sm text-sky-100 hover:bg-sky-700 hover:text-white transition-colors";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      // Para fechar o menu mobile se clicar fora dele (mais complexo, pode ser omitido ou melhorado)
      // if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !navButtonRef.current.contains(event.target)) {
      //   setIsMobileMenuOpen(false);
      // }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]); // Adicionar mobileMenuRef e navButtonRef se implementar o fechamento do menu mobile

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Impede que o clique no botão do dropdown feche ele imediatamente via handleClickOutside
    setIsDropdownOpen(!isDropdownOpen);
  }
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const semanas = [
    { name: 'Semana 1', pathBase: '/', currentComponents: ['/', '/titulos', '/textos', '/galeria', '/rodape-exemplo'] },
    // ... outras semanas
  ];

  const isWeekActive = (week) => {
    return week.currentComponents.some(compPath => location.pathname === compPath || (compPath !== '/' && location.pathname.startsWith(compPath)));
  };

  return (
    <nav className="bg-sky-600 text-white shadow-lg sticky top-0 z-50"> {/* Sombra mais pronunciada */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Padding responsivo no container */}
        <div className="flex items-center justify-between h-16"> {/* Altura fixa para a navbar */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-2xl hover:text-sky-200 transition-colors" onClick={closeMenus}>
              React Showcase
            </Link>
          </div>

          {/* Links de Navegação (Desktop) */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <NavLink to="/conceitos" className={getNavLinkClass}>
              Conceitos
            </NavLink>

            {/* Dropdown para Semanas (Desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
                            ${isWeekActive(semanas[0]) ? 'text-white border-b-2 border-white' : 'text-sky-100 hover:text-white'}
                            focus:outline-none`} // Remove outline padrão do botão
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Semanas <FiChevronDown className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 sm:left-0 mt-2 w-56 rounded-md shadow-2xl bg-sky-500 ring-1 ring-black ring-opacity-5 focus:outline-none py-1 z-20">
                  {/* Conteúdo do Dropdown */}
                  <NavLink to="/" className={getDropdownLinkClass} onClick={closeMenus} end>
                    Semana 1 - Início
                  </NavLink>
                  <NavLink to="/titulos" className={getDropdownLinkClass} onClick={closeMenus}>Títulos</NavLink>
                  <NavLink to="/textos" className={getDropdownLinkClass} onClick={closeMenus}>Textos</NavLink>
                  <NavLink to="/galeria" className={getDropdownLinkClass} onClick={closeMenus}>Galeria</NavLink>
                  <NavLink to="/rodape-exemplo" className={getDropdownLinkClass} onClick={closeMenus}>Rodapé (Exemplo)</NavLink>
                  <div className="border-t border-sky-600 my-1"></div> {/* Divisor */}
                  <span className="block px-4 py-2 text-sm text-sky-300 cursor-not-allowed">Semana 2 (em breve)</span>
                  {/* ... outros placeholders de semanas */}
                </div>
              )}
            </div>
          </div>

          {/* Botão do Menu Mobile */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-sky-100 hover:text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMobileMenuOpen ? <FiX className="block h-6 w-6" data-testid="icon-close" /> : <FiMenu className="block h-6 w-6" data-testid="icon-menu" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right z-40" id="mobile-menu"> {/* Posicionamento absoluto e animação */}
          <div className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-sky-600 divide-y divide-sky-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="/conceitos" className={getNavLinkClass} onClick={closeMenus}>
                Conceitos
              </NavLink>

              {/* Links do Dropdown replicados para mobile, mas sem o comportamento de dropdown */}
              <div className="border-t border-sky-700 my-2"></div>
              <span className="block px-3 py-2 text-xs font-medium text-sky-300 uppercase">Semana 1</span>
              <NavLink to="/" className={getNavLinkClass} onClick={closeMenus} end> Início (S1)</NavLink>
              <NavLink to="/titulos" className={getNavLinkClass} onClick={closeMenus}>Títulos</NavLink>
              <NavLink to="/textos" className={getNavLinkClass} onClick={closeMenus}>Textos</NavLink>
              <NavLink to="/galeria" className={getNavLinkClass} onClick={closeMenus}>Galeria</NavLink>
              <NavLink to="/rodape-exemplo" className={getNavLinkClass} onClick={closeMenus}>Rodapé (Exemplo)</NavLink>
              {/* ... outros links de semanas para mobile */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;