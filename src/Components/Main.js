import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Title from "./Title";
import backgroundImg from "../assets/img/codeBackground.png";
import Text from "./Text";
import StackSection from "./StackSection";
import GithubSection from "./GithubSection";
import Footer from "./Footer";

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
  transition: all 1s ease-out, color 1.5s ease;
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
      mainRef.current.offsetTop + mainRef.current.clientHeight - 200
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
    if (scrollY > titleWrapRef.current.clientHeight / 2) {
      titleWrapRef.current.style.color = "white";
    } else {
      titleWrapRef.current.style.color = "black";
    }

    if (scrollY > mainRef.current.offsetTop + 400) {
      titleWrapRef.current.style.transform = "translate(25%,-100%)";
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
          <Title
            scrollY={scrollY}
            invisiblePosition={800}
            title={"프론트엔드 개발자 "}
            subTitle={"정욱현 포트폴리오"}
          />
        </TitleWrap>
        <Background ref={backgroundRef} />

        <TextSlide ref={textRef1} animation={ani}>
          <Text text={"제가 생각하는 프론트엔드 개발자 "}></Text>
        </TextSlide>
        <Text text={"요청받은 디자인 그대로 구현할 수 있고 "}></Text>
        <Text text={"끊임없이 발전하며"}></Text>
        <Text text={"아래와 같은 기술들을 다룰 수 있습니다."}></Text>
      </StickySection>
      <SubSection bgColor={"#FFD000"}>
        <StackSection />
      </SubSection>
      <SubSection>
        <GithubSection />
      </SubSection>
      <div id='footer'>
        <Footer />
      </div>
    </React.Fragment>
  );
}
