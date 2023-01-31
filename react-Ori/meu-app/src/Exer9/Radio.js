import React from 'react';

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (!active) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option, i) => (
        <label
          key={option + i}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
            style={{ marginRight: '0.5rem' }}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
