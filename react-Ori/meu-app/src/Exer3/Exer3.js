import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

// Solução David

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const { pathname } = window.location;

let Pagina;
if (pathname === '/') {
  Pagina = Home;
} else {
  Pagina = Produtos;
}

const Exer3 = () => {
  return (
    <>
      <Header />
      <Pagina dados={produtos} />
    </>
  );
};

export default Exer3;
