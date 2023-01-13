import React from 'react';
// import useLocalStorage from './hooks/useLocalStorage';
// import useFetch from './hooks/useFetch';
// import Header from './Header';
// import Footer from './Footer';

// import Radio from './Comps/Radio';
// import Select from './Comps/Select';
// import Checkbox from './Comps/Checkbox';
import Input from './Comps/Input';
import useForm from './hooks/useForm';

// Hooks Criados

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

// Usando Hooks

// const App = () => {
//   const [produto, setProduto] = useLocalStorage('produto', '');

//   const { request, data, loading, error } = useFetch();

//   React.useEffect(() => {
//     async function fetchData() {
//       const { response, json } = await request(
//         'https://ranekapi.origamid.dev/json/api/produto/',
//       );
//     }
//     fetchData();
//   }, [request]);

//   const handleClick = ({ target }) => {
//     setProduto(target.innerText);
//   };

//   if (error) {
//     return <p>{error}</p>;
//   } else if (loading) {
//     return <p>Carregando...</p>;
//   } else if (data) {
//     return (
//       <div>
//         <p>Produto preferido: {produto}</p>
//         <button style={{ marginRight: '1rem' }} onClick={handleClick}>
//           notebook
//         </button>
//         <button onClick={handleClick}>smartphone</button>
//         {data.map((prod) => (
//           <h3 key={prod.id}>{prod.nome}</h3>
//         ))}
//       </div>
//     );
//   }
// };

// Formulários um stado por atributo

// const App = () => {
//   const [nome, setNome] = React.useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(nome);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input
//         id="nome"
//         type="text"
//         value={nome}
//         onChange={({ target }) => setNome(target.value)}
//       />
//       <button>Enviar</button>
//     </form>
//   );
// };

// Formulários com um objeto

// const App = () => {
//   const [form, setForm] = React.useState({
//     nome: '',
//     email: '',
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   function handleChange({ target }) {
//     const { id, value } = target;
//     setForm({ ...form, [id]: value });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input id="nome" type="text" value={form.nome} onChange={handleChange} />
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <button>Enviar</button>
//     </form>
//   );
// };

// Componentes criandos

// const App = () => {
//   const [nome, setNome] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [produto, setProduto] = React.useState('');
//   const [cor, setCor] = React.useState('');
//   const [frutas, setFrutas] = React.useState([]);

//   return (
//     <div>
//       <Checkbox
//         options={['Banana', 'Maça']}
//         value={frutas}
//         setValue={setFrutas}
//       />
//       <br />
//       <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
//       <br />
//       <Select
//         options={['Smartphone', 'Tablet', 'Notebook']}
//         value={produto}
//         setValue={setProduto}
//       />
//       <br />
//       <br />
//       <Input id="nome" label="Nome" value={nome} setValue={setNome} />
//       <Input
//         type="email"
//         id="email"
//         label="Email"
//         value={email}
//         setValue={setEmail}
//       />

//     </div>
//   );
// };

// Validação

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
