import React from 'react';

const InputField = ({ name, value, onChange, type , placeholder, className }) => {
  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default InputField;
