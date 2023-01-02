import React from 'react';


// JSX 1
// const App = () => {
//   const nome = "David";

//   return <>
//     <p>{nome}</p>
//   </>;
// };

// Exercício

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};


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

const App = () => {
  // const dados = mario;
  const [dados, setDados] = React.useState(luana)

  const total = dados.compras.map((item) => Number(item.preco.replace('R$ ', ''))).reduce((a, c) => a + c);

  function changeName() {
    if(dados.cliente !== 'Mario') {
      setDados(mario)
    } else {
      setDados(luana)
    }
  }

  return (
    <>
      <p>None: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? "Ativa" : "Inativa"} </span> </p>
      <p>Total: R$ {total}</p>
      {total >= 10000 && <p>Você está gastando muito.</p>}
      <button onClick={changeName}>Mudar</button>
    </>
  )
}


export default App;
