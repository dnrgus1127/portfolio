import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Text from "./Text";
import StackSection from "./StackSection";
import GithubSection from "./GithubSection";
import Footer from "./Footer";

const StickySection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: calc(var(--gap) * 2 + 4vw);

  .textWrap {
    display: flex;
    height: 200vh;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 0;
  }
`;

const SubSection = styled.section`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "grey")};
`;

const Background = styled.div`
  position: sticky;
  top: 0;
  transition: 0.5s all ease, opacity 0.1s ease-out;
  width: 100%;
  height: 90vh;
  background-color: #2475ee;
  z-index: -1;
`;

const TitleWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: var(--gap);
  z-index: 9998;
  transform: translateY(-100%);
  transition: transform 1s ease-out, color 1s ease, opacity 0.3s ease-out;
`;

export default function Main() {
  const mainRef = useRef();
  const titleWrapRef = useRef();
  const backgroundRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [trnasTitle, setTransTitle] = useState(0);

  const createStyle = (per) => ({
    transform: `translate(${per}%,-100%)`,
    opacity: `${per === 100 ? 0 : 1}`,
  });

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, handleScroll]);

  // 스크롤에 따른 스타일링
  useEffect(() => {
    // 타이틀 컬러 스타일링
    if (scrollY > titleWrapRef.current.clientHeight / 2) {
      titleWrapRef.current.style.color = "white";
    } else {
      titleWrapRef.current.style.color = "black";
    }

    // 배경에 따른 타이틀 보이게 안보이게
    // opacity로 조정 시 다른 요소들을 가려서 transform 사용
    if (
      scrollY >
        mainRef.current.offsetTop + mainRef.current.clientHeight * 0.1 &&
      scrollY < mainRef.current.offsetTop + mainRef.current.clientHeight * 0.8
    ) {
      setTransTitle(25);
    } else if (
      scrollY >=
      mainRef.current.offsetTop + mainRef.current.clientHeight * 0.8
    ) {
      setTransTitle(100);
    } else {
      setTransTitle(0);
    }
  }, [scrollY]);

  // 새로고침 scrollY값 초기화
  useEffect(() => {
    setScrollY(window.scrollY);
  }, []);

  return (
    <React.Fragment>
      <StickySection ref={mainRef}>
        <TitleWrap ref={titleWrapRef} style={createStyle(trnasTitle)}>
          <Title
            scrollY={scrollY}
            invisiblePosition={800}
            title={"프론트엔드 개발자 "}
            subTitle={"정욱현 포트폴리오"}
          />
        </TitleWrap>
        <Background ref={backgroundRef} />
        <div className='textWrap'>
          <Text text={"제가 생각하는 프론트엔드 개발자 "}></Text>
          <Text text={"요청받은 디자인 그대로 구현할 수 있고 "}></Text>
          <Text text={"끊임없이 발전하며"}></Text>
          <Text text={"아래와 같은 기술들을 다룰 수 있습니다."}></Text>
        </div>
      </StickySection>
      <SubSection bgColor={"white"}>
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
