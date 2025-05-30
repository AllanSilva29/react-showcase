import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, className, imageClassName, figureClassName }) => {
  if (!images || images.length === 0) {
    return <p className="text-slate-500">Nenhuma imagem para exibir na galeria.</p>;
  }

  // Classes Tailwind padrão para o container da galeria (um grid responsivo)
  // - grid: Habilita o layout de grid.
  // - gap-4: Espaçamento entre os itens do grid.
  // - grid-cols-1: Uma coluna em telas pequenas.
  // - sm:grid-cols-2: Duas colunas em telas 'sm' e acima.
  // - md:grid-cols-3: Três colunas em telas 'md' e acima.
  // - lg:grid-cols-4: Quatro colunas em telas 'lg' e acima (opcional, ajuste conforme necessário).
  const defaultGalleryClasses = 'grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3';

  const combinedClassName = `${defaultGalleryClasses} ${className || ''}`.trim();

  const defaultFigureClasses = 'overflow-hidden rounded-lg shadow-md group';
  const combinedFigureClassName = `${defaultFigureClasses} ${figureClassName || ''}`.trim();

  // Classes padrão para a imagem
  // - w-full: Largura total do container <figure>.
  // - h-48 sm:h-56 object-cover: Altura fixa e 'object-cover' para preencher sem distorcer.
  // - transition-transform duration-300 group-hover:scale-105: Efeito de zoom no hover.
  const defaultImageClasses = 'w-full h-48 sm:h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105';
  const combinedImageClassName = `${defaultImageClasses} ${imageClassName || ''}`.trim();


  return (
    <div className={combinedClassName}>
      {images.map((image, index) => (
        <figure key={image.id || index} className={combinedFigureClassName}>
          <img
            src={image.src}
            alt={image.alt || 'Imagem da galeria'}
            className={combinedImageClassName}
          />
          {image.caption && (
            <figcaption className="p-3 text-sm text-center bg-slate-100 text-slate-700">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string, // Classes para o container principal da galeria
  figureClassName: PropTypes.string, // Classes para cada <figure>
  imageClassName: PropTypes.string, // Classes para cada <img>
};

ImageGallery.defaultProps = {
  className: '',
  figureClassName: '',
  imageClassName: '',
};

export default ImageGallery;