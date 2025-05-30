// src/pages/TitlesPage/TitlesPage.jsx
import React from 'react';
import ComponentShowcase from '../../components/ComponentShowcase/ComponentShowcase';
import Heading from '../../components/Typography/Heading'; // Nosso componente interno!

// --- Código JSX para Exemplo de Título H1 ---
const exemploH1JsxCode = `
// components/MeuTituloH1.jsx (Exemplo)

const MeuTituloH1 = () => {
  return (
    <h1 className="text-5xl font-bold text-slate-800 mb-3">
      Este é um Título H1 (Renderizado)
    </h1>
  );
};

export default MeuTituloH1;

// Para usar:
// import MeuTituloH1 from './components/MeuTituloH1';
// <MeuTituloH1 />
`.trim();

// --- Código JSX para Exemplo de Título H2 ---
const exemploH2JsxCode = `
// components/MeuTituloH2.jsx (Exemplo)

const MeuTituloH2 = () => {
  return (
    <h2 className="text-4xl font-semibold text-slate-700 mb-2">
      Este é um Título H2 (Renderizado)
    </h2>
  );
};

export default MeuTituloH2;
`.trim();

// --- Código JSX para Exemplo de Título H3 Estilizado ---
const exemploH3EstilizadoJsxCode = `
// components/MeuTituloH3Estilizado.jsx (Exemplo)

const MeuTituloH3Estilizado = () => {
  return (
    <h3 className="text-3xl font-medium text-sky-600 italic mb-2">
      Este é um Título H3 Estilizado (Renderizado)
    </h3>
  );
};

export default MeuTituloH3Estilizado;
`.trim();

// --- Código JSX para Exemplo de Hierarquia de Títulos ---
const exemploHierarquiaJsxCode = `
// components/MinhaHierarquiaDeTitulos.jsx (Exemplo)

// Componentes individuais para cada nível de título:
const TituloH1 = () => <h1 className="text-5xl font-bold text-slate-800 mb-3">Este é um Título H1 (Level 1)</h1>;
const TituloH2 = () => <h2 className="text-4xl font-semibold text-slate-700 mb-2">Este é um Título H2 (Level 2)</h2>;
const TituloH3 = () => <h3 className="text-3xl font-medium text-slate-600 mb-2">Este é um Título H3 (Level 3)</h3>;
const TituloH4 = () => <h4 className="text-2xl font-medium text-slate-500 mb-2">Este é um Título H4 (Level 4)</h4>;

const MinhaHierarquiaDeTitulos = () => {
  return (
    <>
      <TituloH1 />
      <TituloH2 />
      <TituloH3 />
      <TituloH4 />
    </>
  );
};

export default MinhaHierarquiaDeTitulos;
`.trim();


const TitlesPage = () => {
  return (
    <div>
      <header className="mb-10">
        <Heading level={1} className="!text-sky-700 !mb-2">
          Componentes: Títulos (H1-H6)
        </Heading>
        <p className="text-lg text-slate-600">
          Títulos (headings) são usados para criar hierarquia e estrutura no seu conteúdo.
          Veja exemplos de como criar componentes de título simples e estilizá-los com Tailwind CSS.
        </p>
      </header>

      <ComponentShowcase
        title="Exemplo de Título Nível 1 (H1)"
        description="Ideal para o título principal da página. Grande e em destaque."
        componentName="MeuTituloH1"
        jsxCode={exemploH1JsxCode}
      >
        <Heading level={1}>Este é um Título H1 (Renderizado)</Heading>
      </ComponentShowcase>

      <ComponentShowcase
        title="Exemplo de Título Nível 2 (H2)"
        description="Para seções importantes dentro da página."
        componentName="MeuTituloH2"
        jsxCode={exemploH2JsxCode}
      >
        <Heading level={2}>Este é um Título H2 (Renderizado)</Heading>
      </ComponentShowcase>

      <ComponentShowcase
        title="Exemplo de Título Nível 3 (H3) - Estilizado"
        description="Para subseções, aqui com uma cor e estilo de fonte diferentes."
        componentName="MeuTituloH3Estilizado"
        jsxCode={exemploH3EstilizadoJsxCode}
      >
        <Heading level={3} className="!text-sky-600 !italic">
          Este é um Título H3 Estilizado (Renderizado)
        </Heading>
      </ComponentShowcase>

      <ComponentShowcase
        title="Hierarquia de Títulos (H1-H4)"
        description="Use diferentes níveis de títulos para estruturar seu conteúdo. Veja como eles se parecem juntos e como você poderia codificá-los."
        componentName="MinhaHierarquiaDeTitulos"
        jsxCode={exemploHierarquiaJsxCode}
      >
        <>
          <Heading level={1}>Este é um Título H1 (Level 1)</Heading>
          <Heading level={2}>Este é um Título H2 (Level 2)</Heading>
          <Heading level={3}>Este é um Título H3 (Level 3)</Heading>
          <Heading level={4}>Este é um Título H4 (Level 4)</Heading>
        </>
      </ComponentShowcase>
    </div>
  );
};

export default TitlesPage;