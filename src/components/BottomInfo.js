import React, { useContext } from 'react';
import { MyContext } from '../App';
import '../css/BottomInfo.css';
import { saveReservationData } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      // Display the toast message in the top-right corner
      toast.success('예약이 완료되었습니다.', {
        position: toast.POSITION.TOP_RIGHT
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
      <ToastContainer />
    </div>
  );
}

export default BottomInfo;
