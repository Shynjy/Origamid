import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Fazer Login');
    navigate('/sobre');
  }

  return (
    <div>
      <Header />
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
