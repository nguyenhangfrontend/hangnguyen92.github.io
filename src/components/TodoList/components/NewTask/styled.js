import styled from "styled-components";
export const Main = styled.div`
  height: ${props => props.visible? 'auto': 0};
  visibility: ${props => props.visible? 'visible': 'visible'};
& .container-divider{
  display: flex;

  margin: 0 -12px;

  & .col50 {
    width: 50%;
    padding: 12px;
  }
}
.action {
  text-align: center;
  button {
    width: 100%;
  }
}
`