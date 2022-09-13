import { styled } from "@mui/system";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import DetailModal from "./DetailModal";

const Section = styled("section")`
  padding: 80px 0;
`;

const H2 = styled("h2")`
  position: relative;
  font-size: 20px;
  font-weight: 700;
  padding: 16px 5px 40px;

  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 178px;
    height: 2px;
    background-color: #444444;
    bottom: 25px;
    left: 5px;
  }
`;

export default function ListItems({ list }) {
  return (
    <>
      <Container fiexed>
        <Section>
          <H2>AMAZING STORES</H2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 6, md: 14 }}
              columns={{ xs: 4, sm: 8, md: 16 }}
            >
              {list.map((item) => (
                <Grid item xs={2} sm={4} md={4} key={item.id}>
                  <DetailModal
                    thumbnail={item.thumb}
                    name={item.name}
                    id={item.id}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Section>
      </Container>
    </>
  );
}
