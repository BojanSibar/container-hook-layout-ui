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
  background-color: #e7e7e7; /* Grey */
  border: solid black;
  border-width: ${({ isSelected }) => (!!isSelected ? "1px" : "0")};
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
