import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2em 0;
`;
const LogoText = styled.p`
  font-family: "Rubik Vinyl", cursive;
  font-weight: 800;
  font-size: 4rem;
`;

export default function WebLogo() {
  return (
    <Container>
      <LogoText>
        Cat
        <span style={{ color: "var(--point-color)" }}>Fish</span>
      </LogoText>
    </Container>
  );
}
