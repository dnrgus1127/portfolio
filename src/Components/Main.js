import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import backImg from "../assets/img/codeBackground.png";

const Container = styled.div``;

const TitleWrap = styled.div`
  position: fixed;
  
  left: 0;
  right: 0;
  padding: var(--gap);
  z-index: 9998;
`;

const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
  span {
    color: var(--point-color);
  }

  transition: all 1s;
`;
const Contents = styled.div`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: 0%;
  width: 100%;
  height: 700px;
  z-index: -1;
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .2;
  z-index : -4;
  background: url(${backImg});
`

export default function Main() {
  const [fixed, setFixed] = useState(false);
  const contentRef = useRef();
  const lastOffset = useRef();
  const handleScroll = () => {
    if (contentRef.current.offsetTop < window.scrollY) {
      setFixed(true);
    }

    if (window.scrollY < lastOffset.current) {
      setFixed(false)
      console.log(1)
    }
  }
  useEffect(() => {
    lastOffset.current = contentRef.current.offsetTop;

    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <TitleWrap>
        <Title>
          <span>
            프론트엔드 개발자
          </span>
          정욱현
        </Title>
      </TitleWrap>
      <div style={{ height: "166px" }}></div>
      <Contents ref={contentRef} position={fixed ? "fixed" : "relative"} top={fixed ? "0px" : ""}><BackgroundImg /></Contents>
      <div style={{ background: "white" }}>
        <p style={{ color: "black", zIndex: 3 }}>텍스트 테스트</p>
      </div>
    </Container>
  );
}
