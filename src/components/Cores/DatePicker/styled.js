import styled from "styled-components";

export const Main = styled("div")`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container input {
    border-radius: 6px;
    min-height: 32px;
    border: 1px solid #ddd;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    &:focus{
      border-color: #ddd;
      outline: none;
    }
  }
`;

