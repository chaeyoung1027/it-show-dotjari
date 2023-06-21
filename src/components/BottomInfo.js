import React, { useContext } from 'react';
import { MyContext } from '../App';
import '../css/BottomInfo.css';
import { saveReservationData } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BottomInfo({ onReservation, currentComponent }) {
  const {
    selectedDate,
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
    if (email === '') {
      toast.success('로그인해주세요!.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else if(selectedTime===selectedTime2||selectedTime>selectedTime2||(selectedTime==selectedTime2&&selectedMinute<selectedMinute2)){
      toast.success('시간을 다시 선택해주세요!', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else if(reservationData==''){
      toast.success('좌석을 선택해주세요', {  //TODO : 좌석이 선택이 안되어있으면 띄우기
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else if (reservationData && reservationData.selectedSeats) {
      reservationData.selectedSeats.forEach((seat, index) => {
        saveReservationData(
          email,
          seat,
          ComponentOption,
          selectedDate,
          selectedTime,
          selectedMinute,
          selectedTime2,
          selectedMinute2
        );
      });

      // Display the toast message in the top-right corner
      toast.success('예약이 완료되었습니다.', {
        position: toast.POSITION.TOP_LEFT
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
