import React, { memo } from 'react';

const Input = props => {
  const { onChange, initialValue, value, onKeyDown, ...other} = props;
  const onFieldChange = (e) => {
    onChange(e.target.value)
  };

  return (
    <input onChange={onFieldChange} value={value} {...other} />
  )
} ;

export default memo(Input)