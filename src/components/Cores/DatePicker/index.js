import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { Main } from "./styled";

const DatePickerCustom = ({
  onChange,
  value,
  placeholder,
  label,
  require,
  theme,
  disabled
}) => {
  const [showChildren, setShowChildren] = useState(false);

  const handChange = (date) => {
   
    setShowChildren(true)
    onChange(date);
  };



  return (
    <Main>
<DatePicker
        selected={value}
        onChange={handChange}
      />
    </Main>
    
  );
};

export default DatePickerCustom;
