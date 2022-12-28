import React from "react";
import styled from "styled-components";

const HeaderCon = styled.nav``;

const HeaderMenu = styled.ul`
  list-style: none;
  font-family: "Montserrat", sans-serif;
  color: #555555;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  a {
    display: inline-block;
    box-sizing: content-box;
    line-height: var(--line-height-medium);
    padding: 0.24em 0;

    letter-spacing: var(--ls-10);
    text-transform: uppercase;
  }
  &:hover {
    color: var(--point-color);
    transition: color 0.4s;
    &::before {
      opacity: 1;
    }
  }
  &::before {
    content: " ";
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    background-color: var(--point-color);
    box-shadow: 0 0 4px var(--point-color);
    border-radius: 50%;
    margin-right: 0.6em;
    opacity: 0;

    transition: opacity 0.4s;
    transform: translateY(-1px);
  }
`;

export default function Gnb() {
  return (
    <HeaderCon>
      <HeaderMenu>
        <MenuItem>
          <a href='/'>ABOUT</a>
        </MenuItem>
        <MenuItem>
          <a href='/'>PORTFOLIO</a>
        </MenuItem>
        <MenuItem>
          <a href='/'>STACK</a>
        </MenuItem>
        <MenuItem>
          <a href='/'>CONTACT</a>
        </MenuItem>
      </HeaderMenu>
    </HeaderCon>
  );
}
