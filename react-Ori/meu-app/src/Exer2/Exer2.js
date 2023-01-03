import React from 'react'

// Exercício 02

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const Exer2 = () => {
  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
  );

  return (
    <section>
      {dados.map(({ id, nome, preco, cores }) => {
        return (
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: R$ {preco}</p>
            <ul>
              {cores.map((c, i) => (
                <li
                  key={c + i}
                  style={{
                    backgroundColor: c,
                    color: 'white',
                    listStyleType: 'none',
                  }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Exer2