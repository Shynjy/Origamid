import React from 'react';

const Exer8 = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    const element = target.value;
    if (target.checked) {
      setCores([...cores, element]);
    } else {
      setCores((cores) => cores.filter((cor) => cor !== element));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <div>
      {coresArray.map((cor, i) => {
        return (
          <label key={cor + i} style={{ textTransform: 'capitalize' }}>
            <input
              style={{ marginRight: '0.5rem' }}
              type="checkbox"
              value={cor}
              checked={handleChecked(cor)}
              onChange={handleChange}
            />
            {cor}
          </label>
        );
      })}
    </div>
  );
};

export default Exer8;
