import React from 'react';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('javascript', javascript);

const ComponentShowcase = ({
  title,
  description,
  componentName,
  jsxCode,
  cssCode,
  children
}) => {
  return (
    <div className="mb-12 p-4 sm:p-6 bg-white shadow-xl rounded-lg border border-slate-200">
      {title && (
        <h2 className="text-2xl font-semibold text-sky-700 mb-2">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-slate-600 mb-6">
          {description}
        </p>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-medium text-slate-700 mb-3 pb-2 border-b border-slate-300">
          Visualização: {componentName || "Componente"}
        </h3>
        <div className="bg-slate-50 p-6 rounded-md border border-slate-200 min-h-[100px] flex items-center justify-center">
          {children}
        </div>
      </div>

      {(jsxCode || cssCode) && (
        <div>
          <h3 className="text-xl font-medium text-slate-700 mb-3 pb-2 border-b border-slate-300">
            Código Fonte
          </h3>
          {jsxCode && (
            <div className="mb-6">
              <h4 className="text-md font-semibold text-slate-600 mb-2">
                JSX {componentName ? `(${componentName}.jsx)` : ''}:
              </h4>Spaces
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus} // Use o tema importado
                showLineNumbers // Opcional: mostrar números de linha
                wrapLines={true} // Opcional: quebrar linhas longas
                customStyle={{ // Estilos personalizados para o container do SyntaxHighlighter
                  borderRadius: '0.375rem', // igual a 'rounded-md' do Tailwind
                  padding: '1rem', // igual a 'p-4' do Tailwind
                  fontSize: '0.875rem', // um pouco menor para código
                }}
              >
                {jsxCode.trim()}Spaces
              </SyntaxHighlighter>
              {/* Botão de Copiar Código (a ser implementado depois) */}
            </div>
          )}
          {cssCode && (
            <div>
              <h4 className="text-md font-semibold text-slate-600 mb-2">
                CSS {componentName ? `(${componentName}.module.css ou similar)` : ''}:
              </h4>
              {/* SUBSTITUÍDO AQUI */}
              <SyntaxHighlighter
                language="css"
                style={vscDarkPlus} // Use o mesmo tema ou outro
                showLineNumbers
                wrapLines={true}
                customStyle={{
                  borderRadius: '0.375rem',
                  padding: '1rem',
                  fontSize: '0.875rem',
                }}
              >
                {cssCode.trim()}
              </SyntaxHighlighter>
              {/* Botão de Copiar Código (a ser implementado depois) */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComponentShowcase;
