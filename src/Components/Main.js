import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FixedTitle from "./FixedTitle";
import backgroundImg from "../assets/img/codeBackground.png";

const Container = styled.div``;
const BackgroundSection = styled.div`
  width: 100%;
  height: 40vh;
  opacity: 0.6;
  background: url(${backgroundImg}) fixed;
  z-index: -1;
`;

export default function Main() {
  const backgroundRef = useRef();
  const lastOffset = useRef();

  const scrollHandler = () => {
    if (lastOffset.current < window.scrollY) {
      backgroundRef.current.style.position = "fixed";
      backgroundRef.current.style.top = 0;
      backgroundRef.current.style.left = 0;
    } else {
      backgroundRef.current.style.position = "static";
    }
  };

  useEffect(() => {
    lastOffset.current = backgroundRef.current.offsetTop;
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <Container>
      <FixedTitle title={"프론트엔드 개발자"} subTitle={"정욱현"} />
      <BackgroundSection ref={backgroundRef} />
    </Container>
  );
}
