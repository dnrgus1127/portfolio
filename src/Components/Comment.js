import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 32vh;
  border: 1px solid wheat;
  border-radius: 4px;
  font-size: 3rem;
  color: white;
  margin-bottom: 2rem;
`;
export default function Comment({ text }) {
  return <Container>{text}</Container>;
}
