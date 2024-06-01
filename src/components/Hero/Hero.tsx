import { StyledHero } from "./Hero.styled";
import LinkButton from "../LinkButton/LinkButton";
const Hero = () => {
  return (
    <StyledHero>
      <div className="eyebrow">NEW PRODUCT</div>
      <h1>XX99 Mark II HeadphoneS</h1>
      <p className="hero__text">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>

      <LinkButton
        destination="/headphones/xx99-mark-two"
        text="See Product"
        primary
      />
    </StyledHero>
  );
};

export default Hero;
