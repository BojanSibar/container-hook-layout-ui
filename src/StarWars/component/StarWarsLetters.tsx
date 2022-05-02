import React from "react";
import styled, { css } from "styled-components";

type Props = {
  title: string;
  subTitle: string;
  description: string;
};

export function StarWarsLetters({
  title,
  subTitle,
  description,
}: Props): JSX.Element {
  return (
    <ScRoot>
      <ScCrawl>
        <div>
          <p style={{ textAlign: "center" }}>{title}</p>
          <h1 style={{ textAlign: "center" }}>{subTitle}</h1>
        </div>
        <ScDescription>{description}</ScDescription>
      </ScCrawl>
    </ScRoot>
  );
}

interface ScRootProps {}
const ScRoot = styled.div<ScRootProps>`
  display: flex;
  justify-content: center;
  position: relative;
  height: 300px;
  color: #feda4a;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
  overflow: hidden;
`;

const ScCrawl = styled.div`
  position: relative;
  top: 99999px;
  transform-origin: 50% 100%;
  animation: crawl 60s linear;

  @keyframes crawl {
    0% {
      top: -100px;
      transform: rotateX(20deg) translateZ(0);
    }
    100% {
      top: -6000px;
      transform: rotateX(25deg) translateZ(-2500px);
    }
  }
`;

const ScDescription = styled.div``;
