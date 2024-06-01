import { Link } from "react-router-dom";
import { StyledButton } from "./LinkButton.styled";

interface LinkButtonProps {
  destination: string;
  text: string;
  primary?: boolean;
}

const LinkButton = ({ destination, text, primary }: LinkButtonProps) => {
  return (
    <StyledButton as={Link} to={destination} $primary={primary}>
      {text}
    </StyledButton>
  );
};

export default LinkButton;
