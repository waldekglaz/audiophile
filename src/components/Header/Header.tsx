import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import Logo from "../../assets/shared/desktop/logo.svg";
import Cart from "../../assets/shared/desktop/icon-cart.svg";
import { HeaderWrapper } from "./Header.styled";
import { Link } from "react-router-dom";
import HeaderButton from "../HeaderButton/HeaderButton";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext/ModalContext";

const Header = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalProvider component"
    );
  }
  const { openModal, modalIsOpen, closeModal } = context;
  return (
    <HeaderWrapper>
      <HeaderButton
        icon={Hamburger}
        alt="Mobile menu, click to open"
        onClick={modalIsOpen ? closeModal : openModal}
      />
      <Link to="/">
        <img src={Logo} alt="Audiophile logo" />
      </Link>

      <HeaderButton
        icon={Cart}
        alt="Cart, click to open"
        onClick={() => console.log("Cart clicked")}
      />
    </HeaderWrapper>
  );
};

export default Header;
