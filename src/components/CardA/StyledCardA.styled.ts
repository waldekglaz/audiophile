import styled from "styled-components";
import Circles from "../../assets/home/desktop/pattern-circles.svg";

export const StyledCardA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d87d4a;
  background-image: url(${Circles});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% -60px;
  padding: 55px 23px;
  margin: 0 23px;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-weight: 400;
  margin-bottom: 24px;
  .card-a-img {
    width: 172px;
  }
  h2 {
    font-size: 36px;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 0;
    letter-spacing: 1.3px;
  }
  p {
    font-size: 15px;
    line-height: 25px;
    padding: 0 23px;
    margin-bottom: 24px;
  }
`;
