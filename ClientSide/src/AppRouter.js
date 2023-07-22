import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import UserRegister from './component/User/UserRegister';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path={'/'} element={<LandingPage/>} />
            <Route path={'/userRegister'} element={<UserRegister/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter

