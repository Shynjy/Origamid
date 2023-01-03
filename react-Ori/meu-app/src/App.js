import React from 'react';
import Header from './Header';
import Footer from './Footer';

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

const Titulo = ({ cor, children }) => {
  return <h1 style={{ color: cor }}>{children}</h1>;
};

// // Componentes

const App = () => {
  return (
    <div>
      <Header />
      <Titulo cor="red">Título UM</Titulo>
      App
      <Footer />
    </div>
  );
};

export default App;
