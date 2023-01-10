import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
`;

const Contents = styled.p`
  padding: 0 var(--gap);
  font-size: 4vw;

  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
`;

export default function Text({ text }) {
  return (
    <Container>
      <Contents>{text}</Contents>
    </Container>
  );
}
