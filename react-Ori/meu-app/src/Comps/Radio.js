import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      {options.map((option, i) => {
        return (
          <label key={option + i}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={handleChange}
              {...props}
            />
            {option}
          </label>
        );
      })}
    </>
  );
};

export default Radio;
