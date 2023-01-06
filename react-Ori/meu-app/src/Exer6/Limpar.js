import React from 'react';
import { GlobalContext } from './GlobalContext';
const Limpar = () => {
  const { limpaProdutos } = React.useContext(GlobalContext);
  return <button onClick={limpaProdutos}>Limpar</button>;
};

export default Limpar;
