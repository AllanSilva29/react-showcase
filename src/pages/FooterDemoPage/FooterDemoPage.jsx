import React from 'react';
import ComponentShowcase from '../../components/ComponentShowcase/ComponentShowcase';
import DemoFooter from '../../components/CustomFooter/DemoFooter';
import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';

// Dados de exemplo para os rodapés
const footerLinksExample = [
  { url: '#/termos', text: 'Termos de Uso' },
  { url: '#/privacidade', text: 'Privacidade' },
  { url: '#/contato', text: 'Contato' },
];

const socialLinksExample = [
  { platform: 'facebook', url: 'https://facebook.com', label: 'Nossa página no Facebook' },
  { platform: 'twitter', url: 'https://twitter.com', label: 'Nosso perfil no Twitter' },
  { platform: 'instagram', url: 'https://instagram.com', label: 'Nosso perfil no Instagram' },
];


// --- Código JSX de Exemplo SIMPLIFICADO para Rodapé Básico ---
const simpleFooterJsxCode = `
// components/RodapeSimples.jsx (Exemplo)

const RodapeSimples = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 p-6 text-center">
      <p className="text-sm">
        © {anoAtual} Nome da Sua Empresa. Todos os direitos reservados.
      </p>
      <div className="mt-2">
        <a href="/sobre" className="text-gray-400 hover:text-white px-2 text-sm">Sobre Nós</a>
        <a href="/contato" className="text-gray-400 hover:text-white px-2 text-sm">Contato</a>
      </div>
    </footer>
  );
};

export default RodapeSimples;
`.trim();

// --- Código JSX de Exemplo SIMPLIFICADO para Rodapé com Colunas ---
const multiColumnFooterJsxCode = `
// components/RodapeDetalhado.jsx (Exemplo)
// Para ícones, você pode usar SVGs ou uma biblioteca como 'react-icons'.
// Ex: import { FaFacebook, FaTwitter } from 'react-icons/fa';

const RodapeDetalhado = () => {
  const anoAtual = new Date().getFullYear();
  const linksNavegacao = [
    { url: '#/termos', texto: 'Termos' },
    { url: '#/privacidade', texto: 'Privacidade' },
  ];
  const linksSociais = [
    { nome: 'FB', url: '#facebook', label: 'Facebook' }, // Substitua 'FB' pelo seu ícone
    { nome: 'TW', url: '#twitter', label: 'Twitter' },   // Substitua 'TW' pelo seu ícone
  ];

  return (
    <footer className="bg-slate-700 text-slate-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Coluna 1: Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-2">Minha Marca</h3>
          <p className="text-sm">
            © {anoAtual} Minha Marca.
            <br />
            Construindo o futuro, um pixel por vez.
          </p>
        </div>

        {/* Coluna 2: Links Úteis */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white mb-2">Links Úteis</h4>
          <nav className="flex flex-col space-y-1">
            {linksNavegacao.map(link => (
              <a key={link.texto} href={link.url} className="text-sm hover:text-sky-400 transition-colors">
                {link.texto}
              </a>
            ))}
            <a href="#/blog" className="text-sm hover:text-sky-400 transition-colors">Blog</a>
          </nav>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-white mb-2">Siga-nos</h4>
          <div className="flex justify-center md:justify-start space-x-3">
            {linksSociais.map(social => (
              <a
                key={social.nome}
                href={social.url}
                aria-label={social.label}
                className="text-xl hover:text-sky-400 transition-colors"
              >
                {/* Em um projeto real, aqui iria um componente de ícone SVG */}
                {social.nome}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 pt-8 mt-8 border-t border-slate-600">
        Rodapé construído com React e Tailwind CSS.
      </div>
    </footer>
  );
};

export default RodapeDetalhado;
`.trim();

const FooterDemoPage = () => {
  return (
    <div>
      <header className="mb-10">
        <Heading level={1} className="!text-sky-700 !mb-2">
          Componente: Rodapé (Footer)
        </Heading>
        <Paragraph className="!text-lg !text-slate-600">
          O rodapé é uma seção crucial em muitas páginas web, contendo informações
          de copyright, links de navegação e contatos.
        </Paragraph>
      </header>

      <ComponentShowcase
        title="Rodapé Simples"
        description="Um rodapé básico com informações de copyright e alguns links."
        componentName="RodapeSimples"
        jsxCode={simpleFooterJsxCode}
      >
        {/* Visualização com o componente interno */}
        <DemoFooter
          copyrightText={`© ${new Date().getFullYear()} Site Exemplo Simples. Todos os direitos.`}
          links={[{url: '#/sobre', text: 'Sobre Nós'}, {url: '#/contato', text: 'Contato'}]}
          className="!bg-gray-800 !text-gray-300 !p-6 !text-center" // Override para combinar com o exemplo
          textClassName="!text-sm"
          linkClassName="!text-gray-400 hover:!text-white !px-2 !text-sm"
        />
      </ComponentShowcase>

      <ComponentShowcase
        title="Rodapé Detalhado com Colunas"
        description="Um rodapé mais elaborado, organizado em colunas, com links de navegação e sociais."
        componentName="RodapeDetalhado"
        jsxCode={multiColumnFooterJsxCode}
      >
        <DemoFooter
          copyrightText="Minha Marca © Alguns Direitos Reservados."
          links={footerLinksExample}
          socialLinks={socialLinksExample}
        />
      </ComponentShowcase>
    </div>
  );
};

export default FooterDemoPage;
