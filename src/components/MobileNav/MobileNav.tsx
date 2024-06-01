import { products } from "../../consts/consts";
import { Link } from "react-router-dom";
import Arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import { StyledMobileNav } from "./MobileNav.styled";

const MobileNav = () => {
  return (
    <StyledMobileNav>
      {products.map((product) => {
        if (product.name === "home") {
          return;
        }
        return (
          <div className="card" key={product.name}>
            <img className="main__img" src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <Link to={product.url}>
              Shop
              <span>
                <img src={Arrow} alt="" />
              </span>
            </Link>
          </div>
        );
      })}
    </StyledMobileNav>
  );
};

export default MobileNav;
