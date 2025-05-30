import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, className, ...props }) => {
  // Classes Tailwind padrão para um parágrafo.
  // text-slate-700: Cor do texto.
  // leading-relaxed: Altura de linha um pouco maior para melhor legibilidade.
  // mb-4: Margem inferior.
  const defaultClasses = 'text-slate-700 leading-relaxed mb-4';

  const combinedClassName = `${defaultClasses} ${className || ''}`.trim();

  return (
    <p className={combinedClassName} {...props}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  className: '',
};

export default Paragraph;