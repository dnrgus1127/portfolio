import React from "react";
import styled from "styled-components";
import reactIcon from "../assets/img/pngwing.com.png";

const Container = styled.div`
  text-align: center;
  height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
  h1 {
    color: white;
    font-size: 6rem;
    font-family: inherit;
    font-weight: 800;
    display: inline-block;
  }
  .stackSection {
    display: flex;
    height: 90%;
  }

  .leftSection {
    width: 50%;
  }
`;
const RigthSection = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem;
  div {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    background-color: white;
  }
`;

const StackWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  transition: all 0.5s ease-out;

  ul {
    padding: 2rem;
    height: 60vh;
    width: 100%;
  }
  li {
    width: 100%;
    display: flex;
    height: 20%;
    background-color: white;
    border-radius: 12px;
    margin-bottom: 3%;
  }
  .iconWrap {
    width: 30%;
    margin: auto 0;
  }
  img {
    width: 6em;
    height: 6em;
  }
  li > p {
    width: 70%;
    font-size: 4vw;
    margin: auto 0;
  }
`;

export default function StackSection() {
  return (
    <Container>
      <h1>기술 스택</h1>
      <div className='stackSection'>
        <div className='leftSection'>
          <StackWrap>
            <ul>
              <li>
                <div className='iconWrap'>
                  <img src={reactIcon} alt='reactIcon'></img>
                </div>
                <p>React</p>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </StackWrap>
        </div>
        <RigthSection className='rightSection'>
          <div>123</div>
        </RigthSection>
      </div>
    </Container>
  );
}
