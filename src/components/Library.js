import React, { useState } from 'react';
import SelectDate from './SelectDate';
import '../css/Library.css';
import BottomInfo from './BottomInfo';

/* 상상카페 자리 예약 */
function Library() {
  const [SelectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    const seatName = seatNames[seatsData.indexOf(seat)];
    if (SelectedSeats.includes(seatName)) {
      setSelectedSeats(SelectedSeats.filter((selectedSeat) => selectedSeat !== seatName));
    } else {
      setSelectedSeats([...SelectedSeats, seatName]);
    }
  };
  const seatNames = ['A1', 'A2', 'A3', 'A4','A5','A6','A7','A8', 'B1', 'B2', 'B3','B4', 'C1','C2','C3','C4','D1','D2','D3','D4','E1','E2','E3','E4','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','G1','G2','G3','G4','G5','G6','G7','G8','G9','G10', ' ', ' ', ' ', ' ', ' ', ' ',' '];
  const seatsData = [
    //A
    {x: 0, y: 0},
    {x: 65, y: 0},
    {x: 130, y: 0},
    {x: 195, y: 0},
    {x: 260, y: 0},
    {x: 325, y: 0},
    {x: 390, y: 0},
    {x: 455, y: 0},
    //B
    {x: 0, y: 90},
    {x: 65, y: 90},
    {x: 0, y: 200},
    {x: 65, y: 200},
    //C
    {x: 0, y: 290},
    {x: 65, y: 290},
    {x: 0, y: 400},
    {x: 65, y: 400},
    //D
    {x: 150, y: 90},
    {x: 215, y: 90},
    {x: 150, y: 200},
    {x: 215, y: 200},
    //E
    {x: 150, y: 290},
    {x: 215, y: 290},
    {x: 150, y: 400},
    {x: 215, y: 400},
    //F
    {x: 455, y: 90},
    {x: 520, y: 90},
    {x: 585, y: 90},
    {x: 650, y: 90},
    {x: 715, y: 90},
    {x: 455, y: 200},
    {x: 520, y: 200},
    {x: 585, y: 200},
    {x: 650, y: 200},
    {x: 715, y: 200},
    //G
    {x: 455, y: 290},
    {x: 520, y: 290},
    {x: 585, y: 290},
    {x: 650, y: 290},
    {x: 715, y: 290},
    {x: 455, y: 400},
    {x: 520, y: 400},
    {x: 585, y: 400},
    {x: 650, y: 400},
    {x: 715, y: 400},
    //TABLE
    {x: 0, y:-38, width : 505, height:49},
    {x: 0, y:180, width : 115, height:35},
    {x: 150, y:180, width : 115, height:35},
    {x: 0, y:380, width : 115, height:35},
    {x: 150, y:380, width : 115, height:35},
    {x: 455, y:180, width : 314, height:35},
    {x: 455, y:380, width : 314, height:35},

  ];

  const handleReservation = () =>{
    const reservationData={
      selectedSeats:SelectedSeats
    }
    return reservationData
  }

  const screenSize = { width: 500, height: 600 }    //나중에 조절하기 margin같은거
  return (
    <div className='LibraryAll'>
      <div className="Lsub-title">
        <h2>도서관: {SelectedSeats.join(", ")}</h2>
        <h4 className="LExplanation">
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
              if(seatName!==' '){
                return <div 
                className={seatClassName}
                style={{ position: "absolute", left: s.x, top: s.y, width : s.width, height : s.height}}
                onClick={() =>handleSeatClick(s)}
                seleted={SelectedSeats.includes(seatNames[idx])}>
                  {seatNames[idx]}</div>
              }
              else{
                return <div
                style={{position : "absolute", left : s.x, top : s.y, width : s.width, height : s.height}}
                className='table'
                >
                </div>
              }
            })
        }
    </div>

      <BottomInfo onReservation={handleReservation} currentComponent="Library"/>
    </div>
  );
}

export default Library;
