// src/pages/ConceptsPage/ConceptsPage.jsx
import React from 'react';
import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';

// Importações para SyntaxHighlighter
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

// --- Definição dos Conteúdos das Perguntas ---
// Pergunta 1: O que é React?
const p1_reactDef = `
React é uma biblioteca JavaScript de código aberto, criada pelo Facebook, usada para construir interfaces de usuário (UIs) interativas e dinâmicas, especialmente para aplicações de página única (Single Page Applications).

A principal distinção entre "biblioteca" e "framework" está no **controle**.

*   Uma **biblioteca** (como o React) é algo que *você chama* no seu código. Você está no controle e decide quando e onde usar as funcionalidades da biblioteca. Por exemplo, você pode usar React para controlar apenas um pequeno widget em uma página existente ou para construir uma aplicação inteira. Você escolhe suas próprias ferramentas para roteamento, gerenciamento de estado global, etc.
*   Um **framework** (como o Angular) é algo que *chama o seu código*. Ele dita a arquitetura da sua aplicação e fornece um conjunto de regras e ferramentas mais rígido. O framework te dá uma estrutura completa, e você preenche as lacunas com sua lógica de negócio.

Em resumo, React foca em uma única coisa e a faz muito bem: a camada de visualização (a UI). Ele não impõe como você deve estruturar o resto da sua aplicação, dando mais flexibilidade ao desenvolvedor.
`.trim();

// Pergunta 2: O que é JSX?
const p2_jsxDef = `
JSX significa JavaScript XML. É uma extensão de sintaxe para JavaScript que nos permite escrever, no mesmo arquivo, uma estrutura parecida com HTML. Não é HTML, mas sim uma forma mais legível e declarativa de criar elementos React.

Nós usamos JSX por algumas razões principais:

1.  **Legibilidade:** É muito mais intuitivo escrever \`<div className="container">\` do que a chamada de função JavaScript equivalente. Isso torna o código mais fácil de ler e visualizar a estrutura do componente.
2.  **Poder do JavaScript:** Dentro do JSX, podemos embutir qualquer expressão JavaScript usando chaves \`{}\`. Isso nos permite criar UIs dinâmicas de forma muito poderosa, como renderizar listas a partir de um array ou mostrar/esconder elementos com base em uma variável.
3.  **Segurança:** O JSX ajuda a prevenir ataques de injeção (XSS - Cross-Site Scripting) porque, por padrão, o React DOM "escapa" (converte para string) qualquer valor embutido no JSX antes de renderizá-lo.

Os navegadores não entendem JSX nativamente. Durante o processo de build da aplicação, uma ferramenta como o **Babel** transpila o código JSX para chamadas de função \`React.createElement()\`.
`.trim();

const p2_jsxExemploJsx = `
const element = <h1 className="title">Olá, Mundo!</h1>;
`.trim();

const p2_jsxExemploJs = `
const element = React.createElement(
  'h1',
  {className: 'title'},
  'Olá, Mundo!'
);
`.trim();

// Pergunta 3: Componentes de Classe vs Função
const p3_classeVsFuncao = `
A principal diferença está na sintaxe e na forma como lidam com estado e ciclo de vida.

*   **Componentes de Classe:** Usam a sintaxe de classes do ES6, estendendo \`React.Component\`. Eles gerenciam o estado com \`this.state\` e \`this.setState()\`, e lidam com efeitos colaterais (como chamadas de API) através de métodos de ciclo de vida, como \`componentDidMount\`, \`componentDidUpdate\` e \`componentWillUnmount\`. O uso do \`this\` pode ser confuso, exigindo \`binds\` em alguns casos.
*   **Componentes de Função:** São funções JavaScript simples. Originalmente, eram "stateless" (sem estado). Com a introdução dos **Hooks** (como \`useState\` e \`useEffect\`) no React 16.8, eles passaram a poder gerenciar estado e efeitos colaterais, tornando-se tão poderosos quanto os componentes de classe.

A comunidade prefere Componentes de Função hoje por vários motivos:

1.  **Menos "Boilerplate":** O código é mais limpo, conciso e fácil de ler sem o \`constructor\`, \`this\` e os métodos de ciclo de vida.
2.  **Lógica Reutilizável:** Hooks permitem extrair e reutilizar lógica com estado (através de Custom Hooks) de uma forma muito mais simples e elegante do que os padrões antigos usados com classes, como Higher-Order Components (HOCs) e Render Props.
3.  **Evita a Complexidade do this:** O \`this\` em JavaScript é uma fonte comum de bugs e confusão. Componentes de função com Hooks eliminam essa necessidade.
`.trim();

