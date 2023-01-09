import React from "react";
import styled from "styled-components";
import reactIcon from "../assets/img/pngwing.com.png";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  padding: 3rem 6rem;
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

  & > div {
    width: 50%;
  }

  .iconWrap {
  }
  .infoWrap {
    text-align: left;
  }
  h2 {
    position: relative;
    display: inline-block;
  }
  .infoWrap h2::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 3px;
    width: 100%;
    background-color: var(--point-color);
  }

  img {
    width: 50%;
  }
`;

export default function StackSection() {
  return (
    <Container>
      <h1>기술 스택</h1>
      <StackItem className='stackSection'>
        <div className='infoWrap'>
          <h2>리액트</h2>
        </div>
        <div>
          <img src={reactIcon} alt='' />
        </div>
      </StackItem>
    </Container>
  );
}
