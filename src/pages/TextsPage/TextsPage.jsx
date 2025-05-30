import React from 'react';
import ComponentShowcase from '../../components/ComponentShowcase/ComponentShowcase';
import Paragraph from '../../components/Typography/Paragraph';
import Heading from '../../components/Typography/Heading';

// Variáveis de texto para reutilização
const loremIpsumShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const loremIpsumMedium = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
const outroParagrafoTexto = `Outro parágrafo para mostrar o espaçamento. ${loremIpsumMedium.substring(0,100)}...`;

// --- Código JSX de Exemplo SIMPLIFICADO para Parágrafo Básico ---
// Refletindo a visualização com dois parágrafos
const simpleParagraphJsxCode = `
// components/MeusParagrafos.jsx (Exemplo de nome de arquivo)

// Você pode ter múltiplos parágrafos em sequência.
// Cada um será um bloco de texto separado.

const TextoCorpo = ({ children }) => (
  <p className="text-base text-slate-700 leading-relaxed mb-4">
    {children}
  </p>
);

const MeusParagrafos = () => {
  return (
    <>
      <TextoCorpo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TextoCorpo>
      <TextoCorpo>
        Outro parágrafo para mostrar o espaçamento. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo co...
      </TextoCorpo>
    </>
  );
};

export default MeusParagrafos;

// Para usar em outra página:
// import MeusParagrafos from './components/MeusParagrafos';
// ...
// <MeusParagrafos />
`.trim();

// --- Código JSX de Exemplo SIMPLIFICADO para Parágrafo de Destaque (Lead) ---
// Refletindo a visualização com um parágrafo de destaque e um normal
const leadParagraphJsxCode = `
// components/IntroducaoComDestaque.jsx (Exemplo)

const ParagrafoDestaque = ({ children }) => (
  <p className="text-lg text-slate-600 font-light mb-6 leading-relaxed">
    {children}
  </p>
);

const ParagrafoNormal = ({ children }) => (
  <p className="text-base text-slate-700 leading-relaxed mb-4">
    {children}
  </p>
);

const IntroducaoComDestaque = () => {
  return (
    <>
      <ParagrafoDestaque>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </ParagrafoDestaque>
      <ParagrafoNormal>
        Este parágrafo subsequente volta ao estilo normal para contraste.
      </ParagrafoNormal>
    </>
  );
};

export default IntroducaoComDestaque;
`.trim();

const TextsPage = () => {
  return (
    <div>
      <header className="mb-10">
        <Heading level={1} className="!text-sky-700 !mb-2">
          Componentes: Textos
        </Heading>
        <Paragraph className="!text-lg !text-slate-600">
          Textos são a base da comunicação. Veja como criar componentes de parágrafo
          versáteis e bem formatados para diferentes necessidades.
        </Paragraph>
      </header>

      <ComponentShowcase
        title="Parágrafo Básico"
        description="O bloco de texto padrão, usado para a maior parte do conteúdo escrito. Veja como usar múltiplos parágrafos."
        componentName="MeusParagrafos" // Atualizado para refletir o exemplo
        jsxCode={simpleParagraphJsxCode}
      >
        {/* A visualização aqui é feita com nosso componente Paragraph interno */}
        <Paragraph>{loremIpsumShort}</Paragraph>
        <Paragraph>{outroParagrafoTexto}</Paragraph>
      </ComponentShowcase>

      <ComponentShowcase
        title="Parágrafo de Destaque (Lead)"
        description="Um parágrafo introdutório com maior destaque visual, seguido por um parágrafo normal."
        componentName="IntroducaoComDestaque" // Atualizado
        jsxCode={leadParagraphJsxCode}
      >
        <Paragraph className="!text-lg !text-slate-600 !font-light !mb-6">
          {loremIpsumMedium}
        </Paragraph>
        <Paragraph>
          Este parágrafo subsequente volta ao estilo normal para contraste.
        </Paragraph>
      </ComponentShowcase>
    </div>
  );
};

export default TextsPage;