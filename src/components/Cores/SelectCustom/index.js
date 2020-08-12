import React, { memo } from 'react';
import { Main} from './styled';
const SelectCustom = ({
  options,
  value,
  onChange,
  placeholder,
  disabled,
  ...other
}) => {
  const handleChange = output => {
    onChange(output ? output.value : '');
  };

  // const input = (options && options.find(item => item.value === value)) || null;

  return (
      <Main  value={value} onChange={handleChange} className="form-control">
        {options && options.map((item, index) => {
          return (
            <option key={index} value={item.value}>{item.label}</option>
          )
        })}
      </Main>
  );
};

export default memo(SelectCustom);
