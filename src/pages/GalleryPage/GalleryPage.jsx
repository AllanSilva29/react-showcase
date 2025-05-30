import React from 'react';
import ComponentShowcase from '../../components/ComponentShowcase/ComponentShowcase';
import ImageGallery from '../../components/Gallery/ImageGallery'; // Nosso componente interno
import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';


const sampleImagesData = [
  { id: 'p1', src: 'https://picsum.photos/seed/picsum1/400/300', alt: 'Imagem aleatória 1', caption: 'Paisagem 1' },
  { id: 'p2', src: 'https://picsum.photos/seed/picsum2/400/300', alt: 'Imagem aleatória 2', caption: 'Natureza 2' },
  { id: 'p3', src: 'https://picsum.photos/seed/picsum3/400/300', alt: 'Imagem aleatória 3', caption: 'Abstrato 3' },
  { id: 'p4', src: 'https://picsum.photos/seed/picsum4/400/300', alt: 'Imagem aleatória 4', caption: 'Urbano 4' },
];

const simpleGalleryJsxCode = `
// components/MinhaGaleriaSimples.jsx (Exemplo)
// Uma galeria de imagens básica e responsiva usando Tailwind CSS.

// Supondo que você tem as URLs das imagens ou as importou:
// import img1src from '../assets/image1.jpg'; // Exemplo de importação local
// const img2src = 'https://endereco.com/imagem2.jpg'; // Exemplo de URL externa

const imagensDaGaleria = [
  { id: 'a', src: '/img/placeholder-gallery-1.jpg', alt: 'Montanhas', caption: 'Montanhas Nevadas' },
  { id: 'b', src: '/img/placeholder-gallery-2.jpg', alt: 'Praia', caption: 'Praia Tropical' },
  { id: 'c', src: '/img/placeholder-gallery-3.jpg', alt: 'Floresta', caption: 'Floresta Densa' },
  { id: 'd', src: '/img/placeholder-gallery-4.jpg', alt: 'Cidade', caption: 'Cidade à Noite' },
];
// Nota: Nos exemplos de código, use caminhos genéricos como '/img/...'
// para não depender de como o usuário nomeou as importações.
// No seu projeto real, você usaria as variáveis importadas:
// { id: 'a', src: img1src, ... }

const ItemImagem = ({ src, alt, caption }) => (
  <figure className="overflow-hidden rounded-lg shadow-md group">
    <img
      src={src}
      alt={alt || 'Imagem da galeria'}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    {caption && (
      <figcaption className="p-3 text-sm text-center bg-slate-100 text-slate-700">
        {caption}
      </figcaption>
    )}
  </figure>
);

const MinhaGaleriaSimples = () => {
  if (!imagensDaGaleria || imagensDaGaleria.length === 0) {
    return <p>Nenhuma imagem disponível.</p>;
  }

  return (
    // Layout de Grid Responsivo com Tailwind CSS:
    // - grid: Ativa o display grid.
    // - gap-4: Espaçamento de 1rem (16px) entre os itens.
    // - grid-cols-1: Uma coluna por padrão (mobile).
    // - sm:grid-cols-2: Duas colunas em telas pequenas (sm) e maiores.
    // - md:grid-cols-3: Três colunas em telas médias (md) e maiores.
    //   (Ajuste o número de colunas conforme sua necessidade)
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {imagensDaGaleria.map((img) => (
        <ItemImagem key={img.id} src={img.src} alt={img.alt} caption={img.caption} />
      ))}
    </div>
  );
};

export default MinhaGaleriaSimples;
`.trim();

const GalleryPage = () => {
  return (
    <div>
      <header className="mb-10">
        <Heading level={1} className="!text-sky-700 !mb-2">
          Componente: Galeria de Imagens
        </Heading>
        <Paragraph className="!text-lg !text-slate-600">
          Aprenda a criar uma galeria de imagens responsiva e atraente.
        </Paragraph>
      </header>

      <ComponentShowcase
        title="Galeria de Imagens Responsiva"
        description="Uma galeria simples que se ajusta a diferentes tamanhos de tela, com legendas opcionais e um efeito de zoom suave no hover."
        componentName="MinhaGaleriaSimples"
        jsxCode={simpleGalleryJsxCode}
      >
        {/* Usando nosso componente ImageGallery interno para a visualização */}
        <ImageGallery images={sampleImagesData} />
      </ComponentShowcase>

      {/* Pode adicionar mais exemplos de galerias aqui no futuro (ex: com lightbox) */}
    </div>
  );
};

export default GalleryPage;