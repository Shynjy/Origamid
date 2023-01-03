import React, { useState } from 'react';
import Produtos from './Produtos';

const Exer4 = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);
  const url = 'https://ranekapi.origamid.dev/json/api/produto/';

  const style = {
    marginRight: '1rem',
  };

  async function handleClick(event) {
    setCarregando(true);
    const resp = await fetch(`${url}${event.target.innerText}`);
    const json = await resp.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={style} onClick={handleClick}>
        notebook
      </button>
      <button style={style} onClick={handleClick}>
        smartphone
      </button>
      <button onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados} />}
    </div>
  );
};

export default Exer4;
