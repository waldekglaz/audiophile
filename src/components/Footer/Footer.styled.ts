import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #101010;
  text-align: center;
  position: relative;
  padding: 52px 24px 38px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 101px;
    background-color: #d87d4a;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 48px 0;
  }
  li {
    margin-bottom: 16px;
  }

  li a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 13px;
    font-weight: bold;
  }
  p {
    color: rgba(255, 255, 255, 0.5);
  }

  .footer__text {
    line-height: 25px;
    margin-bottom: 48px;
  }

  .socials {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;
