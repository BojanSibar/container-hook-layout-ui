import { forwardRef, ReactNode } from "react";
import styled from "styled-components";

export type LayoutVariant = "grid" | "list";
interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  variant: LayoutVariant;
  headerNode: ReactNode;
  bodyNode: ReactNode;
}

const produceTemplateColumn = (variant: LayoutVariant): string => {
  if (variant === "grid") {
    return "repeat(auto-fit, minmax(550px, 1fr))";
  }
  return "1fr";
};

export const GridAndListLayout = forwardRef<HTMLDivElement, Props>(
  ({ variant, headerNode, bodyNode }, divRef) => {
    const templateColumn = produceTemplateColumn(variant);
    return (
      <StWrapper ref={divRef}>
        <StHeader>{headerNode}</StHeader>
        <StBody templateColumn={templateColumn}>{bodyNode}</StBody>
      </StWrapper>
    );
  }
);

const StWrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

const StBody = styled.div<{ templateColumn: string }>`
  display: grid;
  grid-template-columns: ${({ templateColumn }) => templateColumn};
  gap: 10px;
`;
