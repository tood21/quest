import AppRouter from "./components/AppRouter";
import React, { useEffect, useState } from "react";
import { authService } from "./fbase";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  const GlobalStyles = createGlobalStyle`
    ${reset};
`;

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : ""}
    </>
  );
}

export default App;
