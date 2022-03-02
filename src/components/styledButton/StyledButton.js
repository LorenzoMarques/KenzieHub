import styled from "styled-components";

export const Button = styled.button`
  width: 95%;
  background: ${(props) => props.backgroundColor};
  border: 1.2182px solid;
  border-color: ${(props) => props.borderColor};
`;
