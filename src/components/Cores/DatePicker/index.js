import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Main } from "./styled";

const DatePickerCustom = ({
  onChange,
  value,
}) => {

  const handChange = (date) => {
    onChange(date);
  };



  return (
    <Main>
      <DatePicker
        onChange={handChange}
        selected={value}
      >
        <i className="cal-icon"/>
      </DatePicker>
    </Main>

  );
};

export default DatePickerCustom;
