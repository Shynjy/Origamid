import React from 'react';

const Checkbox = ({ options, value, setValue, ...props }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      {options.map((option, i) => {
        return (
          <label key={options + i}>
            <input
              type="checkbox"
              value={option}
              checked={value.includes(option)}
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

export default Checkbox;
