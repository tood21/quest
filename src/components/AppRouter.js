import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

function AppRouter({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path='/' element={<Home />}></Route>
          </>
        ) : (
          <Route path='/' element={<Auth />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
