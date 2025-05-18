 import React from 'react';

const FormInput = ({ label, name, value, onChange, onBlur, placeholder, type = 'text', error }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg text-lg`}
    />
    {error && <div className="text-red-500 text-sm">{error}</div>}
  </div>
);

export default FormInput;
