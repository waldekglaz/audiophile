import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import Logo from "../../assets/shared/desktop/logo.svg";
import Cart from "../../assets/shared/desktop/icon-cart.svg";
import { HeaderWrapper } from "./Header.styled";

import HeaderButton from "../HeaderButton/HeaderButton";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderButton
        icon={Hamburger}
        alt="Mobile menu, click to open"
        onClick={() => console.log("Mobile menu clicked")}
      />
      <img src={Logo} alt="Audiophile logo" />

      <HeaderButton
        icon={Cart}
        alt="Cart, click to open"
        onClick={() => console.log("Cart clicked")}
      />
    </HeaderWrapper>
  );
};

export default Header;
