import React, { memo } from 'react';
import { Main } from "./styled";
const TextArea = props => {
  const { onChange, initialValue, value, onKeyDown, ...other} = props;
  const onFieldChange = (e) => {
    onChange(e.target.value)
  };

  return (
    <Main onChange={onFieldChange} value={value} {...other} >

    </Main>
  )
} ;

export default memo(TextArea)