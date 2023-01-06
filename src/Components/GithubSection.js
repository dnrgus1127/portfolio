import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  /* font-family: "Black Han Sans", sans-serif; */
  padding: 4% 0;
  & > h1 {
    color: white;
    font-size: 6rem;
    font-family: inherit;
    font-weight: 800;
    margin-bottom: 4%;
  }
`;
const MarkdownCss = styled.div`
  padding: 0 4%;
  text-align: left;
  li {
    color: lightgrey;
  }
  ul {
    margin: 20px;
  }

  & > p {
    font-size: 1.4em;
    color: white;
  }
  & > p:first-child {
    font-size: 3em;
    color: lightgreen;
  }
`;
export default function GithubSection() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.github.com/repos/dnrgus1127/ComponentProject/readme")
      .then((res) => res.json())
      .then((json) => {
        fetch(json.download_url)
          .then((res) => res.text())
          .then((markdown) => {
            setData(markdown);
            console.log(markdown);
          });
      });
  }, []);
  return (
    <Container>
      <h1>깃허브</h1>
      {data ? <a href={data.html_url}>깃허브 바로가기</a> : null}
      <MarkdownCss>
        {data ? <ReactMarkdown>{data}</ReactMarkdown> : null}
      </MarkdownCss>
    </Container>
  );
}
