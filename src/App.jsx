import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import TitlesPage from './pages/TitlesPage/TitlesPage';
import TextsPage from './pages/TextsPage/TextsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import FooterDemoPage from './pages/FooterDemoPage/FooterDemoPage';
import ConceptsPage from './pages/ConceptsPage/ConceptsPage'; // Importar

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rotas da Semana 1 (e HomePage) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/titulos" element={<TitlesPage />} />
          <Route path="/textos" element={<TextsPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/rodape-exemplo" element={<FooterDemoPage />} />

          {/* Rota para Conceitos Fundamentais */}
          <Route path="/conceitos" element={<ConceptsPage />} /> {/* Nova Rota */}

          {/* Placeholders para rotas das Semanas 2, 3, 4 - Ex:
          <Route path="/semana2" element={<Semana2HomePage />} />
          <Route path="/semana2/componenteA" element={<Semana2ComponenteAPage />} />
          */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;