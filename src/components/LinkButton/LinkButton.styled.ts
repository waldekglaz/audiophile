import styled from "styled-components";

export const StyledButton = styled.button<{ $primary?: boolean }>`
  padding: 15px 30px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  display: inline-block;
  background-color: ${(props) => (props.$primary ? "#D87D4A" : "transparent")};
  border: ${(props) => (props.$primary ? "#D87D4A" : "1px solid #000")};
  color: ${(props) => (props.$primary ? "#fff" : "#000")};

  &:hover {
    background-color: ${(props) => (props.$primary ? "#FBAF85" : "#000")};
    color: ${(props) => (props.$primary ? "#fff" : "#fff")};
  }
  transition: background-color 0.3s, color 0.3s;
`;
