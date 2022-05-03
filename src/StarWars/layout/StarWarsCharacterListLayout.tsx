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
          {imageNode}
          {titleNode}
        </StFlex>
        <StFlex direction="column">
          {heightNode}
          {genderNode}
          {homeWorldNode}
        </StFlex>
        <StFlex marginLeft="auto">{learnMoreNode}</StFlex>
      </StFlex>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.secondaryColor};
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
