import styled from "styled-components";

export const StyledMobileNav = styled.nav`
  background-color: #fff;
  padding: 92px 24px 120px;
  .card {
    background-color: #f1f1f1;
    border-radius: 8px;
    margin-bottom: 68px;
    text-align: center;
    position: relative;
    padding: 88px 0 22px;
    text-transform: uppercase;

    .main__img {
      position: absolute;
      top: -20%;
      left: 50%;
      transform: translateX(-50%);
      max-width: 103px;
    }
    h2 {
      font-size: 15px;
      letter-spacing: 1px;
    }
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);
      font-size: 13px;
      span {
        margin-left: 14px;
      }
    }
  }
`;
