import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Main } from "./styled";

const DatePickerCustom = ({
  onChange,
  value,
}) => {
  const [showChildren, setShowChildren] = useState(false);

  const handChange = (date) => {

    setShowChildren(true)
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
