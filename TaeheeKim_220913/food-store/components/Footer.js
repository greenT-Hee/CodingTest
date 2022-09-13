import React from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/material";

const Footer1 = styled("footer")`
  padding: 16px 0 50px;
  border-top: 6px solid #c4c4c4;
`;

const P1 = styled("p")`
  font-weight: 700;
  padding: 12px 0;
`;

const P2 = styled("p")`
  font-size: 14px;
`;

export default function Footer() {
  return (
    <Container fixed>
      <Footer1>
        <P1>AWSOME FOOD STORE</P1>
        <P2>Copyright ⓒ 2022 김태희 All rights reserved.</P2>
      </Footer1>
    </Container>
  );
}
