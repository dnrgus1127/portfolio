import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin-top: 2rem;
  list-style-type: square;
  & > li {
    margin-left: var(--gap);
    margin-top: 1em;
    font-weight: 800;
  }

  & > li::marker {
  }
`;

export default function TitleAndList({ list, title }) {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <List>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </List>
    </React.Fragment>
  );
}
