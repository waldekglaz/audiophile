import styled from "styled-components";
import MobileBackground from "../../assets/home/mobile/image-header.jpg";

export const StyledHero = styled.div`
  background-image: url(${MobileBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2rem;
  text-align: center;
  padding: 108px 24px 112px;
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 10px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
  }
  h1 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.29px;
  }
  .hero__text {
    font-size: 15px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 400;
    margin-bottom: 28px;
  }
`;
