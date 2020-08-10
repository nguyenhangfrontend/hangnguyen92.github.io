import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import theme from "vars/theme";
import Header from "layout/Header";
import ClientLayout from "pages";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div>{"loading"}</div>}>
          <Header />
        </Suspense>
        <Route path={"/"} component={ClientLayout} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