// Pergunta 4: Props
const p4_propsDef = `
\`Props\` (abreviação de "properties") são a forma como os componentes React se comunicam. São objetos que carregam informações de um componente pai para um componente filho.

Uma das regras mais importantes do React é que **as props são imutáveis (read-only)**. Um componente filho nunca deve tentar modificar as \`props\` que recebeu. Isso garante um fluxo de dados unidirecional, o que torna a aplicação mais previsível e fácil de depurar. Se um dado precisa ser modificado, a mudança deve ser feita no componente "dono" do dado (geralmente o pai), através do \`state\`.

Para passar um dado do pai para o filho, você o adiciona como um atributo na tag JSX do componente filho, assim como faria com um atributo HTML.
`.trim();

const p4_propsExemplo = `
// Componente Pai
function App() {
  const userName = "Maria";
  return <WelcomeMessage user={userName} />;
}

// Componente Filho
function WelcomeMessage(props) {
  // Acessa o dado via props.user
  return <h1>Bem-vinda, {props.user}!</h1>;
}
`.trim();

// Pergunta 5: State
const p5_stateDef = `
O \`state\` é um objeto que armazena dados que pertencem a um componente específico e que podem mudar ao longo do tempo. Toda vez que o \`state\` de um componente é atualizado (usando a função \`setState\` ou a função de atualização do hook \`useState\`), o React automaticamente re-renderiza o componente para refletir essa mudança na UI.

A diferença fundamental entre \`props\` e \`state\` é o **controle e o fluxo de dados**:

*   \`props\`: São recebidas de um componente pai. São controladas **pelo pai**. O componente filho apenas as lê (são imutáveis para ele). O fluxo é de cima para baixo.
*   \`state\`: É gerenciado e controlado **pelo próprio componente**. É privado e encapsulado. É usado para dados que o componente precisa lembrar e modificar em resposta a interações do usuário ou eventos.

Em resumo:
*   \`props\` ⇒ dados que vêm de fora.
*   \`state\` ⇒ dados que são gerenciados por dentro.

**Exemplo:** Um componente de contador. O número atual de cliques seria o \`state\`, pois ele muda e é controlado pelo próprio contador. O texto do botão, no entanto, poderia ser uma \`prop\` passada de fora.
`.trim();

// Pergunta 6: Virtual DOM
const p6_vdomDef = `
O Virtual DOM (VDOM) é uma representação do DOM real (a árvore de elementos HTML do navegador) mantida em memória pelo React. Ele é basicamente um objeto JavaScript que espelha a estrutura do DOM.

**Como funciona:**

1.  **Renderização Inicial:** Quando um componente é renderizado pela primeira vez, o React cria uma árvore do VDOM e a usa para criar o DOM real na tela.
2.  **Atualização:** Quando o \`state\` de um componente muda, o React cria uma **nova** árvore do VDOM.
3.  **Reconciliação (Diffing):** Em vez de reescrever o DOM real inteiro, o React compara a nova árvore do VDOM com a versão anterior. Esse processo de comparação é chamado de "diffing" (diferenciação).
4.  **Aplicação Mínima:** React calcula o conjunto mínimo de alterações necessárias para fazer o DOM real corresponder à nova árvore do VDOM.
5.  **Batching:** Essas alterações são agrupadas e aplicadas ao DOM real de uma só vez, em um único "batch".

**Vantagens:**

A principal vantagem é a **performance**. A manipulação direta do DOM é uma das operações mais lentas que um navegador pode fazer. Ao usar o VDOM, o React:

*   Minimiza o número de manipulações diretas no DOM, que são custosas.
*   Agrupa (batches) as atualizações, evitando múltiplos "reflows" e "repaints" do layout da página.
*   Abstrai a complexidade da manipulação do DOM, permitindo que nós, desenvolvedores, escrevamos código de forma declarativa ("diga o que você quer na tela"), e o React otimiza o "como fazer".
`.trim();

