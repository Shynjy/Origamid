import React from 'react';
import Titulo from './Titulo';

const Produtos = ({ dados }) => {
  return (
    <>
      <Titulo>Produtos</Titulo>
      {dados.map((p, i) => {
        return (
          <div
            key={p.nome + i}
            style={{
              border: 'solid 1px black',
              padding: '1rem',
              margin: '1rem 0',
            }}
          >
            <p>{p.nome}</p>
            <ul>
              {p.propriedades.map((v, i) => {
                return <li key={v + i}>{v}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Produtos;