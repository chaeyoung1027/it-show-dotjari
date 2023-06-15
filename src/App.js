import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Outlet, Navigate } from 'react-router-dom';

import ImaginationCafe from './components/ImaginationCafe';
import ReservPlace from './components/ReservPlace';
import SelectPlace from './components/SelectPlace';
import Library from './components/Library';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PersonalPage from './components/PersonalPage';
import LabMap from './components/LabMap';
import ImaginationCafeMap from './components/ImaginationCafeMap';
import LibraryMap from './components/LibraryMap';
import SchoolMap from './components/SchoolMap';

//img
import Profile from './img/Profile.jpg';
import GoogleButton from './components/GoogleButton';

function Layout() {
  const location = useLocation();
  const isSchoolMap = location.pathname.includes("/places/schoolmap");
  const isPersonalPage = location.pathname.includes("/places/personalpage");

  return (
    <div>
      <div className='MainTopStyle'>
        <Link to="/places" className="title">DotJari.</Link>
        <Link to="/places/imaginationcafe" className='selectMenu'> 상상카페 </Link>
        <Link to="/places/library" className='selectMenu'> 도서관 </Link>
        <Link to="/places/schoolmap" className='selectMenu'> 학교 지도 </Link>  
        <a className='Name'>3333 성이름</a>
        <Link to="/places/personalpage">
          <img className='profile' alt="profile" src={Profile} />
        </Link>
      </div>
      {!isSchoolMap && !isPersonalPage && <ReservPlace />}
      <Outlet />
    </div>
  );
}

function Layout2() {
  const location = useLocation();
  const isSchoolMap = location.pathname.includes("/places/schoolmap");
  const isPersonalPage = location.pathname.includes("/places/personalpage");

  return (
    <div>
      <div className='MainTopStyle'>
        <Link to="/places" className="title">DotJari.</Link>
        <Link to="/places/imaginationcafe" className='selectMenu'> 상상카페 </Link>
        <Link to="/places/library" className='selectMenu'> 도서관 </Link>
        <Link to="/places/schoolmap" className='selectMenu'> 학교 지도 </Link>  
        <a className='Name'>3333 성이름</a>
        <Link to="/places/personalpage">
          <img className='profile' alt="profile" src={Profile} />
        </Link>
      </div>
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
        </Route>

        <Route path="/placesinfo" element={<Layout2 />}>
          <Route path="imaginationcafe" element={<ImaginationCafeMap />} />
          <Route path="library" element={<LibraryMap />} />
          <Route path="lab" element={<LabMap />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
