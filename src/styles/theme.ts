import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    skeletonColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: "#333",
  secondaryColor: "#666",
  skeletonColor: "#202020",
};

export const darkTheme: DefaultTheme = {
  primaryColor: "#fff",
  secondaryColor: "#cacaca",
  skeletonColor: "#202020",
};

export type ThemeVariants = "lightTheme" | "darkTheme";
