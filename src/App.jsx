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
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
  
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/transfer' element={<Transfer />} />
          <Route path='/livescore' element={<LiveScore />} />
          <Route path='/other' element={<Other />} />
          <Route path="/details/:newsId" element={<Details />} />
          <Route path="*" element={<div style ={{color:"#fff"}}>poxu cixdi niko, davay siktir burdan!!!</div>} />
        </Routes>
   
    </>

  );
};

export default App;