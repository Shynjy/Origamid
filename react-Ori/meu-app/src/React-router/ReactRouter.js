import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Login from './Login';
import Produto from './Produto';
import RouterError from './RouterError';

// Segunda forma de fazer Rotas aninhadas
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />

        {/* Primeira forma de fazer Rotas aninhadas */}
        {/* <Route path="produto/:id/*" element={<Produto />} /> */}

        {/* Segunda forma de fazer Rotas aninhadas */}
        {/* Dessa forma não é necessário o /* */}
        <Route path="produto/:id" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>

        <Route path="*" element={<RouterError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouter;
