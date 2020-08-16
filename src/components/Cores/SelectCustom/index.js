import React, { memo } from 'react';
const SelectCustom = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = output => {
    
    onChange(output.target.value);
  };

  // const input = (options && options.find(item => item.value === value)) || null;

  return (
      <select  value={value} onChange={handleChange} className="form-control">
        {options && options.map((item, index) => {
          return (
            <option key={index} value={item.value}>{item.label}</option>
          )
        })}
      </select>
  );
};

export default memo(SelectCustom);
