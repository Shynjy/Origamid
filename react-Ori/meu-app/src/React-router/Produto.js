import React from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

// Primeira forma de fazer Rotas aninhadas
// import ProdutoAvaliacao from './ProdutoAvaliacao';
// import ProdutoCustomizado from './ProdutoCustomizado';
// import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <Link to="/">Voltar</Link>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="" end>
          Descrição
        </NavLink>
        {'  '}
        <NavLink to="avaliacao">Avaliação</NavLink> {'  '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>

      {/* Primeira forma de fazer Rotas aninhadas */}
      {/* <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes> */}

      {/* Segunda forma de fazer Rotas aninhadas */}
      {/* O Outlet trás o componente para essa posição */}
      <Outlet />
    </div>
  );
};

export default Produto;
