import Logo from "../../assets/shared/desktop/logo.svg";
import { StyledFooter } from "./Footer.styled";
import { products } from "../../consts/consts";

const Footer = () => {
  return (
    <StyledFooter>
      <img src={Logo} alt="Audiphile logo" />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <a href={product.url}>{product.name}</a>
          </li>
        ))}
      </ul>
    </StyledFooter>
  );
};

export default Footer;
