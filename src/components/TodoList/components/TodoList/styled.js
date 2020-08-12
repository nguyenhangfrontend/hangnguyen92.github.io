import styled from "styled-components";
export const Main = styled.div`
  & .container-divider {
    display: flex;
    margin: 0 -15px;

    & .col50 {
      width: 50%;
      padding: 15px;
    }
  }
  .action {
    text-align: center;
    button {
      margin: 5px;
    }
  }
  .item-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    padding: 10px;
  }
  .todo-item {
    border: 1px solid #ddd;
    .form-new {
      padding: 12px;
    }
  }
`;
