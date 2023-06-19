import React from 'react';
import '../css/BottomInfo.css';

function BottomInfo({onReservation, currentComponent }){
    //예약하기를 누르면 현재 선택된 좌석이
    const handleReserveClick = () =>{
        const reservationData = onReservation();
        let ComponentOption = 0;
        //현재 띄워진 컴포넌트에 따라 0/1로 구분
        if (currentComponent === 'ImaginationCafe') {
            ComponentOption = 0;
          } else if (currentComponent === 'Library') {
            ComponentOption = 1;
          } else {
            ComponentOption = -1;
          }
        if (reservationData && reservationData.selectedSeats) {
            reservationData.selectedSeats.forEach((seat, index) => {
              console.log(`Seat ${index + 1}: ${seat}`);
              console.log(ComponentOption?'도서관':'상카');
            });
          }

          
    }
    return(
        <div className = 'BottomInfoAll'>
            <a className="possible"></a>
            <a className='text'>선택 가능</a>
            <a className="Npossible"></a>
            <a className='text'>선택 불가능</a>
            <button className='ResvButton' onClick={handleReserveClick}>예약하기</button>
        </div>
    )
}

export default BottomInfo;
