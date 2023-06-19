import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Outlet, Navigate } from 'react-router-dom';

import ImaginationCafe from './components/ImaginationCafe';
import ReservPlace from './components/ReservPlace';
import SelectPlace from './components/SelectPlace';
import Library from './components/Library';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PersonalPage from './components/PersonalPage';
import SchoolMap from './components/SchoolMap';
import Floor2Map from './components/Floor2Map';
import Floor3Map from './components/Floor3Map';
import Floor4Map from './components/Floor4Map';
import {auth} from './firebase'

//img
import Profile from './img/Profile.jpg';
import GoogleButton from './components/GoogleButton';
import { onAuthStateChanged } from 'firebase/auth';

function Layout() {
  const location = useLocation();
  const isSchoolMap = location.pathname.includes("/places/schoolmap");
  const isPersonalPage = location.pathname.includes("/places/personalpage");
  const user = auth.currentUser;
  let email = "";
  if (user) {
    // 사용자가 로그인되어 있는 경우
    email = user.providerData[0].uid;
    console.log('Identifier:', email);
    // 추가적인 사용자 정보 및 작업 수행
  } else {
    console.log('로그인 하지 않은 계정');
  }

  return (
    <div>
      <div className='MainTopStyle'>
        <Link to="/places" className="title">DotJari.</Link>
        <Link to="/places/imaginationcafe" className='selectMenu'> 상상카페 </Link>
        <Link to="/places/library" className='selectMenu'> 도서관 </Link>
        <Link to="/places/schoolmap" className='selectMenu'> 학교 지도 </Link>  
        <a className='Name'>{email}</a>
        <Link to="/places/personalpage">
          <img className='profile' alt="profile" src={Profile} />
        </Link>
      </div>
      {!isSchoolMap && !isPersonalPage && <ReservPlace />}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

        <Route path="/places" element={<Layout />}>
          <Route index element={<SelectPlace />} />
          <Route path="imaginationcafe" element={<ImaginationCafe />} />
          <Route path="library" element={<Library />} />
          <Route path="schoolmap" element={<SchoolMap />} />
          <Route path="personalpage" element={<PersonalPage />} />
          <Route path="floor2" element={<Floor2Map />} />
          <Route path="floor3" element={<Floor3Map />} />
          <Route path="floor4" element={<Floor4Map />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
