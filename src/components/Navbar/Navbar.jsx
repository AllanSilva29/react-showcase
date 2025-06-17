import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css'; // Importar o CSS Module

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null); // Ref para o menu mobile
  const mobileMenuButtonRef = useRef(null); // Ref para o botão do menu mobile
  const location = useLocation();

  const getNavLinkClass = ({ isActive }) => {
    let classNames = `${styles.navLink}`;
    if (isActive) classNames += ` ${styles.navLinkActive}`;
    return classNames;
  };

  const getDropdownLinkClass = ({ isActive }) => {
    let classNames = `${styles.dropdownLink}`;
    if (isActive) classNames += ` ${styles.dropdownLinkActive}`;
    return classNames;
  };

  // Fechar menus ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Dependências vazias para rodar apenas na montagem/desmontagem

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Impede que o clique feche o dropdown imediatamente
    setIsDropdownOpen(!isDropdownOpen);
    setIsMobileMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false); // Fecha o dropdown se estiver aberto
  };

  const closeMenusAndNavigate = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    // A navegação ocorrerá pelo NavLink/Link
  };

  const semanas = [
    { name: 'Semana 1', pathBase: '/', currentComponents: ['/', '/titulos', '/textos', '/galeria', '/rodape-exemplo'] },
    // Adicione as outras semanas aqui quando tiver as rotas
    // { name: 'Semana 2', pathBase: '/semana2', currentComponents: ['/semana2/componenteA', '/semana2/componenteB'] },
  ];

  const isWeekActive = (week) => {
    if (!week) return false;
    return week.currentComponents.some(compPath => location.pathname === compPath || (compPath !== '/' && location.pathname.startsWith(compPath)));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo} onClick={closeMenusAndNavigate}>
              React Showcase
            </Link>
          </div>

          {/* Links de Navegação (Desktop) */}
          <div className={styles.navLinksDesktop}>
            <NavLink to="/conceitos" className={getNavLinkClass} onClick={closeMenusAndNavigate}>
              Conceitos
            </NavLink>
            <div className="relative" ref={dropdownRef}> {/* Tailwind 'relative' é útil aqui, ou use CSS puro */}
              <button
                onClick={toggleDropdown}
                className={`${styles.dropdownButton} ${isWeekActive(semanas.find(s => s.name === 'Semana 1')) ? styles.dropdownButtonActive : ''}`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Semanas <FiChevronDown className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.dropdownIconOpen : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className={`${styles.dropdownMenu} ${styles.dropdownMenuDesktop}`}> {/* Classe específica para desktop */}
                  <NavLink to="/" className={getDropdownLinkClass} onClick={closeMenusAndNavigate} end>
                    Semana 1 - Início
                  </NavLink>
                  <NavLink to="/titulos" className={getDropdownLinkClass} onClick={closeMenusAndNavigate}>Títulos</NavLink>
                  <NavLink to="/textos" className={getDropdownLinkClass} onClick={closeMenusAndNavigate}>Textos</NavLink>
                  <NavLink to="/galeria" className={getDropdownLinkClass} onClick={closeMenusAndNavigate}>Galeria</NavLink>
                  <NavLink to="/rodape-exemplo" className={getDropdownLinkClass} onClick={closeMenusAndNavigate}>Rodapé (Exemplo)</NavLink>
                  <div className={styles.dropdownDivider}></div>
                  <span className={styles.dropdownPlaceholder}>Semana 2 (em breve)</span>
                  <span className={styles.dropdownPlaceholder}>Semana 3 (em breve)</span>
                  <span className={styles.dropdownPlaceholder}>Semana 4 (em breve)</span>
                </div>
              )}
            </div>
          </div>

          {/* Botão do Menu Mobile */}
          <div className={styles.mobileMenuButtonContainer} ref={mobileMenuButtonRef}>
            <button
              onClick={toggleMobileMenu}
              className={styles.mobileMenuButton}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMobileMenuOpen ? <FiX style={{height: '1.5rem', width: '1.5rem'}} /> : <FiMenu style={{height: '1.5rem', width: '1.5rem'}} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className={`${styles.mobileMenu} ${styles.mobileMenuVisible}`} id="mobile-menu" ref={mobileMenuRef}> {/* Classe para visibilidade */}
          <div className={styles.mobileMenuContent}>
            <NavLink to="/conceitos" className={getNavLinkClass} onClick={closeMenusAndNavigate}>
              Conceitos
            </NavLink>
            <div className={styles.mobileMenuDivider}></div>
            <span className={styles.mobileMenuWeekLabel}>Semana 1</span>
            <NavLink to="/" className={getNavLinkClass} onClick={closeMenusAndNavigate} end> Início (S1)</NavLink>
            <NavLink to="/titulos" className={getNavLinkClass} onClick={closeMenusAndNavigate}>Títulos</NavLink>
            <NavLink to="/textos" className={getNavLinkClass} onClick={closeMenusAndNavigate}>Textos</NavLink>
            <NavLink to="/galeria" className={getNavLinkClass} onClick={closeMenusAndNavigate}>Galeria</NavLink>
            <NavLink to="/rodape-exemplo" className={getNavLinkClass} onClick={closeMenusAndNavigate}>Rodapé (Exemplo)</NavLink>
            <div className={styles.mobileMenuDivider}></div>
            <span className={styles.mobileMenuWeekLabel}>Outras Semanas</span>
            <span className={styles.dropdownPlaceholder}>Semana 2 (em breve)</span>
            <span className={styles.dropdownPlaceholder}>Semana 3 (em breve)</span>
            <span className={styles.dropdownPlaceholder}>Semana 4 (em breve)</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;