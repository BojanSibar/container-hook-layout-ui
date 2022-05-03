import styled from "styled-components";

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const Link = styled.a`
  &:link,
  &:visited {
    background-color: #f44336;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  &:hover,
  &:active {
    background-color: red;
  }
`;

export const Button = styled.button<{ isSelected?: boolean }>`
  background-color: ${({ theme }) => theme.secondaryColor}; /* Grey */
  border: solid transparent;
  border-color: ${({ isSelected, theme }) =>
    !!isSelected ? theme.skeletonColor : "transparent"};
  padding: 15px 32px;
  color: ${({ theme }) => theme.skeletonColor};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
`;
