import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ComponentShowcase from './ComponentShowcase';

describe('ComponentShowcase', () => {
  test('renders the main container', () => {
    render(<ComponentShowcase />);
    const containerDiv = screen.getByTestId('component-showcase-container');
    expect(containerDiv).toBeInTheDocument();
    expect(containerDiv).toHaveClass('mb-12 p-4 sm:p-6 bg-white shadow-xl rounded-lg border border-slate-200');
  });

  test('renders children passed to it', () => {
    const childText = 'Hello, I am a child component';
    render(
      <ComponentShowcase>
        <div>{childText}</div>
      </ComponentShowcase>
    );
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  test('renders title when provided', () => {
    const title = 'Test Title';
    render(<ComponentShowcase title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(title).tagName).toBe('H2');
  });

  test('renders description when provided', () => {
    const description = 'Test Description';
    render(<ComponentShowcase description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(description).tagName).toBe('P');
  });

  test('renders component name in visualization header', () => {
    const componentName = 'MyComponent';
    render(<ComponentShowcase componentName={componentName} />);
    expect(screen.getByText(`Visualização: ${componentName}`)).toBeInTheDocument();
  });

  test('renders "Componente" in visualization header if componentName is not provided', () => {
    render(<ComponentShowcase />);
    expect(screen.getByText('Visualização: Componente')).toBeInTheDocument();
  });

  test('renders JSX code block when jsxCode is provided', async () => {
    const jsxCode = '<button>Click Me</button>';
    await act(async () => {
      render(<ComponentShowcase jsxCode={jsxCode} />);
    });
    // The text might be split into multiple spans by the highlighter
    // We look for a code element that contains the trimmed JSX code.
    const codeElements = screen.getAllByRole('code');
    const jsxCodeElement = codeElements.find(el => el.className.includes('language-jsx'));
    expect(jsxCodeElement).toHaveTextContent(jsxCode.trim().replace(/\s+/g, ' '));
    // Check for the JSX code block title
    expect(screen.getByText(/JSX/)).toBeInTheDocument();
  });

  test('renders CSS code block when cssCode is provided', async () => {
    const cssCode = '.button { color: red; }';
    await act(async () => {
      render(<ComponentShowcase cssCode={cssCode} />);
    });
    // The text might be split into multiple spans by the highlighter
    // We look for a code element that contains the trimmed CSS code.
    const codeElement = screen.getByRole('code');
    expect(codeElement).toHaveTextContent(cssCode.trim().replace(/\s+/g, ' '));
    // Check for the CSS code block title
    expect(screen.getByText(/CSS/)).toBeInTheDocument();
  });

  test('renders component name in JSX code block title when provided', async () => {
    const componentName = 'MyButton';
    const jsxCode = '<button>Click Me</button>';
    await act(async () => {
      render(<ComponentShowcase componentName={componentName} jsxCode={jsxCode} />);
    });
    expect(screen.getByText(`JSX (${componentName}.jsx):`)).toBeInTheDocument();
  });

  test('renders component name in CSS code block title when provided', async () => {
    const componentName = 'MyButton';
    const cssCode = '.button { color: red; }';
    await act(async () => {
      render(<ComponentShowcase componentName={componentName} cssCode={cssCode} />);
    });
    expect(screen.getByText(`CSS (${componentName}.module.css ou similar):`)).toBeInTheDocument();
  });

  test('does not render code blocks if no code is provided', () => {
    render(<ComponentShowcase />);
    expect(screen.queryByText('Código Fonte')).not.toBeInTheDocument();
    expect(screen.queryByText(/JSX/)).not.toBeInTheDocument();
    expect(screen.queryByText(/CSS/)).not.toBeInTheDocument();
  });
});
