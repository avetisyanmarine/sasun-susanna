import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";
import { TextShadow } from "../TextShadow";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <TextShadow title="Ժամանակացույց" />
        <ThirdPagePartContext>
          <ThirdPageBlock
            // uniqueMargin={50}
            imageSize={80}
            number={"16:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Մուղնու Սուրբ Գևորգ Եկեղեցի"
          />
          <ThirdPageBlock
            // imageSize={80}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="«Աղաբաբյանս» ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          {/* <h3>Սիրով սպասում ենք</h3> */}
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
