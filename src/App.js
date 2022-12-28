import "./App.css";
import HeaderWrap from "./Components/HeaderWrap";
import styled, { keyframes, css } from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import Main from "./Components/Main";

const MainWrap = styled.main`
  &::before {
    height: 200px;
    content: " ";
    display: block;
  }
  height: 200vh;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.4s;
  transform: translateY(0);
`;
const textMove = keyframes`
   
    0% {
      left: -100px;
    }
    50% {
      left: 500px;
    }
    100% {
      left: 800px;
    }
  
`;
const Test1 = styled.div`
  width: 100%;
  height: 930px;

  .test {
    position: relative;
    top: 0;
    left: 0;
    background-color: green;
    ${(props) =>
      props.active &&
      css`
        animation: ${textMove} 4s linear alternate;
      `}
  }
`;

function App() {
  const headerRef = useRef();
  const scrollTop = useRef();
  const [active, setActive] = useState(false);
  const [lastY, setLastY] = useState(0);
  const handleScroll = useCallback(() => {
    if (lastY > window.scrollY || window.scrollY === 0) {
      headerRef.current.style.transform = "translateY(0)";
    } else if (lastY < window.scrollY) {
      headerRef.current.style.transform = "translateY(calc(-100% - 40px))";
    }
    if (window.scrollY + window.innerHeight > scrollTop.current.offsetTop) {
      setActive(true);
    } else {
      setActive(false);
    }
    setLastY(window.scrollY);
  }, [lastY]);

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);

    // return은 컴포넌트 해제될때
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastY, handleScroll]);
  return (
    <div className='App'>
      <Header ref={headerRef}>
        <HeaderWrap />
      </Header>

      <MainWrap>
        <Main />
        <div style={{ height: "930px", width: "100%" }}></div>
        <Test1 active={active}>
          {" "}
          <div className='test' ref={scrollTop}>
            123
          </div>
        </Test1>
      </MainWrap>
    </div>
  );
}

export default App;
