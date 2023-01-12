import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <select value={value} onChange={handleChange} {...props}>
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option, i) => (
        <option key={option + i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
