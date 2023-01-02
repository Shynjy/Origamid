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

// Exercício 01

// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };

// Solução David

// function somaTotal(dados) {
//   const valoresLimpos = dados.map((v) => Number(v.preco.replace("R$ ", "")));
//   return valoresLimpos.reduce((a, c) => a + c);
// }

// const App = () => {
//   const [dados, setDados] = React.useState(luana)

//   function changeName() {
//     if(dados.cliente !== 'Mario') {
//       setDados(mario)
//     } else {
//       setDados(luana)
//     }
//   }

//   return (
//   <>
//     <p>None: {dados.cliente}</p>
//     <p>Idade: {dados.idade}</p>
//     <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? "Ativo" : "Inativo" }</span></p>
//     <p>Total gastos: R$ {somaTotal(dados.compras)}</p>
//     {
//       somaTotal(dados.compras) >= 10000 ? <p>Você está gastando muito.</p> : null

//     }
//     <button onClick={changeName}>Mudar</button>
//   </>
//   );
// };

// const App = () => {
//   // const dados = mario;
//   const [dados, setDados] = React.useState(luana)

//   const total = dados.compras.map((item) => Number(item.preco.replace('R$ ', ''))).reduce((a, c) => a + c);

//   function changeName() {
//     if(dados.cliente !== 'Mario') {
//       setDados(mario)
//     } else {
//       setDados(luana)
//     }
//   }

//   return (
//     <>
//       <p>None: {dados.cliente}</p>
//       <p>Idade: {dados.idade}</p>
//       <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? "Ativa" : "Inativa"} </span> </p>
//       <p>Total: R$ {total}</p>
//       {total >= 10000 && <p>Você está gastando muito.</p>}
//       <button onClick={changeName}>Mudar</button>
//     </>
//   )
// }

// Exercício 02

// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const App = () => {
//   const dados = produtos.filter(
//     ({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
//   );

//   return (
//     <section>
//       {dados.map(({ id, nome, preco, cores }) => {
//         return (
//           <div key={id}>
//             <h1>{nome}</h1>
//             <p>Preço: R$ {preco}</p>
//             <ul>
//               {cores.map((c, i) => (
//                 <li
//                   key={c + i}
//                   style={{
//                     backgroundColor: c,
//                     color: 'white',
//                     listStyleType: 'none',
//                   }}
//                 >
//                   {c}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </section>
//   );
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

// Componentes

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
