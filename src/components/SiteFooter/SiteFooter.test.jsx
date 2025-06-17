import React from 'react';
import { render, screen } from '@testing-library/react';
import SiteFooter from './SiteFooter';

describe('SiteFooter', () => {
  test('renders the copyright text with the current year', () => {
    render(<SiteFooter />);
    
    const currentYear = new Date().getFullYear();
    const expectedText = `© ${currentYear} Site para a Capacita de React. Feito com ❤️ por Allan Silva.`;
    
    // Check for the paragraph containing the text
    const paragraphElement = screen.getByText((content, element) => {
      // Allow for slight variations in whitespace or if the heart emoji renders weirdly in test
      const normalizedContent = content.replace(/\s+/g, ' ');
      const normalizedExpected = expectedText.replace(/\s+/g, ' ');
      return element.tagName.toLowerCase() === 'p' && normalizedContent === normalizedExpected;
    });
    
    expect(paragraphElement).toBeInTheDocument();
  });

  test('is a footer element with correct default classes', () => {
    const { container } = render(<SiteFooter />);
    // The component itself is the footer
    const footerElement = container.firstChild; 
    
    expect(footerElement.tagName.toLowerCase()).toBe('footer');
    expect(footerElement).toHaveClass('bg-slate-800');
    expect(footerElement).toHaveClass('text-slate-300');
    expect(footerElement).toHaveClass('p-6');
    expect(footerElement).toHaveClass('text-center');
    expect(footerElement).toHaveClass('text-sm');
  });
});
