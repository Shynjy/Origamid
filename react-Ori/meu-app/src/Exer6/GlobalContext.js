import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((resp) => resp.json())
      .then((json) => setProduto(json));
  }, []);

  const limpaProdutos = () => {
    setProduto(null);
  };

  return (
    <GlobalContext.Provider value={{ produto, setProduto, limpaProdutos }}>
      {children}
    </GlobalContext.Provider>
  );
};
