import { Link } from "react-router-dom";
import { StyledButton } from "./LinkButton.styled";

interface LinkButtonProps {
  destination: string;
  text: string;
  mode?: "primary" | "dark";
}

const LinkButton = ({ destination, text, mode }: LinkButtonProps) => {
  return (
    <StyledButton as={Link} to={destination} mode={mode}>
      {text}
    </StyledButton>
  );
};

export default LinkButton;
