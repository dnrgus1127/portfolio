import React from "react";
import styled from "styled-components";
import reactIcon from "../assets/img/pngwing.com.png";
import { SkillData } from "../data/SkillData";
import SkillGauge from "./SkillGauge";
import TitleAndList from "./TitleAndList";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  padding: var(--gap) var(--gap);
  padding-top: calc(var(--gap) / 2);
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  #reactIcon {
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

  .gitStatWrap {
    width: 100%;
    margin: auto 0;
  }

  .gitStatWrap img {
    width: 100%;
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

export default function StackSection({ scrollY }) {
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
            style={{ width: "100%", height: "4rem", marginBottom: "2rem" }}
          >
            <SkillGauge per={72} scrollY={scrollY} />
          </div>
          <TitleAndList
            title={"정욱현's React Skill"}
            list={SkillData.React.mySkill}
          />
        </StackTextStyle>
        <div className='iconWrap'>
          <img src={reactIcon} id='reactIcon' alt='' />
          <div className='gitStatWrap'>
            <a href='https://github.com/dnrgus1127/portfolio'>
              <img
                src='https://github-readme-stats.vercel.app/api/pin/?username=dnrgus1127&repo=portfolio&theme=dark '
                alt=''
              />
            </a>
          </div>
        </div>
      </StackItem>
    </Container>
  );
}
