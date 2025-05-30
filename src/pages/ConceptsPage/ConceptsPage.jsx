import React from 'react';
import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';

// Importações para SyntaxHighlighter
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Ou seu tema preferido
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

const ConceptsPage = () => {
    const oQueEComponenteJsx = `
  // Um componente React é como um bloco de construção para sua UI.
  // É uma função JavaScript (ou classe) que retorna JSX.
  // Exemplo de um componente funcional simples:
  function MensagemBoasVindas(props) {
     return <h1>Olá, {props.nome}!</h1>;
  }
  // Como usar este componente em outro lugar:
  // const App = () => {
  //    return <MensagemBoasVindas nome="Usuário" />;
  // }
  // Resultado: <h1>Olá, Usuário!</h1>
  `.trim();
  const oQueEJSXJsx = `
  // JSX significa JavaScript XML.
  // É uma extensão de sintaxe para JavaScript que se parece muito com HTML.
  // O React usa JSX para descrever como a interface do usuário (UI) deve parecer.
  // Exemplo de JSX:
  const meuElemento = <h1>Olá, mundo do JSX!</h1>;
  // Por baixo dos panos, o Babel (um compilador JavaScript)
  // transforma o JSX em chamadas de função React.createElement().
  // O exemplo acima se torna algo como:
  // const meuElemento = React.createElement('h1', null, 'Olá, mundo do JSX!');
  // Você pode embutir expressões JavaScript dentro do JSX usando chaves {}:
  const nome = "React Developer";
  const elementoComVariavel = <p>Meu nome é {nome}.</p>;
  // Atributos em JSX usam camelCase (ex: className em vez de class):
  const elementoComClasse = <div className="container">Conteúdo</div>;
  // JSX torna o código React mais legível e fácil de escrever.
  `.trim();
  const comoPassarPropsJsx = `
  // 'Props' (abreviação de propriedades) são como argumentos que você passa
  // para seus componentes React.
  // Componente que recebe props 'imagemUrl' e 'legenda':
  function CartaoDeImagem(props) {
    return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
        <img src={props.imagemUrl} alt="Exemplo" style={{ width: '100%' }} />
        <p>{props.legenda || 'Sem legenda'}</p>
    </div>
  );
  }
  // Usando o componente e passando props:
  // <CartaoDeImagem
  //    imagemUrl="https://via.placeholder.com/150"
  //    legenda="Imagem de Exemplo"
  // />
  `.trim();
  // Estilos para o SyntaxHighlighter (pode ser reutilizado)
    const syntaxHighlighterStyle = {
      borderRadius: '0.375rem', // rounded-md
      padding: '1rem',         // p-4
      fontSize: '0.875rem',    // text-sm
      marginBottom: '1.5rem',  // mb-6
    };
  
    return (
      <div className="max-w-3xl mx-auto"> {/* Container para melhor legibilidade */}
        <header className="mb-10">
          <Heading level={1} className="!text-sky-700 !mb-2">
            Conceitos Fundamentais do React
          </Heading>
          <Paragraph className="!text-lg !text-slate-600">
            Entenda os blocos de construção essenciais para desenvolver com React.
          </Paragraph>
        </header>
  
        <section className="mb-12">
          <Heading level={2} className="mb-4">O que é um Componente?</Heading>
          <Paragraph className="mb-4">
            Em React, UIs são construídas a partir de pequenas peças reutilizáveis chamadas componentes.
            Pense neles como funções JavaScript que retornam elementos React (que descrevem o que deve aparecer na tela).
            Os componentes podem ser simples como um botão, ou complexos como uma página inteira.
          </Paragraph>
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={syntaxHighlighterStyle}
            showLineNumbers
          >
            {oQueEComponenteJsx}
          </SyntaxHighlighter>
        </section>
  
        <section className="mb-12">
          <Heading level={2} className="mb-4">O que é JSX?</Heading>
          <Paragraph className="mb-4">
            JSX é uma extensão de sintaxe para JavaScript que permite escrever marcação semelhante a HTML
            diretamente em seus arquivos JavaScript. O React não exige o uso de JSX, mas a maioria
            dos desenvolvedores o considera útil como um auxílio visual ao trabalhar com UI dentro do código JavaScript.
            Ele também permite que o React mostre mensagens de erro e aviso mais úteis.
          </Paragraph>
          <Paragraph className="mb-4">
            Por baixo dos panos, o JSX é transformado em chamadas de função `React.createElement()`
            por um compilador como o Babel antes de ser executado no navegador.
          </Paragraph>
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={syntaxHighlighterStyle}
            showLineNumbers
          >
            {oQueEJSXJsx}
          </SyntaxHighlighter>
        </section>
  
        <section className="mb-12">
          <Heading level={2} className="mb-4">Props: Passando Dados para Componentes</Heading>
          <Paragraph className="mb-4">
            "Props" (abreviação de propriedades) são a forma como você passa dados de um componente pai
            para um componente filho. Elas tornam os componentes dinâmicos e configuráveis.
            Props são somente leitura; um componente nunca deve modificar as props que recebe.
          </Paragraph>
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={syntaxHighlighterStyle}
            showLineNumbers
          >
            {comoPassarPropsJsx}
          </SyntaxHighlighter>
        </section>
      </div>
    );
  };
  
export default ConceptsPage;
