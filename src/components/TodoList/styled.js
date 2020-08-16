import styled from "styled-components";
export const Main = styled.div`
  width: 65%;
  margin: auto;
  display: flex;
  @media screen and (max-width: 992px){
    width: 100%;
    display: block;

  }
  & .col40 {
    width: 40%;
    padding: 12px;
    box-sizing: border-box;
    @media screen and (max-width: 992px){
      width: 100%
    }
  }
  & .col60 {
    width: 60%;
    padding: 12px;
    box-sizing: border-box;
    @media screen and (max-width: 992px){
      width: 100%
    }
  }

`