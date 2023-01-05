import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  /* font-family: "Black Han Sans", sans-serif; */
  height: 100vh;

  h1 {
    color: white;
    font-size: 6rem;
    font-family: inherit;
    font-weight: 800;
  }
`;

export default function GithubSection() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/dnrgus1127")
      .then((res) => res.json())
      .then((json) => {
        console.log(json, json.avatar_url, json.name, json.repos_url);
        setData(json);
      });
  }, []);
  return (
    <Container>
      <h1>깃허브</h1>
      {data ? <a href={data.html_url}>깃허브 바로가기</a> : null}
    </Container>
  );
}
