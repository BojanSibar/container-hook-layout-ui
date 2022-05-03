import React from "react";
import { ThemeProvider } from "styled-components";
import StarWarsCharacters from "./StarWars/container/StarWarsCharacters";
import { lightTheme } from "./styles/theme";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <SkeletonTheme
        baseColor={lightTheme.skeletonColor}
        highlightColor={lightTheme.secondaryColor}
      >
        <StarWarsCharacters />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
