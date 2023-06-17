import React, { useState } from 'react';
import SelectDate from './SelectDate';
import Seat from './Seat';
import '../css/ImaginationCafe.css';
import BottomInfo from './BottomInfo';

/*상상카페 자리 예약*/
function ImaginationCafe() {
  const [SelectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    const seatName = seatNames[seatsData.indexOf(seat)];
    if (SelectedSeats.includes(seatName)) {
      setSelectedSeats(SelectedSeats.filter((selectedSeat) => selectedSeat !== seatName));
    } else {
      setSelectedSeats([...SelectedSeats, seatName]);
    }
  };
  
  const seatNames = ['A1', 'A2', 'A3', 'A4','A5','A6', 'B1', 'B2', 'B3','B4','B5','B6', 'C1','C2','C3','C4','D1','D2','D3','D4','E1','E2','E3','E4','F1','F2','F3','F4'];
  const seatsData = [
    //A
    {x: 0, y: 0},
    {x: 190, y: 0},
    {x: 0, y: 65},
    {x: 190, y: 65},
    {x: 0, y: 130},
    {x: 190, y: 130},
    //B
    {x: 0, y: 245},
    {x: 190, y: 245},
    {x: 0, y: 310},
    {x: 190, y: 310},
    {x: 0, y: 375},
    {x: 190, y: 375},
    //C
    {x: 350, y: 65},
    {x: 540, y: 65},
    {x: 350, y: 130},
    {x: 540, y: 130},
    //D
    {x: 350, y: 245},
    {x: 540, y: 245},
    {x: 350, y: 310},
    {x: 540, y: 310},
    //E
    {x: 700, y: 65},
    {x: 890, y: 65},
    {x: 700, y: 130},
    {x: 890, y: 130},
    //F
    {x: 700, y: 245},
    {x: 890, y: 245},
    {x: 700, y: 310},
    {x: 890, y: 310},
  ];

  const screenSize = { width: 500, height: 600 }    //나중에 조절하기 margin같은거
  return (
    <div className='ImaginationCafeAll'>
      <div className="sub-title">
        <h2>상상카페 : {SelectedSeats.join(", ")}</h2>
        <h4 className="Explanation">
          &nbsp; 원하는 시간대를 검색한 후 남은 좌석을 선택해주세요
        </h4>
      </div>
      <SelectDate />

      <div style={ {width: screenSize.width, height: screenSize.height, position: "relative" } }>
        {
            seatsData.map((s, idx) => {
              const seatName = seatNames[idx];
              const isSeatSelected = SelectedSeats.includes(seatName);
              const isSeatAvailable = !isSeatSelected;
              const seatClassName = `Lseat ${isSeatSelected ? "selected" : isSeatAvailable ? "available" : ""}`;
                return <div 
                className={seatClassName}
                style={{ position: "absolute", left: s.x, top: s.y}}
                onClick={() =>handleSeatClick(s)}
                seleted={SelectedSeats.includes(seatNames[idx])}>
                  {seatNames[idx]}</div>
            })
        }
    </div>
      <BottomInfo/>
    </div>
  );
}

export default ImaginationCafe;