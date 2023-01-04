import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Contents = styled.p`
  padding: 0 var(--gap);
  font-size: 3em;
  color: white;
  /* font-family: "Black Han Sans", sans-serif; */
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
