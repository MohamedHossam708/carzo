import React from 'react';

const SelectInput = ({ label, name, value, onChange, onBlur, options, error }) => (
  <div className="flex flex-col">
    <label className="text-gray-700 mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg text-lg`}
    >
      <option value="">Select...</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <div className="text-red-500 text-sm">{error}</div>}
  </div>
);

export default SelectInput;
