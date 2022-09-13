import { styled } from "@mui/system";
import Link from "next/Link";

const Header1 = styled("header")`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 100px;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #1976d2;
`;

const H1 = styled("h1")`
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
`;

const Li = styled("li")`
  display: inline-block;
  padding: 5px 12px 6px;
  font-size: 18px;
  font-weight: 900;

  &:hover {
    transition: all 0.3s;
    border-radius: 5px;
    background-color: #1976d2;
    color: #fff;
  }
`;

export default function Header() {
  return (
    <Header1>
      <Link href="/">
        <H1>AWSOME FOOD STORE</H1>
      </Link>
      <ul>
        <Li>
          <Link href="/">About</Link>
        </Li>
        <Li>
          <Link href="/store">Store</Link>
        </Li>
      </ul>
    </Header1>
  );
}
