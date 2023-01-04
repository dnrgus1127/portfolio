import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  /* font-family: "Black Han Sans", sans-serif; */
  height: 100vh;

  h1 {
    color: white;
    font-size: 6rem;
    font-family: inherit;
    font-weight: 800;
    display: inline-block;
  }
`;

export default function GithubSection() {
  return (
    <Container>
      <h1>깃허브</h1>
    </Container>
  );
}
