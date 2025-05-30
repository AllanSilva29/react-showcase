import React from 'react';
import PropTypes from 'prop-types'; // Vamos adicionar prop-types para boas práticas

const Heading = ({ level, children, className, ...props }) => {
  // Valida o nível para garantir que seja entre 1 e 6
  const Tag = `h${Math.max(1, Math.min(6, level || 1))}`;

  // Define classes base Tailwind para cada nível de título
  // Você pode personalizar isso extensivamente
  const levelClasses = {
    1: 'text-4xl sm:text-5xl font-bold text-slate-800',
    2: 'text-3xl sm:text-4xl font-semibold text-slate-700',
    3: 'text-2xl sm:text-3xl font-semibold text-slate-700',
    4: 'text-xl sm:text-2xl font-medium text-slate-600',
    5: 'text-lg sm:text-xl font-medium text-slate-600',
    6: 'text-base sm:text-lg font-medium text-slate-600',
  };

  // Concatena as classes do nível com quaisquer classes personalizadas passadas via props
  const combinedClassName = `${levelClasses[Tag[1]] || levelClasses[1]} ${className || ''}`.trim();

  return (
    <Tag className={combinedClassName} {...props}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: 1, // H1 por padrão se nenhum nível for especificado
  className: '',
};

export default Heading;