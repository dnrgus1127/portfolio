import React from "react";
import styled from "styled-components";
import reactIcon from "../assets/img/pngwing.com.png";
import SkillGauge from "./SkillGauge";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  padding: var(--gap) var(--gap);
  h1 {
    /* font-size: 6rem; */
    font-family: inherit;
    font-weight: 800;
    display: inline-block;
    margin-bottom: 3rem;
  }
`;

const StackItem = styled.div`
  display: flex;
  justify-content: space-between;
  .infoWrap {
    width: 60%;
  }
  .iconWrap {
    width: 40%;
  }

  img {
    width: 50%;
  }
  @media screen and (max-width: 500px) {
    display: block;

    .infoWrap {
      width: 100%;
    }
    .iconWrap {
      width: 100%;
    }
  }
`;

const StackTextStyle = styled.div`
  text-align: left;
  h2,
  & > p {
    margin-bottom: 2rem;
  }
  & > p {
    font-size: 1.2em;
    font-weight: 800;
  }
  h2 {
    position: relative;
    display: inline-block;
  }
  & > h2::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 3px;
    width: 100%;
    background-color: var(--light-color);
  }
`;

export default function StackSection() {
  return (
    <Container>
      <h1>기술 스택</h1>
      <StackItem className='stackSection'>
        <StackTextStyle className='infoWrap'>
          <h2>리액트</h2>
          <p>
            사용자 인터페이스를 만들기 위해 사용되는{" "}
            <span style={{ color: "#999900" }}>자바스크립트 </span>
            라이브러리
          </p>
          <h3>숙련도</h3>
          <div
            className='gagueWrapper'
            style={{ width: "100%", height: "4rem" }}
          >
            <SkillGauge per={54} />
          </div>

          <h3>정욱현's Skill</h3>
        </StackTextStyle>
        <div className='iconWrap'>
          <img src={reactIcon} alt='' />
        </div>
      </StackItem>
    </Container>
  );
}
