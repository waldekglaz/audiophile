import Logo from "../../assets/shared/desktop/logo.svg";
import { StyledFooter } from "./Footer.styled";
import { products, socials } from "../../consts/consts";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <img src={Logo} alt="Audiphile logo" />
      </Link>

      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <Link to={product.url}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <p className="footer__text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p className="copyrights">Copyright {currentYear}. All Rights Reserved</p>
      <div className="socials">
        {socials.map((social) => (
          <Link
            to={social.url}
            key={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.img} alt={`Link to ${social.name}`} />
          </Link>
        ))}
      </div>
    </StyledFooter>
  );
};

export default Footer;
