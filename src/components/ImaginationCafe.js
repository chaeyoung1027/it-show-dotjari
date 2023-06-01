import React, { useState } from 'react';
import SelectDate from './SelectDate'
import Seat from './Seat'
import '../css/ImaginationCafe.css'

/*상상카페 자리 예약*/
function ImaginationCafe() {
    const [SelectedSeats, setSelectedSeats] = useState([]);
  
    const handleSeatClick = (seat) => {
      if (SelectedSeats.includes(seat)) {
        setSelectedSeats(SelectedSeats.filter((SelectedSeats) => SelectedSeats !== seat));
      } else {
        setSelectedSeats([...SelectedSeats, seat]);
      }
    };
  
    const seatsData = [
      ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'],
      ['A4', 'A5', 'A6', 'B4', 'B5', 'B6'],
      ['C1', 'C2', 'D1', 'D2'],
      ['C3', 'C4', 'D3', 'D4'],
      ['E1', 'E2', 'F1', 'F2'],
      ['E3', 'E4', 'F3', 'F4'],
    ];
  
    return (
        <div className='allbox'>

        <div className="sub-title">
          <h2>상상카페 : {SelectedSeats.join(", ")}</h2>
          <h4 className="Explanation">
            &nbsp; 원하는 시간대를 검색한 후 남은 좌석을 선택해주세요
          </h4>
        </div>
          <SelectDate />

        <div className="cafe-seats-container">
          {seatsData.map((row, index) => (
            <div key={index}>
              {row.map((seat) => (
                <Seat
                  key={seat}
                  onClick={() => handleSeatClick(seat)}
                  selected={SelectedSeats.includes(seat)}
                  seatName={seat}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  <Seat />
  
  

  export default ImaginationCafe