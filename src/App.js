import React, { useState } from 'react';
import AppRouter from './components/Router';
import { authService } from './fb';

// CHECK:: react-router-dom 버전
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
