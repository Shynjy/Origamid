import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  if (global.produto === null) return null;
  return (
    <div>
      Produto:{' '}
      {global.produto.map((prod, i) => (
        <li key={prod + i}>{prod.nome}</li>
      ))}
    </div>
  );
};

export default Produto;
