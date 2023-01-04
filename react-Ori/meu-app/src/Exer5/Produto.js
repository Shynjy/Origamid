import React from 'react';

const Produto = ({ produto }) => {
  const url = 'https://ranekapi.origamid.dev/json/api/produto/';
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto != null)
      fetch(`${url}${produto}`)
        .then((resp) => resp.json())
        .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
    </div>
  );
};

export default Produto;
