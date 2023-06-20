import React, { useContext } from 'react';
import { MyContext } from '../App';
import '../css/BottomInfo.css';
import { saveReservationData } from '../firebase'; // saveReservationData 함수 import

function BottomInfo({ onReservation, currentComponent }) {
  const {
    selectedDay,
    selectedTime,
    selectedMinute,
    selectedTime2,
    selectedMinute2,
    email
  } = useContext(MyContext);

  const handleReserveClick = () => {
    const reservationData = onReservation();
    let ComponentOption = 0;

    if (currentComponent === 'ImaginationCafe') {
      ComponentOption = 0;
    } else if (currentComponent === 'Library') {
      ComponentOption = 1;
    } else {
      ComponentOption = -1;
    }

    if (reservationData && reservationData.selectedSeats) {
      reservationData.selectedSeats.forEach((seat, index) => {
        // 예약 데이터를 Firebase에 저장
        saveReservationData(
          email,
          seat,
          ComponentOption,
          selectedDay,
          selectedTime,
          selectedMinute,
          selectedTime2,
          selectedMinute2
        );
      });
    }
  };

  return (
    <div className='BottomInfoAll'>
      <a className='possible'></a>
      <a className='text'>선택 가능</a>
      <a className='Npossible'></a>
      <a className='text'>선택 불가능</a>
      <button className='ResvButton' onClick={handleReserveClick}>
        예약하기
      </button>
    </div>
  );
}

export default BottomInfo;
