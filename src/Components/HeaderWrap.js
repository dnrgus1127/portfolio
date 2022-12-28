import React from "react";
import styled from "styled-components";
import Gnb from "./Gnb";
import WebLogo from "./WebLogo";

const Container = styled.div`
  padding: 0 var(--gap);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export default function HeaderWrap() {
  return (
    <Container>
      <WebLogo />
      <Gnb />
    </Container>
  );
}
