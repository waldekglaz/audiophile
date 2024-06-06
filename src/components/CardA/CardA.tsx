import React from "react";
import imgSpeaker from "../../assets/home/mobile/image-speaker-zx9.png";
import LinkButton from "../LinkButton/LinkButton";
import { StyledCardA } from "./StyledCardA.styled";
const CardA = () => {
  return (
    <StyledCardA>
      <img className="card-a-img" src={imgSpeaker} alt="speaker" />
      <h2>
        ZX9
        <br /> Speaker
      </h2>
      <p>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <LinkButton
        destination="/product/zx9-speaker"
        text="See Product"
        mode="dark"
      />
    </StyledCardA>
  );
};

export default CardA;
