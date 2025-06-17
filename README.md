# 🚀 React Component Showcase ✨

Bem-vindo(a) ao **React Component Showcase**! 🎉 Este projeto é um template de site interativo construído com React e Vite, projetado para ajudar iniciantes a entenderem como criar componentes comuns em React. Explore os componentes, veja-os em ação e confira o código-fonte correspondente lado a lado!

## 🎯 Objetivo

O principal objetivo deste projeto é fornecer uma maneira visual e prática para que novos desenvolvedores React possam:

*   👀 Ver exemplos de componentes React renderizados.
*   💻 Entender o código JSX e CSS (ou Tailwind CSS) por trás de cada componente.
*   🛠️ Aprender sobre conceitos fundamentais do React de forma gradual.
*   🎨 Inspirar-se para criar seus próprios componentes incríveis!

## 🛠️ Tecnologias Utilizadas

*   ⚛️ **React:** A biblioteca JavaScript para construir interfaces de usuário.
*   ⚡ **Vite:** Ferramenta de build extremamente rápida para desenvolvimento frontend moderno.
*   🌬️ **Tailwind CSS:** Um framework CSS utility-first para estilização rápida e customizável.
*   🧭 **React Router DOM:** Para navegação e roteamento entre as páginas.
*   ✍️ **React Syntax Highlighter:** Para exibir os blocos de código com destaque de sintaxe.
*   🧩 **PropTypes:** Para validação de tipos das props dos componentes.
*    L **ESLint:** Para manter a qualidade e consistência do código.
*   📦 **npm:** Gerenciador de pacotes.

## 🌟 Funcionalidades Implementadas

*   **Layout Principal Consistente:**
    *   Navbar com navegação responsiva e dropdowns para organização de conteúdo.
    *   Rodapé do site.
*   **Página de Conceitos Fundamentais:**
    *   📚 Explicações sobre "O que é um Componente?", "JSX", "Props", com exemplos de código destacados. (Mais conceitos a serem adicionados!)
*   **Demonstração de Componentes (Semana 1):**
    *   **🏠 Página Inicial:** Uma breve introdução ao showcase.
    *   **✒️ Títulos (`<Heading />`):**
        *   Exemplos de H1, H2, H3 e uma hierarquia de títulos.
        *   Mostra como criar componentes de título simples e estilizados.
    *   **📝 Textos (`<Paragraph />`):**
        *   Demonstração de parágrafos básicos e parágrafos de destaque (lead).
    *   **🖼️ Galeria de Imagens (`<ImageGallery />`):**
        *   Galeria responsiva com efeito de hover e legendas.
    *   **🦶 Rodapé de Exemplo (`<DemoFooter />`):**
        *   Exemplos de rodapés simples e com múltiplas colunas.
*   **Componente `ComponentShowcase`:**
    *   🔄 Um componente reutilizável para exibir a visualização de um componente e seu código JSX/CSS associado, tornando a estrutura das páginas de demonstração limpa e padronizada.

## 🚀 Como Começar

1.  **Clone o repositório (ou crie a partir do template):**
    ```bash
    # Se for um repositório git
    git clone https://github.com/SEU_USUARIO/meu-projeto.git
    cd meu-projeto

    # Ou se você começou com o comando vite:
    # npm create vite@latest meu-projeto -- --template react
    # cd meu-projeto
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    Isso instalará React, Vite, Tailwind CSS, React Router, React Syntax Highlighter e outras dependências necessárias.

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173` (ou uma porta similar indicada no terminal).

## 📁 Estrutura do Projeto (Principais Pastas)
```
react-showcase/
├── public/ # Assets estáticos
├── src/
│ ├── assets/ # Imagens, ícones, etc., processados pelo Vite
│ ├── components/ # Componentes React reutilizáveis
│ │ ├── ComponentShowcase/ # Molde para exibir componentes e código
│ │ ├── CustomFooter/ # Componente de Rodapé demonstrado
│ │ ├── Gallery/ # Componente de Galeria demonstrado
│ │ ├── Layout/ # Componente de Layout principal do site (Navbar, Footer)
│ │ ├── Navbar/ # Componente da Barra de Navegação
│ │ ├── SiteFooter/ # Rodapé do site-template
│ │ └── Typography/ # Componentes de tipografia (Heading, Paragraph)
│ ├── pages/ # Componentes que representam as páginas do site
│ │ ├── ConceptsPage/ # Página de Conceitos Fundamentais
│ │ ├── FooterDemoPage/ # Página de demonstração do Rodapé
│ │ ├── GalleryPage/ # Página de demonstração da Galeria
│ │ ├── HomePage/ # Página Inicial
│ │ ├── TextsPage/ # Página de demonstração de Textos
│ │ └── TitlesPage/ # Página de demonstração de Títulos
│ ├── styles/ # Estilos globais (ex: global.css com Tailwind)
│ ├── App.jsx # Componente raiz, configuração de rotas
│ └── main.jsx # Ponto de entrada da aplicação React
├── tailwind.config.js # Configuração do Tailwind CSS
└── vite.config.js # Configuração do Vite
```

Feito com ❤️ e muito React! Espero que este showcase seja útil em sua jornada de aprendizado! 🌟
