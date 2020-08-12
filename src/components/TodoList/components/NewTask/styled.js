import styled from "styled-components";
export const Main = styled.div`
& .container-divider{
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
    width: 100%;
  }
}
`