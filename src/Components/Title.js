import React, { useEffect } from "react";
import styled from "styled-components";

const TitleText = styled.p`
  display: inline-block;
  font-size: 4vw;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
  color: ${(props) => props.color};
  span {
    color: var(--point-color);
  }
`;

export default function Title({ title, subTitle, scrollY, invisiblePosition }) {
  useEffect(() => {
    console.log(document.querySelector(".hide"));
    if (scrollY > invisiblePosition) {
      document.querySelector(".hide").style.opacity = 0;
    } else {
      document.querySelector(".hide").style.opacity = 1;
    }
  }, [scrollY, invisiblePosition]);
  return (
    <TitleText>
      <span className='hide'>{title}</span>
      {subTitle}
    </TitleText>
  );
}
