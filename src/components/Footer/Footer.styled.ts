import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #101010;
  text-align: center;
  position: relative;
  padding: 52px 24px 38px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 101px;
    background-color: #d87d4a;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
