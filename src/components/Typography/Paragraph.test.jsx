import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from './Paragraph'; // Adjust path as necessary

describe('Paragraph Component', () => {
  const testText = 'This is a test paragraph.';
  const testChildSpan = <span data-testid="child-span">Child span</span>;

  test('renders its text children correctly', () => {
    render(<Paragraph>{testText}</Paragraph>);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test('renders its React element children correctly', () => {
    render(<Paragraph>{testChildSpan}</Paragraph>);
    expect(screen.getByTestId('child-span')).toBeInTheDocument();
    expect(screen.getByText('Child span')).toBeInTheDocument();
  });

  test('renders a <p> tag by default', () => {
    render(<Paragraph>{testText}</Paragraph>);
    const paragraphElement = screen.getByText(testText);
    expect(paragraphElement.tagName.toLowerCase()).toBe('p');
  });

  test('applies custom className along with default classes', () => {
    const customClass = 'my-custom-paragraph';
    render(<Paragraph className={customClass}>{testText}</Paragraph>);
    const paragraphElement = screen.getByText(testText);
    
    expect(paragraphElement).toHaveClass(customClass);
    // Check for one of the default classes to ensure they are also applied
    expect(paragraphElement).toHaveClass('text-slate-700'); 
  });

  test('applies all default classes correctly', () => {
    render(<Paragraph>{testText}</Paragraph>);
    const paragraphElement = screen.getByText(testText);
    
    expect(paragraphElement).toHaveClass('text-slate-700');
    expect(paragraphElement).toHaveClass('leading-relaxed');
    expect(paragraphElement).toHaveClass('mb-4');
  });

  test('passes through other HTML attributes', () => {
    const testId = "my-paragraph";
    render(<Paragraph data-testid={testId} id="paragraph1">{testText}</Paragraph>);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(testText).id).toBe('paragraph1');
  });
});
