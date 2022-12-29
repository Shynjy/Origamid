import { areaQuadrado, perimetroQuadrado } from './quadrado.js';
import numeroAleatorio from './numeroAlearorio.js';

// ### Tudo é um objeto em javascript

// const menu = {
//   seletor: '.principal',
// };

// console.log(menu.seletor.toUpperCase());

// ### Formas de criar uma função

// function upperName(name) {
//   return name.toUpperCase();
// }

// const lowerName = (name) => name.toLowerCase();

// console.log(upperName('David'));
// console.log(lowerName('DAVID'));

// ### Desestruturação

// function handClick(event) {
//   const { clientX, clientY } = event;
//   console.log(clientX, clientY);
// }

// const frutas = ['banana', 'morango', 'manga', 'uva'];

// const [fruta1] = frutas;

// console.log(fruta1);

// const useQuadrado = [
//   4,
//   function (lado) {
//     return 4 * lado;
//   },
// ];

// const [lados, perimetro] = useQuadrado;
// console.log(lados);
// console.log(perimetro(50));

// document.addEventListener('click', handClick);

// ### Rest e Spread

// function showList(empresa, ...clientes) {
//   clientes.forEach((cliente) => {
//     console.log(cliente, empresa);
//   });
// }

// showList('Google', 'David', 'Maria', 'Robson');

// const numeros = [15, 99, 12];

// const maior = Math.max(...numeros);
// console.log(maior);

// const carro = {
//   cor: 'Azul',
//   portas: 4,
// };

// const carroAno = { ...carro, ano: 2008 };

// console.log(carro, carroAno);

// ### Modulos de JS

// console.log(areaQuadrado(5));
// console.log(perimetroQuadrado(5));
// console.log(numeroAleatorio());

// ### Fat --> requisições assíncronas

// const baseUrl = 'https://ranekapi.origamid.dev/json/api/produto';

// fetch(baseUrl)
//   .then((resp) => resp.json())
//   .then((json) => console.log(json));

// async function fetchProdutos(url) {
//   const resp = await fetch(url);
//   const json = await resp.json();
//   return json;
// }

// const respostaUrl = await fetchProdutos(baseUrl);

// console.log(respostaUrl);

// ### Métodos de Array

// const precos = [
//   'Crédito',
//   'R$ 200',
//   'R$ 400',
//   'Contas Pagar',
//   'R$ 300',
//   'R$ 400',
//   'Meus dados',
// ];

// const precosFiltro = precos.filter((p) => p.includes('R$'));
// console.log(precosFiltro);

// const precosNumero = precosFiltro.map((p) => Number(p.replace('R$ ', '')));
// console.log(precosNumero);

// ### Expressões

// const grupoA = 100;
// const grupoB = 200;

// if (grupoA > grupoB) {
//   console.log('Grupo A, ganhou!!!');
// } else {
//   console.log('Grupo B, ganhou!!!');
// }

// const vencedor = grupoA > grupoB ? 'Grupo A, venceu!!!' : 'Grupo B, venceu!!!';
// console.log(vencedor);
