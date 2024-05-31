import { StyledHero } from "./Hero.styled";
const Hero = () => {
  return (
    <StyledHero>
      <div className="eyebrow">NEW PRODUCT</div>
      <h1>XX99 Mark II HeadphoneS</h1>
      <p className="hero__text">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className="btn">See Product</button>
    </StyledHero>
  );
};

export default Hero;
