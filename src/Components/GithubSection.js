import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  /* font-family: "Black Han Sans", sans-serif; */
  padding: 4% 0;
  color: white;
  & > h1 {
    font-size: 6rem;
    font-family: inherit;
    font-weight: 800;
    margin-bottom: 2vh;
  }
  .githubLink {
    display: flex;
    justify-content: end;
    padding: 0 var(--gap);

    a {
      line-height: 100%;
      margin-left: 0.5rem;
      margin-top: 0.1rem;
    }
  }
`;

const MarkdownCss = styled.div`
  padding: 0 var(--gap);
  text-align: left;

  h1,
  h2,
  h3,
  h4 {
    margin: 2rem 0;
  }

  ul {
    margin: 20px;
  }

  & > ul {
    list-style: inside;
  }

  li {
    color: white;
  }
  & > p {
    font-size: 1.2em;
    color: white;
    word-break: keep-all;
  }

  hr {
    margin: 3rem 0;
  }
`;

const projectArr = ["portfolio", "componentProject", "noticeBoard"];

export default function GithubSection() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  const [url, setUrl] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/repos/dnrgus1127/${projectArr[index]}/readme`)
      .then((res) => res.json())
      .then((json) => {
        fetch(json.download_url)
          .then((res) => res.text())
          .then((markdown) => {
            setData(markdown);
          });
      });
  }, [index]);

  useEffect(() => {
    fetch(`https://api.github.com/users/dnrgus1127`)
      .then((res) => res.json())
      .then((json) => {
        setUrl(json.html_url);
      });
  });

  return (
    <Container>
      <h1>깃허브</h1>
      <div className='githubLink'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='white'
          viewBox='0 0 24 24'
        >
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z' />
        </svg>

        {url ? <a href={url}>깃허브 바로가기</a> : null}
      </div>

      <MarkdownCss>
        {data ? <ReactMarkdown>{data}</ReactMarkdown> : null}
      </MarkdownCss>
      <button
        onClick={() => {
          setIndex((index + 1) % 3);
        }}
      >
        next
      </button>
    </Container>
  );
}
