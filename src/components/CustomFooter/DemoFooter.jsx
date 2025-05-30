import React from 'react';
import PropTypes from 'prop-types';

const DemoFooter = ({
  copyrightText,
  links,
  socialLinks,
  className,
  textClassName,
  linkClassName,
  socialIconClassName
}) => {
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} Minha Empresa Inc. Todos os direitos reservados.`;

  const defaultFooterClasses = 'bg-slate-700 text-slate-300 p-8 text-center sm:text-left';
  const combinedClassName = `${defaultFooterClasses} ${className || ''}`.trim();

  const defaultTextClasses = 'text-sm';
  const combinedTextClassName = `${defaultTextClasses} ${textClassName || ''}`.trim();

  const defaultLinkClasses = 'hover:text-white transition-colors mx-2';
  const combinedLinkClassName = `${defaultLinkClasses} ${linkClassName || ''}`.trim();

  const defaultSocialIconClasses = 'text-xl hover:text-sky-400 transition-colors';
  const combinedSocialIconClassName = `${defaultSocialIconClasses} ${socialIconClassName || ''}`.trim();

  return (
    <footer className={combinedClassName}>
      <div className="container mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-3 items-center">
        {/* Coluna de Copyright */}
        <div className={`md:col-span-1 ${combinedTextClassName}`}>
          {copyrightText || defaultCopyright}
        </div>

        {/* Coluna de Links de Navegação (opcional) */}
        {links && links.length > 0 && (
          <nav className="md:col-span-1 md:text-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={combinedLinkClassName}
                target={link.external ? '_blank' : '_self'}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.text}
              </a>
            ))}
          </nav>
        )}

        {/* Coluna de Links Sociais (opcional) */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="md:col-span-1 md:text-right flex justify-center sm:justify-end space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedSocialIconClassName}
              >
                {/* Placeholder para Ícone - Idealmente usaríamos uma biblioteca de ícones SVG */}
                <span className={`icon-${social.platform}`}>{social.platform.charAt(0).toUpperCase()}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

DemoFooter.propTypes = {
  copyrightText: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      external: PropTypes.bool,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired, // ex: 'facebook', 'twitter', 'linkedin'
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired, // para acessibilidade
    })
  ),
  className: PropTypes.string,
  textClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  socialIconClassName: PropTypes.string,
};

DemoFooter.defaultProps = {
  copyrightText: '',
  links: [],
  socialLinks: [],
  className: '',
  textClassName: '',
  linkClassName: '',
  socialIconClassName: '',
};

export default DemoFooter;