import React, { useEffect, useRef, useState } from "react";
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

const Under20perFrame = (w) => keyframes`
 0% {
    width: 0;
 }
 100% {
    width: ${w}%;
 }
`;
//-----------------------keyframe

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .per {
    line-height: 4rem;
    font-size: 1.8em;
    margin-left: 1.5rem;
    font-weight: 800;
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
    box-shadow: 1px 1px 10px rgb(96, 96, 96, 0.6);
  }

  .painted::after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: var(--light-color);
    animation: ${ProficiencyFrame} 0.3s ease-in-out
      ${(props) => props.animationCount} forwards;
  }

  //
  & .lastPainted::after {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: var(--light-color);
    animation: ${ProficiencyFrame} 0.3s ease-in-out
      ${(props) => props.animationCount} forwards;
  }

  .lastPainted::after {
    animation: ${(props) => Under20perFrame(props.width)} 0.3s ease-in-out
      ${(props) => props.animationCount} forwards;
  }

  // 게이지별 delay
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
export default function SkillGauge({ per, scrollY }) {
  const gaugeRef = useRef();
  const [frame, setFrame] = useState("none");

  useEffect(() => {
    if (
      scrollY + window.innerHeight >=
      gaugeRef.current.offsetTop + gaugeRef.current.clientHeight * 3
    ) {
      setFrame("alternate");
    } else {
      setFrame("none");
    }
  }, [scrollY]);
  const lastPaint = (num) => (
    <React.Fragment>
      <li className='lastPainted'></li>
      {createArray(5 - Math.trunc(num / 20) - 1).map((n, i) => (
        <li key={i + 5}></li>
      ))}
    </React.Fragment>
  );
  return (
    <Container ref={gaugeRef}>
      <GaugeWrap width={(per % 20) * 5} animationCount={frame}>
        {createArray(Math.trunc(per / 20)).map((n, i) => (
          <li
            key={i}
            className={i < Math.trunc(per / 20) ? "painted" : "lastPainted"}
          ></li>
        ))}
        {per !== 100 ? lastPaint(per) : null}
      </GaugeWrap>
      <p className='per'>{per}%</p>
    </Container>
  );
}
