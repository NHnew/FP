import React from 'react';
import Login from './pages/Form/Login';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import SignUp from './pages/Form/SignUp';
import Home from './pages/Home/Home';



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Navigate replace to='/login' />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>

    </>
  );
};

export default App;