import React from 'react';
import './App.css';

// Sem babel
// const App = () => {
//   return React.createElement(
//     'a',
//     { href: 'https://www.origamid.com' },
//     'Origamid',
//   );
// };

//Com babel
function App() {
  return <a href="https://www.origamid.com">Origamid</a>;
}

export default App;
