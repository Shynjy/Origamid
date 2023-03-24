import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Head from './Head';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Fazer Login');
    navigate('/sobre');
  }

  return (
    <div>
      <Head title="Login" />
      <Header />
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
