import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';
import Limpar from './Limpar';

const Exer6 = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default Exer6;
