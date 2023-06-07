import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ImaginationCafe from './components/ImaginationCafe';
import ReservPlace from './components/ReservPlace';
import SelectPlace from './components/SelectPlace';
import Library from './components/Library';
import Profile from './img/Profile.jpg';

function App() {
  return (
    <Router>
      <div className='MainTopStyle'>
        <Link to="/selectplace" className="title">DotJari.</Link>
        <Link to="/ImaginationCafe" className='selectMenu'> 상상카페 </Link>
        <Link to="/library" className='selectMenu'> 도서관 </Link>
        <Link to="/selectplace" className='selectMenu'> 학교 지도 </Link>  
        <a className='Name'>3333 성이름</a>
        <img className='profile' alt="profile" src={Profile} />
      </div>

      <div className='ReservPAll'>
        <Routes>
          <Route path='/' element={<SelectPlace/>}/>
          <Route path="/selectplace" element={<SelectPlace />} />
          <Route path="/imaginationcafe" element={<ImaginationCafe />} />
          <Route path="/library" element={<Library />} />
          <Route path="/reservplace" element={<ReservPlace />} />
        </Routes>
        <ReservPlace/>
      </div>
    </Router>
  );
}

export default App;
