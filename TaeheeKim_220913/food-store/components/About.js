import Container from "@mui/material/Container";
import { styled } from "@mui/system";

const Section = styled("section")`
  font-family: "SpoqaHanSansNeo-Regular";
`;

const Img = styled("img")`
  width: 100%;
`;

const Div1 = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 60px;
  border-bottom: 2px solid #c4c4c4;
`;

const P1 = styled("p")`
  font-size: 26px;
  color: #1976d2;
  font-weight: 700;
  padding: 40px 0 20px;
`;

const P2 = styled("p")`
  line-height: 1.5;
`;

const Div2 = styled("div")`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 120px 60px;
`;

const Img2 = styled("img")`
  width: 300px;
`;

const P3 = styled("p")`
  text-align: right;
  padding: 10px 5px;
`;

export default function About({ bgImage, imageList }) {
  return (
    <Section>
      <h1 className="ir">사이트 소개 영역</h1>
      <Img src={bgImage} alt="배경" />

      <Container fixed>
        <Div1>
          <P1 first>Enjoy Your Food Trip !</P1>
          <P2>
            AWSOME FOOD STORE에서는 서울에서 즐길 수 있는 최고의 맛집들을
            심사숙고하여 선정한 식당/ 카페 정보를 제공하고 있습니다. 누구에게나
            열려 있는 공간에서 친구, 애인 그리고 가족들과 좋은 추억을 만들어 갈
            수 있도록 AWSOME FOOD STORE는 끊임없이 데이터를 업데이트할 수 있도록
            노력하겠습니다.
          </P2>
          <P2>항상 맛있는 음식과 함께 행복한 하루를 보내세요!</P2>
        </Div1>

        <Div2>
          {imageList.map((item, index) => {
            return (
              <div key={index}>
                <Img2 src={item.url} alt={item.name} />
                <P3>{item.info}</P3>
              </div>
            );
          })}
        </Div2>
      </Container>
    </Section>
  );
}
