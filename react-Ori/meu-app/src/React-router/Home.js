import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>Essa é a Home</p>
      <Link to="produto/notebook">Notebook</Link>
      <br />
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
