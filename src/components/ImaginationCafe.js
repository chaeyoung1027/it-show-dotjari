import React, { useState } from 'react';
import SelectDate from './SelectDate';
import Seat from './Seat';
import '../css/ImaginationCafe.css';
import BottomInfo from './BottomInfo';

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
  const seatNames = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];
  const seatsData = [
    {x:0, y : 0, width : 500, height : 500}
  ];

  return (
    <div className='ImaginationCafeAll'>
      <div className="sub-title">
        <h2>상상카페 : {SelectedSeats.join(", ")}</h2>
        <h4 className="Explanation">
          &nbsp; 원하는 시간대를 검색한 후 남은 좌석을 선택해주세요
        </h4>
      </div>
      <SelectDate />

      <div className='cafe-seats-container'>
        {
          seatsData.map((s, idx) =>{
            <div className='seats'>{idx}</div>
          })
        }
      </div>

      {/* <div className="cafe-seats-container">
        {seatsData.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((seat, seatIndex) => (
              <Seat
                key={seat}
                onClick={() => handleSeatClick(seat)}
                selected={SelectedSeats.includes(seat)}
                seatName={seat}
              />
            ))}
          </div>
        ))}
      </div> */}

      <BottomInfo/>
    </div>
  );
}

export default ImaginationCafe;