import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageGallery from './ImageGallery';

describe('ImageGallery', () => {
  const testImages = [
    { id: '1', src: 'image1.jpg', alt: 'First test image', caption: 'Caption 1' },
    { id: '2', src: 'image2.png', alt: 'Second test image' },
    { id: '3', src: 'image3.gif', caption: 'Caption 3 (no alt)' }, // Alt will default
  ];

  const defaultAltText = 'Imagem da galeria';
  const emptyGalleryMessage = 'Nenhuma imagem para exibir na galeria.';

  test('renders correctly with a list of images, including src, alt, and captions', () => {
    render(<ImageGallery images={testImages} />);

    const renderedImages = screen.getAllByRole('img');
    expect(renderedImages).toHaveLength(testImages.length);

    testImages.forEach((imageInfo, index) => {
      const imgElement = renderedImages[index];
      expect(imgElement).toHaveAttribute('src', imageInfo.src);
      expect(imgElement).toHaveAttribute('alt', imageInfo.alt || defaultAltText);

      if (imageInfo.caption) {
        expect(screen.getByText(imageInfo.caption)).toBeInTheDocument();
      }
    });

    // Check one caption specifically to ensure it's tied to the figure
    const firstImageElement = screen.getByAltText(testImages[0].alt);
    const figureElement = firstImageElement.closest('figure');
    expect(figureElement).toHaveTextContent(testImages[0].caption);
  });

  test('handles empty images array gracefully', () => {
    render(<ImageGallery images={[]} />);
    expect(screen.getByText(emptyGalleryMessage)).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('handles undefined images prop gracefully', () => {
    render(<ImageGallery images={undefined} />);
    expect(screen.getByText(emptyGalleryMessage)).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
  
  test('applies custom className to the main gallery div', () => {
    const customClass = 'my-gallery-custom-class';
    render(<ImageGallery images={testImages} className={customClass} />);
    const galleryDiv = screen.getByRole('img', { name: testImages[0].alt }).closest('div'); // Get the parent div
    expect(galleryDiv).toHaveClass(customClass);
    expect(galleryDiv).toHaveClass('grid'); // Default class
  });

  test('applies custom figureClassName to each figure element', () => {
    const customFigClass = 'my-figure-custom';
    render(<ImageGallery images={testImages} figureClassName={customFigClass} />);
    const figures = screen.getAllByRole('figure');
    figures.forEach(fig => {
      expect(fig).toHaveClass(customFigClass);
      expect(fig).toHaveClass('overflow-hidden'); // Default class
    });
  });

  test('applies custom imageClassName to each img element', () => {
    const customImgClass = 'my-image-custom';
    render(<ImageGallery images={testImages} imageClassName={customImgClass} />);
    const renderedImages = screen.getAllByRole('img');
    renderedImages.forEach(img => {
      expect(img).toHaveClass(customImgClass);
      expect(img).toHaveClass('w-full'); // Default class
    });
  });

  test('does not render caption if not provided', () => {
    render(<ImageGallery images={[testImages[1]]} />); // Only image without caption
    expect(screen.queryByRole('figcaption')).not.toBeInTheDocument();
    expect(screen.queryByText(testImages[0].caption)).not.toBeInTheDocument(); // Ensure other captions aren't there
  });
});
