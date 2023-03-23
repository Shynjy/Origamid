import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Utilizando o css no .active
import './Header.css';

// const estiloAtivo = {
//   color: 'tomato',
// };

const Header = () => {
  const location = useLocation();

  //Sempre sinaliza quando a rota altera.
  React.useEffect(() => {
    console.log('A Rota foi alterada');
  }, [location]);

  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/sobre" style={{ marginLeft: '1rem' }}>
          Sobre
        </NavLink>
        <NavLink to="/login" style={{ marginLeft: '1rem' }}>
          Login
        </NavLink>
      </nav>
      <h3>Esse é o Header</h3>
    </div>
  );
};

export default Header;
