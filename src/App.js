import AppRouter from "./components/AppRouter";
import React, { useState } from "react";
import { authService } from "./fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
