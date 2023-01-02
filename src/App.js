import "./App.css";
import HeaderWrap from "./Components/HeaderWrap";
import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import Main from "./Components/Main";

const MainWrap = styled.main`
  &::before {
    height: 200px;
    content: " ";
    display: block;
  }
  height: 800vh;
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

function App() {
  const headerRef = useRef();
  const [lastY, setLastY] = useState(0);

  const handleScroll = useCallback(() => {
    if (lastY > window.scrollY || window.scrollY === 0) {
      headerRef.current.style.transform = "translateY(0)";
    } else if (lastY < window.scrollY) {
      headerRef.current.style.transform = "translateY(calc(-100% - 40px))";
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
      </MainWrap>
    </div>
  );
}

export default App;