// Pergunta 7: Keys em Listas
const p7_keysDef = `
As \`keys\` são um atributo especial que você precisa incluir ao criar listas de elementos em React. Elas servem como uma **identidade estável** para cada elemento da lista, ajudando o React a identificar quais itens foram alterados, adicionados ou removidos durante o processo de reconciliação.

**Se você não usar keys**, o React lançará um aviso no console e pode ter que re-renderizar a lista inteira a cada atualização, o que é ineficiente e pode levar a comportamentos inesperados, especialmente com componentes que têm estado próprio.

**Usar o índice do array como key é um anti-padrão** e deve ser evitado, a menos que a lista seja estática (nunca muda de ordem, nunca é filtrada). O problema ocorre quando a lista é dinâmica:

*   **Exemplo do problema:** Imagine uma lista de itens onde você adiciona um novo item no **início**. Todos os itens subsequentes terão seu índice alterado. O React, olhando para a \`key\` (o índice), vai pensar que o item no índice \`0\` é o mesmo de antes e apenas seu conteúdo mudou, quando na verdade é um item totalmente novo. Isso pode levar a bugs sutis, onde o estado de um componente é associado ao item errado, ou o foco de um input é perdido.

A \`key\` ideal é um identificador **único e estável** que vem dos seus dados, como um \`id\` do banco de dados (\`item.id\`).
`.trim();

// Pergunta 8: Renderização Condicional
const p8_condRenderDef = `
Renderização condicional é a prática de renderizar diferentes componentes ou elementos JSX com base em uma ou mais condições, como o estado da aplicação, as \`props\` recebidas ou as permissões de um usuário.
`.trim();

const p8_condRenderExemploTernario = `
function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Bem-vindo de volta!</p> : <p>Por favor, faça o login.</p>}
    </div>
  );
}
`.trim();

const p8_condRenderExemploAnd = `
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Caixa de Entrada</h1>
      {unreadMessages.length > 0 &&
        <h2>
          Você tem {unreadMessages.length} mensagens não lidas.
        </h2>
      }
    </div>
  );
}
`.trim();

