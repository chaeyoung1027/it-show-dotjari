import React, { useContext } from 'react';
import { MyContext } from '../App';
import '../css/BottomInfo.css';
import { saveReservationData } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BottomInfo({ onReservation, currentComponent , selectedSeats}) {
  const {
    selectedDate,
    selectedTime,
    selectedMinute,
    selectedTime2,
    selectedMinute2,
    email
  } = useContext(MyContext);

  const currentDate = new Date();
  const currentHour = currentDate.getHours(); // Get the current hour (0-23)
  const currentMinute = currentDate.getMinutes();

  const handleReserveClick = () => {
    const reservationData = onReservation();
    let ComponentOption = 0;
    const currentDate = new Date();
  const currentYear = currentDate.getFullYear(); // Get the current year
  const currentMonth = currentDate.getMonth() + 1; // Get the current month (add 1 because months are zero-based)
  const currentDay = currentDate.getDate(); // Get the current day

  const dateString = selectedDate;
  const dateComponents = dateString.split(" ");

  const year = parseInt(dateComponents[0]);
  const month = parseInt(dateComponents[1]);
  const day = parseInt(dateComponents[2]);

  const isToday = year === currentYear && month === currentMonth && day === currentDay;


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
    if((isToday)&&parseInt(selectedTime)<currentHour||(selectedTime==currentHour && parseInt(selectedMinute)<currentMinute)){
      toast.success('이미 지난 시간입니다! \n 시간을 다시 확인해주세요', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else if((selectedTime===selectedTime2&&selectedMinute===selectedMinute2)||selectedTime>selectedTime2||(selectedTime==selectedTime2&&parseInt(selectedMinute)>parseInt(selectedMinute2))){
      toast.success('시간을 다시 선택해주세요!', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else if(selectedSeats==''){
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

      console.log(selectedSeats)
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
