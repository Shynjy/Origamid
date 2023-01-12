import React from 'react';

const Input = ({ label, id, value, setValue, ...props }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} onChange={handleChange} {...props} />
    </>
  );
};

export default Input;
