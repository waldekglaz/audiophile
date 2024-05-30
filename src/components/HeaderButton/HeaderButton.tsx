import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./HeaderButton.styled";

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  alt: string;
}

const HeaderButton = ({ icon, alt, onClick }: HeaderButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={icon} alt={alt} />
    </StyledButton>
  );
};

export default HeaderButton;
