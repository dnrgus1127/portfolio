import React from "react";
import styled from "styled-components";
import Title from "./Title";
import backgroundImg from "../assets/img/codeBackground.png";
import Comment from "./Comment";

const Container = styled.div`
  height: 300vh;
  position: relative;
  padding-top: calc(var(--gap) * 2 + 1rem);
`;

const BackgroundSection = styled.div`
  position: sticky;
  top: 0;
  transition: 0.5s all ease;
  width: 100%;
  height: 100vh;
  opacity: 0.6;
  background: url(${backgroundImg}) fixed;
  z-index: -1;
`;

export default function Main() {
  return (
    <Container>
      <Title title={"프론트엔드 개발자"} subTitle={"정욱현"} />
      <BackgroundSection />
    </Container>
  );
}
