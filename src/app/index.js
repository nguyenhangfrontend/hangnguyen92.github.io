import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "vars/theme";
import ClientLayout from "pages";
import { BrowserRouter, Route } from "react-router-dom";
import { Main } from "./styled";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main>
          <Route path={"/"} component={ClientLayout} />
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
