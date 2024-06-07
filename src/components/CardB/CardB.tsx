import LinkButton from "../LinkButton/LinkButton";
import { CardBWrapper } from "./CardB.styled";
const CardB = () => {
  return (
    <CardBWrapper>
      <h2>ZX7 SPEAKER</h2>
      <LinkButton destination="/speakers/zx7-speaker" text="SEE PRODUCT" />
    </CardBWrapper>
  );
};

export default CardB;
