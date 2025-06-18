import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Layout from './Layout';

// Mock Navbar component
vi.mock('../Navbar/Navbar', () => ({
  default: () => <div data-testid="mocked-navbar">Mocked Navbar</div>,
}));

// Mock SiteFooter component
vi.mock('../SiteFooter/SiteFooter', () => ({
  default: () => <div data-testid="mocked-sitefooter">Mocked SiteFooter</div>,
}));

describe('Layout', () => {
  test('renders the mocked Navbar', () => {
    render(<Layout />);
    expect(screen.getByTestId('mocked-navbar')).toBeInTheDocument();
    expect(screen.getByText('Mocked Navbar')).toBeInTheDocument();
  });

  test('renders children passed to it', () => {
    const childText = 'Hello, I am the child content!';
    render(
      <Layout>
        <div>{childText}</div>
      </Layout>
    );
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  test('renders the mocked SiteFooter', () => {
    render(<Layout />);
    expect(screen.getByTestId('mocked-sitefooter')).toBeInTheDocument();
    expect(screen.getByText('Mocked SiteFooter')).toBeInTheDocument();
  });

  test('renders Navbar, children, and Footer in order', () => {
    const childText = 'Child Content';
    const { container } = render(
      <Layout>
        <p>{childText}</p>
      </Layout>
    );

    const mainLayoutDiv = container.firstChild;
    // Use .children to get only element nodes, skipping text nodes (whitespace, comments)
    expect(mainLayoutDiv.children[0]).toHaveAttribute('data-testid', 'mocked-navbar');
    
    const mainElement = mainLayoutDiv.children[1];
    expect(mainElement.tagName).toBe('MAIN');
    expect(screen.getByText(childText)).toBeInTheDocument(); // verify child is present
    expect(mainElement).toContainElement(screen.getByText(childText)); // verify child is within main

    expect(mainLayoutDiv.children[2]).toHaveAttribute('data-testid', 'mocked-sitefooter');
  });
});
