import React, { useState } from 'react';
import SelectDate from './SelectDate';
import Seat from './Seat';
import '../css/Library.css';
import BottomInfo from './BottomInfo';

/* 상상카페 자리 예약 */
function ImaginationCafe() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const seatsData = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
    ['B1', 'B2', 'B3', 'B4', 'F1', 'F2', 'F3', 'F4', 'F5'],
    ['C1', 'C2', 'C3', 'C4', 'F6', 'F7', 'F8', 'F8', 'F10'],
    ['D1', 'D2', 'D3', 'D4', 'G1', 'G2', 'G3', 'G4', 'G5'],
    ['E1', 'E2', 'E3', 'E4', 'G6', 'G7', 'G8', 'G8', 'G10'],
  ];

  return (
    <div className='LibraryAll'>
      <div className="Lsub-title">
        <h2>도서관: {selectedSeats.join(", ")}</h2>
        <h4 className="LExplanation">
          &nbsp; 원하는 시간대를 검색한 후 남은 좌석을 선택해주세요
        </h4>
      </div>
      <SelectDate />

      <div className="Library-seats-container">
        {seatsData.map((row, rowIndex) => (
          <div className="seat-row" key={rowIndex}>
            {row.map((seat, seatIndex) => (
              <React.Fragment key={seatIndex}>
                {seat === '  ' ? (
                  <div className="empty-seat" />
                ) : (
                  <Seat
                    onClick={() => handleSeatClick(seat)}
                    selected={selectedSeats.includes(seat)}
                    seatName={seat}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <BottomInfo />
    </div>
  );
}

export default ImaginationCafe;
