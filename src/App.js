import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';

import ImaginationCafe from './components/ImaginationCafe';
import ReservPlace from './components/ReservPlace';
import SelectPlace from './components/SelectPlace';
import Library from './components/Library';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserInfo from './components/UserInfo';

//img
import Profile from './img/Profile.jpg';

function Layout() {
  return <div>
      <div className='MainTopStyle'>
        <Link to="/login" className='login'>로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/userinfo">회원정보</Link>
        <Link to="/selectplace" className="title">DotJari.</Link>
        <Link to="/ImaginationCafe" className='selectMenu'> 상상카페 </Link>
        <Link to="/library" className='selectMenu'> 도서관 </Link>
        <Link to="/selectplace" className='selectMenu'> 학교 지도 </Link>  
        <a className='Name'>3333 성이름</a>
        <img className='profile' alt="profile" src={Profile} />
      </div>
    <Outlet />
    <ReservPlace />
  </div>
}

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route path='/' element={<Login/>}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/userinfo' element={<UserInfo/>}/>

          <Route path="/places" element={<Layout />}>
            <Route index element={<SelectPlace />} />
            <Route path="imaginationcafe" element={<ImaginationCafe />} />
            <Route path="library" element={<Library />} />
          </Route>
        </Routes>
      
    </Router>
  );
}

export default App;
