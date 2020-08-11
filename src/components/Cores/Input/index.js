import React, { memo } from "react";
import { Main } from "./styled";

const Input = (props) => {
  const { onChange, initialValue, value, onKeyDown, ...other } = props;
  const onFieldChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Main onChange={onFieldChange} value={value} {...other}>
    </Main>
  );
};

export default memo(Input);
