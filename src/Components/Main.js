import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Title from "./Title";
import backgroundImg from "../assets/img/codeBackground.png";
import Text from "./Text";

const StickySection = styled.div`
  display: flex;
  flex-direction: column;
  height: 300vh;
  position: relative;
  justify-content: space-between;
  padding-top: calc(var(--gap) * 2 + 4vw);
`;

const SubSection = styled.section`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "grey")};
`;

const Background = styled.div`
  position: sticky;
  top: 0;
  transition: 0.5s all ease;
  width: 100%;
  height: 100vh;

  /* background: url(${backgroundImg}) fixed; */
  background-color: #2475ee;
  z-index: -1;
`;
const RightSlide = keyframes`
  0% {
    transform: translateY(80%);
  }

  100% {
    transform: translateY(0);

  }
`;
const LeftSlide = keyframes`
  0% {
    transform: translateY(0);

  }

  100% {
    transform: translateY(80%);

  }
`;

const TitleWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: var(--gap);
  z-index: 9998;
  transform: translateY(-100%);

  transition: transform 1s ease-out, color 1.5s ease;
`;
const TextSlide = styled.div`
  animation: ${(props) =>
    props.animation
      ? css`
          ${RightSlide} 1s ease-out  forwards
        `
      : css`
          ${LeftSlide} 1s ease-out  forwards
        `};
`;

export default function Main() {
  const mainRef = useRef();
  const [titleOn, setTitleOn] = useState(true);
  const titleWrapRef = useRef();
  const textRef1 = useRef();
  const backgroundRef = useRef();
  const [ani, setAni] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);

    let tmp = titleWrapRef.current.offsetTop;

    if (
      tmp + scrollY >=
      mainRef.current.offsetTop + mainRef.current.clientHeight
    ) {
      setTitleOn(false);
    } else {
      setTitleOn(true);
    }

    if (
      scrollY + window.innerHeight * 0.9 - mainRef.current.offsetTop >
        textRef1.current.offsetTop &&
      scrollY + window.innerHeight * 0.1 - mainRef.current.offsetTop <
        textRef1.current.offsetTop
    ) {
      setAni(true);
    } else {
      setAni(false);
    }
  }, [scrollY]);

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, handleScroll]);

  useEffect(() => {
    console.log(scrollY, titleWrapRef.current.clientHeight / 2);
    if (scrollY > titleWrapRef.current.clientHeight / 2) {
      titleWrapRef.current.style.color = "white";
    } else {
      titleWrapRef.current.style.color = "black";
    }

    if (scrollY > mainRef.current.offsetTop + 400) {
      titleWrapRef.current.style.transform = "translate(6vw,-100%)";
    } else {
      titleWrapRef.current.style.transform = "translate(0%,-100%)";
    }
  }, [scrollY]);
  return (
    <React.Fragment>
      <StickySection ref={mainRef}>
        <TitleWrap
          ref={titleWrapRef}
          style={titleOn ? { opacity: "1" } : { opacity: "0" }}
        >
          <Title title={"프론트엔드 개발자"} subTitle={"정욱현 포트폴리오"} />
        </TitleWrap>
        <Background ref={backgroundRef} />

        <TextSlide ref={textRef1} animation={ani}>
          <Text text={"다양한 시각적 요소들과 함께하며"}></Text>
        </TextSlide>
        <Text text={"작업물에 대한 시각적인 피드백이 잘 드러나는 "}></Text>
        <Text text={"개발의 최전선인 프론트엔드를 선택하게 되었습니다."}></Text>
      </StickySection>
      <SubSection bgColor={"#FFD000"}>
        <h1>가나다라마바사</h1>
      </SubSection>
      <SubSection>
        <h1>가나다라마바사</h1>
      </SubSection>
    </React.Fragment>
  );
}
