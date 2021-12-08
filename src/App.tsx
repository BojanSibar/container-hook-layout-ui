import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StDiv>new awesome app</StDiv>
    </ThemeProvider>
  );
}

const StDiv = styled.div`
  border: 1px solid blue;
`;

export default App;
