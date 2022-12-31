import React from "react";
import styled from "styled-components";

const TitleWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: var(--gap);
  z-index: 9998;
  transform: translateY(-100%);
`;

const TitleText = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
  color: ${(props) => props.color};
  span {
    color: var(--point-color);
  }
`;

export default function Title({ title, subTitle }) {
  return (
    <TitleWrap>
      <TitleText>
        <span>{title} </span>
        {subTitle}
      </TitleText>
    </TitleWrap>
  );
}
