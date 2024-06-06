import styled from "styled-components";

export const StyledButton = styled.button<{
  mode?: "primary" | "dark";
}>`
  padding: 15px 30px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  display: inline-block;
  background-color: ${(props) =>
    props.mode === "dark"
      ? "#000"
      : props.mode === "primary"
      ? "#D87D4A"
      : "transparent"};
  border: ${(props) =>
    props.mode === "dark"
      ? "#000"
      : props.mode === "primary"
      ? "#D87D4A"
      : "1px solid #000"};
  color: ${(props) =>
    props.mode === "dark"
      ? "#fff"
      : props.mode === "primary"
      ? "#fff"
      : "#000"};

  &:hover {
    background-color: ${(props) =>
      props.mode === "dark"
        ? "#fff"
        : props.mode === "primary"
        ? "#FBAF85"
        : "#000"};
    color: ${(props) =>
      props.mode === "dark"
        ? "#000"
        : props.mode === "primary"
        ? "#fff"
        : "#fff"};
  }
  transition: background-color 0.3s, color 0.3s;
`;
