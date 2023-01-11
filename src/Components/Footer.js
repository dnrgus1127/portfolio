import React from "react";
import styled from "styled-components";
import velogIcon from "../assets/img/green favicon.png";
import instagramIcon from "../assets/img/instaIcon.png";
import githubIcon from "../assets/img/iconmonstr-github-3-240.png";

const Container = styled.footer`
  width: 100%;
  background-color: #1f2023;
  color: white;
  font-family: sans-serif;
  text-align: center;
  padding: calc(var(--gap) / 2) var(--gap);

  h1 {
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: 800;
  }

  .name {
    color: var(--point-color);
  }

  @media screen and (max-width: 640px) {
    padding: var(--gap);
    padding-bottom: calc(var(--gap) / 2);

    h2 {
      font-size: 1rem;
      word-break: keep-all;
    }
  }

  .madeBy {
    text-align: end;
    color: rgb(60, 60, 60);
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

const SiteMap = styled.div`
  display: flex;
  ul {
    list-style: none;
    display: flex;
    margin: 3em auto;
    justify-content: space-between;
    width: 60%;
  }
  li {
    width: 6rem;
    height: 6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    li {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Contact = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  color: lightgrey;
  padding: 3rem;

  @media screen and (max-width: 640px) {
    display: block;
  }
`;

export default function Footer() {
  return (
    <Container>
      <h1>프론트엔드 개발자 정욱현</h1>
      <h2>About me ▼</h2>
      <SiteMap className='siteMap'>
        <ul>
          <li>
            <a href='https://www.instagram.com/dnrgus1127'>
              <img src={instagramIcon} alt='instagram' />
            </a>
          </li>
          <li>
            <a href='https://velog.io/@dnrgus1127'>
              <img src={velogIcon} alt='velog' />
            </a>
          </li>
          <li>
            <a href='https://github.com/dnrgus1127'>
              <img src={githubIcon} alt='' />
            </a>
          </li>
        </ul>
      </SiteMap>
      <hr />
      <Contact>
        <li>Phone : 010-0000-0000</li>
        <li>E-mail : dnrgus1127@naver.com</li>
        <li>GitHub : https://github.com/dnrgus1127</li>
      </Contact>
      <div className='madeBy'>
        <p>Project start by 2023 January</p>
      </div>
    </Container>
  );
}
