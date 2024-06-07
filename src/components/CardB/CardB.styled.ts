import styled from "styled-components";
import BackgroundImg from "../../assets/home/mobile/image-speaker-zx7.jpg";

export const CardBWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 101px 24px;
  background-color: #f1f1f1;
  border-radius: 8px;
  margin: 20px;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  h2 {
    margin-bottom: 32px;
  }
`;
