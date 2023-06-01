import React from 'react';
import '../css/ReservPlace.css';

function ReservPlace() {
  return (
    <>
   
   <div className='Reserv'>
    <div className='ReservAll'>
      <div className="text">
        00님,<br />
        오늘 <span style={{ color: '#7C00DE' }}>예약된 장소</span>를 확인하세요.
      </div>
      <div className='resInfo'>
        <a className='resPosition'>상상카페 B4</a>
        <a className='resTime'>2:00~3:00</a>
        <a className='resDate'>2023.04.05</a>
      </div>
    </div>
    <div className='bar'></div>
    </div>
    </>
  );
}

export default ReservPlace;
