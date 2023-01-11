import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  border: none;
  background: none;
  top: 45vh;
  height: 10vh;
  width: 10vh;

  svg {
    fill: "red";
  }
`;

const SlideBar = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100vw;
  display: flex;

  ul {
    display: flex;
    margin: 0 auto;
    list-style: none;
    position: relative;
  }

  ul::after {
    content: " ";
    position: absolute;
    top: 0;
    left: calc(
      ${(props) => props.index * 5}vw + ${(props) => props.index * 1.2}rem
    );
    width: 5vw;
    height: 4px;
    background-color: blueviolet;
    border-radius: 2px;
    transition: 0.5s ease-out all;
  }
  li {
    width: 5vw;
    height: 4px;
    background-color: lightgrey;
    margin-right: 1.2rem;
    border-radius: 2px;
  }
`;

const SliderBox = styled.div`
  width: 400vw;
  height: 100vh;
  display: flex;
  transition: all 0.5s ease-out;
  & > div {
    width: 100vw;
  }
`;

export default function Slider({ children }) {
  const [page, setPage] = useState(0);

  return (
    <Container>
      <SliderBox style={{ transform: `translateX(${-100 * page}vw)` }}>
        {children.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </SliderBox>
      <Button
        onClick={() => {
          setPage(
            page <= 0 ? children.length - 1 : (page - 1) % children.length
          );
          console.log(page);
        }}
        style={{ left: 0 }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='5vh'
          height='5vh'
          viewBox='0 0 24 24'
          fill='blueviolet'
        >
          <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
        </svg>
      </Button>
      <Button
        onClick={() => {
          setPage((page + 1) % children.length);
          console.log(page);
        }}
        style={{ right: 0 }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='5vh'
          height='5vh'
          viewBox='0 0 24 24'
          fill='blueviolet'
        >
          <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
        </svg>
      </Button>
      <SlideBar index={page}>
        <ul>
          {children.map((i, idx) => (
            <li key={idx}></li>
          ))}
        </ul>
      </SlideBar>
    </Container>
  );
}
