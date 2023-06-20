
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import '../css/ReservPlace.css';

function ReservPlace() {
  const location = useLocation();

  const email = location?.state?.email;
  console.log(email);

  return (
    <div className='ReservAll'>
      <div className="bar"></div>
      <div className="reservText">
        {email}님,<br />
        오늘 <span style={{ color: '#7C00DE' }}>예약된 장소</span>를 확인하세요.
      </div>
      <div className='resInfo'>
        <a className='resPosition'>상상카페 B4</a>
        <a className='resTime'>2:00~3:00</a>
        <a className='resDate'>2023.04.05</a>
      </div>
    </div>
  );
}

export default ReservPlace;