// Componente da Página
const ConceptsPage = () => {
  const syntaxHighlighterStyle = {
    borderRadius: '0.375rem',
    padding: '1rem',
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
    border: '1px solid #2d3748', // Borda adicionada
  };

  /**
   * Aplica formatação inline (negrito, itálico, código) a um segmento de texto.
   * Esta é uma versão levemente modificada da sua função original.
   * @param {string} text O texto a ser formatado.
   * @returns {Array<React.ReactNode>} Um array de strings e elementos JSX.
  */
  const parseInlineFormatting = (text) => {
    if (!text) return [''];

    // As regras são aplicadas em ordem. A ordem importa!
    // Por exemplo, **negrito** deve vir antes de *itálico*.
    const inlineRules = [
      { name: 'code_double', regex: /``([^`]+)``/g, tag: 'code' },
      { name: 'code_single', regex: /`([^`]+)`/g, tag: 'code' },
      { name: 'bold', regex: /\*\*([^\*]+)\*\*/g, tag: 'strong' },
      { name: 'italic', regex: /\*([^\*]+)\*/g, tag: 'em' },
    ];

    let segments = [text];

    inlineRules.forEach(({ regex, tag: Tag, name }) => {
      const newSegments = [];
      segments.forEach(segment => {
        // Só processa se for uma string
        if (typeof segment !== 'string') {
          newSegments.push(segment);
          return;
        }

        let lastIndex = 0;
        let match;
        regex.lastIndex = 0; // Reseta o índice da regex
        
        while ((match = regex.exec(segment)) !== null) {
          // Adiciona o texto antes do match
          if (match.index > lastIndex) {
            newSegments.push(segment.substring(lastIndex, match.index));
          }
          // Adiciona o elemento formatado
          // A key usa o nome da regra e o conteúdo para ser mais única
          newSegments.push(<Tag key={`${name}-${newSegments.length}`}>{match[1]}</Tag>);
          lastIndex = regex.lastIndex;
        }

        // Adiciona o texto restante após o último match
        if (lastIndex < segment.length) {
          newSegments.push(segment.substring(lastIndex));
        }
      });
      // Atualiza os segmentos para a próxima regra
      segments = newSegments.filter(s => s !== '');
    });

    return segments;
  };

  /**
   * Converte um texto Markdown em um array de elementos JSX.
   * Suporta parágrafos, listas não ordenadas e títulos.
   * @param {string} markdownText O texto completo em Markdown.
   * @returns {Array<React.ReactNode>} Um array de elementos JSX prontos para renderizar.
  */
  const parseMarkdownToJsx = (markdownText) => {
    if (!markdownText) return null;

    const blocks = [];
    const lines = markdownText.split('\n');
    
    let currentListItems = [];

    // Função para "descarregar" os itens de lista acumulados em uma <ul>
    const flushList = () => {
      if (currentListItems.length > 0) {
        blocks.push(<ul key={`ul-${blocks.length}`}>{currentListItems}</ul>);
        currentListItems = []; // Limpa para a próxima lista
      }
    };

    lines.forEach((line, index) => {
      // 1. Títulos (ex: # Título 1, ## Título 2)
      if (line.startsWith('#')) {
        flushList(); // Se havia uma lista antes, termina ela
        const level = line.match(/^#+/)[0].length;
        const Tag = `h${Math.min(level, 6)}`; // Limita a <h6>
        const content = line.substring(level).trim();
        blocks.push(<Tag key={`h-${index}`}>{parseInlineFormatting(content)}</Tag>);
      
      // 2. Itens de lista não ordenada (ex: * Item)
      } else if (line.startsWith('* ')) {
        const content = line.substring(2); // Remove o '* '
        // Adiciona o <li> formatado ao buffer da lista atual
        currentListItems.push(
          <li key={`li-${index}`}>{parseInlineFormatting(content)}</li>
        );

      // 3. Linha vazia (atua como separador de blocos)
      } else if (line.trim() === '') {
        flushList(); // Termina qualquer lista que estava aberta
        // Não adiciona nada, apenas separa os blocos
      
      // 4. Parágrafo (qualquer outra linha com conteúdo)
      } else {
        flushList(); // Se havia uma lista antes, termina ela
        blocks.push(
          <p key={`p-${index}`}>{parseInlineFormatting(line)}</p>
        );
      }
    });

    // Garante que a última lista seja adicionada se o texto terminar nela
    flushList();

    return blocks;
  };

  const renderSection = (title, content, codeSnippets = []) => (
    <section className="mb-12 border-b border-slate-200 pb-8">
      <Heading level={2} className="!text-2xl !font-semibold !text-sky-700 mb-4">{title}</Heading>
      {typeof content === 'string' && (
        <Paragraph className="mb-4">
          {parseMarkdownToJsx(content)}
        </Paragraph>
      )}
      {Array.isArray(content) && content.map((paragraphString, i) => (
        <Paragraph key={i} className="mb-4">
          {parseMarkdownToJsx(paragraphString)}
        </Paragraph>
      ))}
      {codeSnippets.map((snippet, index) => (
        <div key={index} className="mb-4">
          {snippet.title && <Paragraph className="text-sm font-medium text-slate-600 mb-1">{snippet.title}</Paragraph>}
          <SyntaxHighlighter
            language={snippet.lang || "jsx"}
            style={vscDarkPlus}
            customStyle={syntaxHighlighterStyle}
            showLineNumbers={snippet.showLineNumbers !== false}
          >
            {snippet.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </section>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-10 text-center">
        <Heading level={1} className="!text-4xl !font-bold !text-sky-700 !mb-3">
          Conceitos Fundamentais do React
        </Heading>
        <Paragraph className="!text-xl !text-slate-600">
          Entenda os blocos de construção essenciais para desenvolver com React.
        </Paragraph>
      </header>

      <div className="mb-16">
        <Heading level={2} className="!text-3xl !font-bold text-slate-800 mb-6 pb-2 border-b-2 border-sky-500">
          Fundamentos do React
        </Heading>
        {renderSection("1. O que é React? Biblioteca vs Framework", p1_reactDef)}
        {renderSection("2. O que é JSX?", p2_jsxDef, [
          { title: "Exemplo JSX:", code: p2_jsxExemploJsx },
          { title: "Transpilado para JavaScript:", code: p2_jsxExemploJs, lang: "javascript" }
        ])}
        {renderSection("3. Componentes de Classe vs Função", p3_classeVsFuncao)}
        {renderSection("4. O que são props?", p4_propsDef, [
          { title: "Exemplo de passagem de props:", code: p4_propsExemplo }
        ])}
        {renderSection("5. O que é state (estado)?", p5_stateDef)}
        {renderSection("6. O que é o Virtual DOM?", p6_vdomDef)}
        {renderSection("7. Qual a importância das keys em listas?", p7_keysDef)}
        {renderSection("8. O que é \"renderização condicional\"?", p8_condRenderDef, [
          { title: "1. Operador Ternário:", code: p8_condRenderExemploTernario },
          { title: "2. Operador Lógico AND (&&):", code: p8_condRenderExemploAnd }
        ])}
      </div>

      <div className="mt-12 p-6 bg-amber-100 border-l-4 border-amber-500 text-amber-700 rounded-md">
        <Heading level={3} className="!text-amber-800 !mb-2">Próximos Conteúdos</Heading>
        <Paragraph className="!text-amber-700">
          Aguarde 👀👀👀
        </Paragraph>
      </div>
    </div>
  );
};

export default ConceptsPage;
