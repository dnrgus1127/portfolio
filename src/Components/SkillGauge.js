import React from "react";
import styled, { keyframes } from "styled-components";

/// keyframe-------------------
const ProficiencyFrame = keyframes`
  0% {
    width :0;
  }
  100% {
    width: 100% ;
  }
`;
//-----------------------keyframe

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .per {
    line-height: 4rem;
    font-size: 1.6em;
    margin-left: 1.5rem;
  }
`;

const GaugeWrap = styled.ul`
  margin: auto 0;
  width: 80%;
  height: 0.5rem;
  list-style: none;
  display: flex;
  position: relative;
  background-color: white;

  li {
    position: relative;
    width: 20%;
    height: 100%;
    background-color: grey;
    margin-right: 0.5rem;
    box-shadow: 0px 0px 5px rgb(96, 96, 96, 0.7);
  }

  .painted::after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: var(--light-color);
    animation: ${ProficiencyFrame} 0.3s ease-in-out alternate forwards;
  }

  .painted {
    /* background-color: var(--light-color); */
  }

  & .unPainted::after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: grey;
    animation: ${ProficiencyFrame} 0.3s ease-in-out alternate forwards;
  }

  //! 의도하는 대로 작동하지 않고 있다.
  li.unPainted:nth-of-type(4) {
    background-color: green;
    color: green;
  }

  & :nth-child(1)::after {
    animation-delay: 0.3s;
  }
  & :nth-child(2)::after {
    animation-delay: 0.6s;
  }
  & :nth-child(3)::after {
    animation-delay: 0.9s;
  }
  & :nth-child(4)::after {
    animation-delay: 1.2s;
  }
  & :nth-child(5)::after {
    animation-delay: 1.5s;
  }
`;

const createArray = (length) => [...Array(length)];

// TODO : 숙련도 퍼센트 별로 색이 다르게, 처음 보일때나 hover 시에 숙련도가 차오르도록
export default function SkillGauge({ per }) {
  return (
    <Container>
      <GaugeWrap>
        {createArray(5).map((n, i) => (
          <li
            key={i}
            className={i < Math.trunc(per / 20) ? "painted" : "unPainted"}
          ></li>
        ))}
      </GaugeWrap>
      <p className='per'>{per}%</p>
    </Container>
  );
}
