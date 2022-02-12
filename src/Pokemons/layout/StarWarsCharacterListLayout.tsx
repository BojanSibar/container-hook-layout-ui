import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Property } from "csstype";

interface Props {
  imageNode: ReactNode;
  learnMoreNode: ReactNode;
  titleNode: ReactNode;
  heightNode: ReactNode;
  genderNode?: ReactNode;
  homeWorldNode?: ReactNode;
}

export default function StarWarsCharacterListLayout({
  imageNode,
  learnMoreNode,
  titleNode,
  heightNode,
  genderNode,
  homeWorldNode,
}: Props): ReactElement {
  return (
    <StWrapper>
      <StFlex>
        <StFlex direction="column">
          <div>{imageNode}</div>
          <div>{titleNode}</div>
        </StFlex>
        <StFlex direction="column">
          <div>{heightNode}</div>
          <div>{genderNode}</div>
          <div>{homeWorldNode}</div>
        </StFlex>
        <StFlex marginLeft="auto">
          <div>{learnMoreNode}</div>
        </StFlex>
      </StFlex>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  border: 1px solid black;
  padding: 10px 30px;
`;

const StFlex = styled.div<{
  direction?: Property.FlexDirection;
  marginLeft?: Property.Margin;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "inherit")};
`;
