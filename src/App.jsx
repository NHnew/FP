import React from 'react';
import Login from './pages/Form/Login';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import SignUp from './pages/Form/SignUp';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Transfer from './pages/Transfer/Transfer';
import LiveScore from './pages/LiveScore/LiveScore';
import Other from './pages/Other/Other';
import Details from './pages/Details/Details';



const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/transfer' element={<Transfer />} />
          <Route path='/livescore' element={<LiveScore />} />
          <Route path='/other' element={<Other />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </>

  );
};

export default App;