import { forwardRef, ReactNode } from "react";
import styled from "styled-components";

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  headerNodeLeft: ReactNode;
  bodyNode: ReactNode;
}

const GridLayout = forwardRef<HTMLDivElement, Props>(
  ({ headerNodeLeft, bodyNode }, divRef) => {
    return (
      <StWrapper ref={divRef}>
        <StHeader>
          <StHeaderLeft>{headerNodeLeft}</StHeaderLeft>
        </StHeader>
        <StBody>{bodyNode}</StBody>
      </StWrapper>
    );
  }
);

const StWrapper = styled.div``;

const StHeader = styled.div``;

const StHeaderLeft = styled.div``;

const StBody = styled.div``;
