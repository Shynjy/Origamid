import React from 'react';
import Produto from './Produto';

// Solução David

// const Exer5 = () => {
//   const url = 'https://ranekapi.origamid.dev/json/api/produto/';

//   const [dados, setDados] = React.useState(null);

//   function handleFetch(url, nome) {
//     fetch(`${url}${nome}`)
//       .then((resp) => resp.json())
//       .then((json) => setDados(json));
//   }

//   React.useEffect(() => {
//     const pref = window.localStorage.getItem('preferencia');
//     if (pref) {
//       handleFetch(url, pref);
//     }
//   }, []);

//   function handleClick(event) {
//     const nome = event.target.innerText;
//     window.localStorage.setItem('preferencia', nome);
//     handleFetch(url, nome);
//   }

//   const style = {
//     marginRight: '1rem',
//   };

//   return (
//     <>
//       <h2>Preferência: {dados ? dados.nome : 'ainda não registrado'}</h2>
//       <button style={style} onClick={handleClick}>
//         notebook
//       </button>
//       <button onClick={handleClick}>
//         smartphone
//       </button>
//       {dados && (
//         <div>
//           <h2>{dados.nome}</h2>
//           <p>{dados.preco}</p>
//         </div>
//       )}
//     </>
//   );
// };

const Exer5 = () => {
  const style = {
    marginRight: '1rem',
  };

  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocalStorage = window.localStorage.getItem('produto');
    if (produtoLocalStorage != null) setProduto(produtoLocalStorage);
  }, []);

  React.useEffect(() => {
    if (produto != null) {
      window.localStorage.setItem('produto', produto);
    }
  }, [produto]);

  function handleClick(event) {
    setProduto(event.target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={style} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default Exer5;
