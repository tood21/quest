import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Auth } from '../pages/index.js';

const AppRouter = ({isLoggedIn}) => {
  console.log('isLoggedIn', isLoggedIn);
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path='/' element={<Home />}></Route>
        ) : (
          <Route path='/' element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;