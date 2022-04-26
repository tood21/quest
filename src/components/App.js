import React, { useEffect, useState } from "react";
import Router from "./Router";
import { authService } from "../fbData";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])
  
  return (
    <div>
      {init ? <Router isLoggedIn={isLoggedIn} /> : 'Initializing...'}
    </div>
  );
}

export default App;