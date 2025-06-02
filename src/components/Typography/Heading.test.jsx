import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading'; // Adjust path as necessary

describe('Heading Component', () => {
  const testText = 'Hello World';

  // Test rendering different heading levels
  test.each([
    [1, 'h1'],
    [2, 'h2'],
    [3, 'h3'],
    [4, 'h4'],
    [5, 'h5'],
    [6, 'h6'],
  ])('renders level %s as <%s> element with correct text', (level, expectedTag) => {
    render(<Heading level={level}>{testText}</Heading>);
    const headingElement = screen.getByText(testText);
    expect(headingElement.tagName.toLowerCase()).toBe(expectedTag);
    expect(headingElement).toBeInTheDocument();
  });

  // Test default heading level
  test('defaults to <h1> if level prop is not provided', () => {
    render(<Heading>{testText}</Heading>);
    const headingElement = screen.getByText(testText);
    expect(headingElement.tagName.toLowerCase()).toBe('h1');
  });

  // Test custom className
  test('applies custom className along with default classes', () => {
    const customClass = 'my-custom-heading';
    render(<Heading level={1} className={customClass}>{testText}</Heading>);
    const headingElement = screen.getByText(testText);
    expect(headingElement).toHaveClass(customClass);
    // Check for a default class for H1 to ensure it's also there
    expect(headingElement).toHaveClass('text-4xl'); // From levelClasses[1]
  });

  // Test invalid level props (clamping behavior)
  test('renders <h1> for level={0} (clamped to 1)', () => {
    render(<Heading level={0}>{testText}</Heading>);
    const headingElement = screen.getByText(testText);
    expect(headingElement.tagName.toLowerCase()).toBe('h1');
  });

  test('renders <h6> for level={7} (clamped to 6)', () => {
    render(<Heading level={7}>{testText}</Heading>);
    const headingElement = screen.getByText(testText);
    expect(headingElement.tagName.toLowerCase()).toBe('h6');
  });
  
  test('renders <h1> for level={-1} (clamped to 1)', () => {
    render(<Heading level={-1}>{testText}</Heading>);
    const headingElement = screen.getByText(testText);
    expect(headingElement.tagName.toLowerCase()).toBe('h1');
  });

  test('renders <h1> for level={null} (uses default level 1)', () => {
    // Passing null should trigger defaultProp usage for level
    render(<Heading level={null}>{testText}</Heading>);
    const headingElement = screen.getByText(testText);
    expect(headingElement.tagName.toLowerCase()).toBe('h1');
  });

  // Test that default classes are applied correctly for a specific level (e.g. h2)
  test('applies correct default classes for a given level (e.g., h2)', () => {
    render(<Heading level={2}>{testText}</Heading>);
    const headingElement = screen.getByText(testText);
    expect(headingElement).toHaveClass('text-3xl'); // From levelClasses[2]
    expect(headingElement).toHaveClass('font-semibold'); // From levelClasses[2]
    expect(headingElement).toHaveClass('text-slate-700'); // From levelClasses[2]
  });
});
