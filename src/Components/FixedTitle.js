import React from "react";
import styled from "styled-components";

const TitleWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: var(--gap);
  z-index: 9998;
`;

const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 800;
  span {
    color: var(--point-color);
  }
  transition: all 1s;
`;

export default function FixedTitle({ title, subTitle }) {
  return (
    <TitleWrap>
      <Title>
        <span>{title} </span>
        {subTitle}
      </Title>
    </TitleWrap>
  );
}
