import { styled } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const Div = styled("div")`
  margin: 180px auto;
  text-align: center;
`;

const Img = styled("img")`
  width: 250px;
`;

const P = styled("p")`
  font-family: "SpoqaHanSansNeo-Regular";
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
`;

const Span = styled("span")`
  color: #1976d2;
`;

export default function Custom404() {
  const [count, setCount] = useState(5);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  setInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, 1000);

  return (
    <Div>
      <Img src="/image/404.png" alt="404 에러 로고" />
      <P>PAGE NOT FOUND</P>
      <P>
        <Span>{count}초</Span> 뒤 홈으로 이동합니다.
      </P>
    </Div>
  );
}
