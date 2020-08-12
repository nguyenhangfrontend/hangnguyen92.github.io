import styled from "styled-components";

const Main = styled("label")`
  display: inline-block;
  position: relative;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .check-mark {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    margin-right: 6px;
    border: 1px solid #08AAA8;
  }
  .check-mark:after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #fff;
    content: "";
    opacity: 0;
    transition: all 0.3s ease;
    display: block;
    z-index: 9;
    position: absolute;
  
  }
  input:checked ~ .check-mark {
    background: #08AAA8;
  }
  input:checked ~ .check-mark:after {
    opacity: 1;
  }
`;

export { Main };
