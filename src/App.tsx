import React from "react";
import styled, { ThemeProvider } from "styled-components";
import StarWarsCharacters from "./StarWars/container/StarWarsCharacters";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StarWarsCharacters />
    </ThemeProvider>
  );
}

export default App;
