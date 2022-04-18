import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 1.5rem;
  font-size: 1.8rem;
  line-height: 1.3em;
  color: #fffbf0;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
