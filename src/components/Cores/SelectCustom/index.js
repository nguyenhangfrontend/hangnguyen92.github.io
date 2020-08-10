import React, { memo } from 'react';
import Selects from 'react-select';
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
    <Main>
      <select id="ddlProducts" name="ddProducts" value={value}>
        {options && options.map((item, index) => {
          return (
            <option value={item.value}>{item.label}</option>
          )
        })}
      </select>
    </Main>

  );
};

export default memo(SelectCustom);
