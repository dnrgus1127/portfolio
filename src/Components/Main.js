import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

const TitleWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: var(--gap);
`;

const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
  span {
    color: var(--point-color);
  }

  transition: all 1s;
`;

export default function Main() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else if (window.scrollY === 0) {
      setScrolled(false);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 1000);
    // return은 컴포넌트 해제될때
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
            {scrolled
              ? "컴퓨터소프트웨어공학부 사이버보안전공 "
              : "프론트엔드 개발자 "}
          </span>
          정욱현
        </Title>
      </TitleWrap>
    </Container>
  );
}
