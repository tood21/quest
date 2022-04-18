import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

export default function Router({isLoggedIn}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          { isLoggedIn ? (
              <>
                <Route path='/' element={ < Home /> }></Route>
              </>
            )
            : (
              <Route path='/' element={ <Auth /> }></Route>
            )
          }
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
