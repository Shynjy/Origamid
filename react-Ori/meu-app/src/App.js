import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// Hooks Criados
import useLocalStorage from './hooks/useLocalStorage';

// JSX 1
// const App = () => {
//   const nome = "David";

//   return <>
//     <p>{nome}</p>
//   </>;
// };

// Eventos

// const App = () => {
//   function handleClick(event) {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.innerText);
//   }

//   return <button onClick={handleClick}>Click</button>;
// };

// Props do component

// const Titulo = ({ cor, children }) => {
//   return <h1 style={{ color: cor }}>{children}</h1>;
// };

// // Componentes

// const App = () => {
//   const [ativo, setAtivo] = React.useState(true);

//   function handleClick() {
//     setAtivo(!ativo);
//   }

//   return (
//     <div>
//       <Header />
//       <Titulo cor="red">Título UM</Titulo>
//       App
//       <div style={{ margin: '1rem 0' }}>
//         <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default App;
