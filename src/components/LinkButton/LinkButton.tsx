import { Link } from "react-router-dom";

interface LinkButtonProps {
  destination: string;
  text: string;
}

const LinkButton = ({ destination, text }: LinkButtonProps) => {
  return <Link to={destination}>{text}</Link>;
};

export default LinkButton;
