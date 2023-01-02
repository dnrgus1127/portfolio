import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Contents = styled.p`
  padding: 0 var(--gap);
  font-size: 3em;
  color: white;
  font-family: "Black Han Sans", sans-serif;
`;

export default function Text({ text }) {
  return (
    <Container>
      <Contents>{text}</Contents>
    </Container>
  );
}
