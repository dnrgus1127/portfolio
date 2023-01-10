import React from "react";
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
  return (
    <TitleText>
      <span
        className='hide'
        style={scrollY > invisiblePosition ? { opacity: 0 } : { opacity: 1 }}
      >
        {title}
      </span>
      {subTitle}
    </TitleText>
  );
}
