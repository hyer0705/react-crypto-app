import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { router } from "./router.tsx";
import { darkTheme } from "./app-theme.ts";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
  }
  a {
    text-decoration: none;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
