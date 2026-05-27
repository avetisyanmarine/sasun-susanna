import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.webp";
import HeartLine from "../../assets/image/heartline.png";
import Photof3 from "../../assets/image/photof3.jpg";
import Bant from "../../assets/image/bant.png";
import LineAes from "../../assets/image/lineaes.png";
import AttendanceGuests from "../AttendanceGuests/index";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Մուղնու Սուրբ Գևորգ Եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/7pRqFYzKBvmBXbeHA"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"«Աղաբաբյանս» Ռեստորան"}
            mapSrc={"https://maps.app.goo.gl/Wr5ruYZ4rGhR1r2k7"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={LineAes} alt="" className="w-full" />

      <div className="text-center my-8">
        <h2>Դետալներ</h2>
        <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
        <Flexible
          className=" font-[600] px-5"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ: <br />
          <br />
          <br />
          Խնդրում ենք Ձեր մասնակցությունը հաստատել մինչև Հունիսի 20։
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
      <Container>
        <img src={Photof3} className="rounded-[15px] mb-10" alt="" />
        <AttendanceGuests />
      </Container>
    </ForthPagePart>
  );
};
