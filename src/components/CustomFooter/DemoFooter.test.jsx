import React from 'react';
import { render, screen } from '@testing-library/react';
import DemoFooter from './DemoFooter';

describe('DemoFooter', () => {
  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} Minha Empresa Inc. Todos os direitos reservados.`;

  test('renders with default props (copyright text)', () => {
    render(<DemoFooter />);
    expect(screen.getByText(defaultCopyright)).toBeInTheDocument();
  });

  test('renders correct copyright text when copyrightText prop is provided', () => {
    const customCopyright = '© 2024 Test Company. All rights reserved.';
    render(<DemoFooter copyrightText={customCopyright} />);
    expect(screen.getByText(customCopyright)).toBeInTheDocument();
    expect(screen.queryByText(defaultCopyright)).not.toBeInTheDocument();
  });

  test('renders navigation links when links prop is provided', () => {
    const navLinks = [
      { url: '/about', text: 'About Us' },
      { url: '/contact', text: 'Contact', external: true },
    ];
    render(<DemoFooter links={navLinks} />);
    
    const aboutLink = screen.getByText('About Us');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(aboutLink).toHaveAttribute('target', '_self');

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
    expect(contactLink).toHaveAttribute('target', '_blank');
    expect(contactLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('does not render navigation if links prop is empty or not provided', () => {
    render(<DemoFooter />);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument(); // <nav> element

    render(<DemoFooter links={[]} />);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  test('renders social media links when socialLinks prop is provided', () => {
    const socialMediaLinks = [
      { platform: 'twitter', url: 'https://twitter.com/test', label: 'Twitter Profile' },
      { platform: 'facebook', url: 'https://facebook.com/test', label: 'Facebook Page' },
    ];
    render(<DemoFooter socialLinks={socialMediaLinks} />);

    const twitterLink = screen.getByLabelText('Twitter Profile');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/test');
    expect(twitterLink.querySelector('.icon-twitter')).toHaveTextContent('T');

    const facebookLink = screen.getByLabelText('Facebook Page');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com/test');
    expect(facebookLink.querySelector('.icon-facebook')).toHaveTextContent('F');
  });

  test('does not render social media links if socialLinks prop is empty or not provided', () => {
    render(<DemoFooter />);
    // Check for one of the social link's aria-label or a common parent
    expect(screen.queryByLabelText(/Profile|Page/)).not.toBeInTheDocument();
    
    render(<DemoFooter socialLinks={[]} />);
    expect(screen.queryByLabelText(/Profile|Page/)).not.toBeInTheDocument();
  });

  test('applies custom className to the footer element', () => {
    const customClass = 'my-custom-footer-class';
    render(<DemoFooter className={customClass} />);
    const footerElement = screen.getByRole('contentinfo'); // footer role
    expect(footerElement).toHaveClass(customClass);
    expect(footerElement).toHaveClass('bg-slate-700'); // Default class should still be there
  });

  test('applies custom textClassName to the copyright text container', () => {
    const customTextClass = 'my-custom-text-class';
    render(<DemoFooter copyrightText="Test" textClassName={customTextClass} />);
    const copyrightDiv = screen.getByText('Test').closest('div');
    expect(copyrightDiv).toHaveClass(customTextClass);
    expect(copyrightDiv).toHaveClass('text-sm'); // Default class
  });

  test('applies custom linkClassName to navigation links', () => {
    const customLinkClass = 'my-custom-nav-link';
    const navLinks = [{ url: '/test', text: 'Test Link' }];
    render(<DemoFooter links={navLinks} linkClassName={customLinkClass} />);
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toHaveClass(customLinkClass);
    expect(linkElement).toHaveClass('hover:text-white'); // Default class
  });

  test('applies custom socialIconClassName to social media links', () => {
    const customSocialClass = 'my-custom-social-icon';
    const socialMediaLinks = [{ platform: 'test', url: '#', label: 'Test Social' }];
    render(<DemoFooter socialLinks={socialMediaLinks} socialIconClassName={customSocialClass} />);
    const socialLinkElement = screen.getByLabelText('Test Social');
    expect(socialLinkElement).toHaveClass(customSocialClass);
    expect(socialLinkElement).toHaveClass('text-xl'); // Default class
  });
});
