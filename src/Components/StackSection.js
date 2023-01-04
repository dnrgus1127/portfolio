import React from "react";
import styled from "styled-components";
import stack1 from "../assets/img/stack1.png";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  /* font-family: "Black Han Sans", sans-serif; */
  height: 100vh;
  h1 {
    color: white;
    font-size: 6rem;
    font-family: inherit;
    font-weight: 800;
    display: inline-block;
  }
`;

const StackWrap = styled.div`
  width: 50%;
  background-color: white;
  border: 1px solid black;
  border-radius: 12px;
  transition: all 0.5s ease-out;
  img {
    width: 100%;
  }

  &:hover {
    transform: translateY(-10%);
  }
`;

export default function StackSection() {
  return (
    <Container>
      <h1>기술 스택</h1>
      <StackWrap>
        <img src={stack1} alt='stack logo 1' />
      </StackWrap>
    </Container>
  );
}
