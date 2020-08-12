import styled from 'styled-components';

export const Main = styled.div`
  margin-bottom: 12px;
  & .form-control {
    min-height: 32px;
    border-radius: 4px;
    padding: 6px 10px;
    border-color: transparent;
    box-shadow: none;
    color: ${({theme }) => theme.darkPrimary};
    border: 1px solid ${({theme }) => theme.darkLight};
    width: 100%;
    box-sizing: border-box;
    &:focus{
      outline: none;
      box-shadow: none;
    }
  }
  & .label-input {
    margin-bottom: 6px;
    display: inline-block;
    font-weight: bold;
  }
  & .color-red{
    color: #ff5579;
  }
`;
