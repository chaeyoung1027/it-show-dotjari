import React, { useState, useEffect, useContext } from 'react';
import SelectDate from './SelectDate';
import Seat from './Seat';
import '../css/ImaginationCafe.css';
import { MyContext } from '../App';
import BottomInfo from './BottomInfo';
import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore";

/* 상상카페 자리 예약 */
function ImaginationCafe() {
  const {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedMinute,
    setSelectedMinute,
    selectedTime2,
    setSelectedTime2,
    selectedMinute2,
    setSelectedMinute2
  } = useContext(MyContext);
  // 현재 누르고 있는 좌석
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservation, setReservation] = useState([]);

  // Firestore에서 예약 데이터 가져오기
  const getReservationData = async () => {
    const firestore = getFirestore();
    const reservationRef = collection(firestore, 'reservations');
    const querySnapshot = await getDocs(reservationRef);
    const reservations = querySnapshot.docs.map((doc) => doc.data());
    setReservation(reservations);
  };

  useEffect(() => {
    getReservationData();
  }, []);

  useEffect(() => {
    const firestore = getFirestore();
    const reservationRef = collection(firestore, 'reservations');

    const unsubscribe = onSnapshot(reservationRef, (querySnapshot) => {
      const reservations = querySnapshot.docs.map((doc) => doc.data());
      setReservation(reservations);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // 누르고 있는 좌석에 효과
  const handleSeatClick = (seat) => {
    const seatName = seatNames[seatsData.indexOf(seat)];
    const isSeatReserved = reservation.some((reservedSeat) => reservedSeat.componentOption === 0 && reservedSeat.seat === seatName);

    if (isSeatReserved) {
      return; // Seat is reserved, do nothing
    }

    if (selectedSeats.includes(seatName)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seatName));
    } else {
      setSelectedSeats([...selectedSeats, seatName]);
    }
  };

  // 예약 완료 후 selectedSeats 초기화
  const handleReservation = () => {
    const reservationData = {
      selectedSeats: selectedSeats
    };

    // 예약이 완료된 후에 selectedSeats를 빈 배열로 설정
    setSelectedSeats([]);

    return reservationData;
  };

  const seatNames = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', ' ', ' ', ' ', ' ', ' ', ' ',];
  const seatsData = [
    //A
    { x: 0, y: 0 },
    { x: 190, y: 0 },
    { x: 0, y: 65 },
    { x: 190, y: 65 },
    { x: 0, y: 130 },
    { x: 190, y: 130 },
    //B
    { x: 0, y: 245 },
    { x: 190, y: 245 },
    { x: 0, y: 310 },
    { x: 190, y: 310 },
    { x: 0, y: 375 },
    { x: 190, y: 375 },
    //C
    { x: 350, y: 65 },
    { x: 540, y: 65 },
    { x: 350, y: 130 },
    { x: 540, y: 130 },
    //D
    { x: 350, y: 245 },
    { x: 540, y: 245 },
    { x: 350, y: 310 },
    { x: 540, y: 310 },
    //E
    { x: 700, y: 65 },
    { x: 890, y: 65 },
    { x: 700, y: 130 },
    { x: 890, y: 130 },
    //F
    { x: 700, y: 245 },
    { x: 890, y: 245 },
    { x: 700, y: 310 },
    { x: 890, y: 310 },
    //테이블
    { x: 70, y: 5, width: 105, height: 175 },
    { x: 70, y: 250, width: 105, height: 175 },
    { x: 420, y: 68, width: 105, height: 110 },
    { x: 420, y: 250, width: 105, height: 110 },
    { x: 770, y: 68, width: 105, height: 110 },
    { x: 770, y: 250, width: 105, height: 110 },
  ];

  const screenSize = { width: 500, height: 600 }; // 나중에 조절하기 margin같은거
  return (
    <div className='ImaginationCafeAll'>
      <div className="sub-title">
        <h2>상상카페 : {selectedSeats.join(", ")}</h2>
        <h4 className="Explanation">
          &nbsp; 원하는 시간대를 검색한 후 남은 좌석을 선택해주세요
        </h4>
      </div>
      <SelectDate />

      <div style={{ width: screenSize.width, height: screenSize.height, position: "relative" }}>
        {seatsData.map((s, idx) => {
          const seatName = seatNames[idx];
          const isSeatSelected = selectedSeats.includes(seatName);
          const isSeatAvailable = !isSeatSelected;
          const seatClassName = `Iseat ${isSeatSelected ? "selected" : isSeatAvailable ? "available" : ""}`;

          let renderSeat = null;
          if (seatName !== ' ') {
            renderSeat = (
              <div
                className={seatClassName}
                style={{ position: "absolute", left: s.x, top: s.y }}
                onClick={() => handleSeatClick(s)}
                selected={selectedSeats.includes(seatName)}
                key={idx}
              >
                {seatNames[idx]}
              </div>
            );
          } else {
            renderSeat = (
              <div
                style={{ position: "absolute", left: s.x, top: s.y, width: s.width, height: s.height }}
                className='table'
                key={idx}
              ></div>
            );
          }

          // Check if the seat is reserved
          const reservedSeat = reservation.find((reservationData) => reservationData.componentOption === 0 && reservationData.seat === seatName &&
            selectedDate == reservationData.selectedDay
          //시간 조건 넣기
          );
          if (reservedSeat) {
            return (
              <div
                className="aselected"
                style={{ position: "absolute", left: s.x, top: s.y }}
                selected={selectedSeats.includes(seatName)}
                key={idx}
              >
                {/* {renderSeat} */}
              </div>
            );
          }

          return renderSeat;
        })}
      </div>
      <BottomInfo onReservation={handleReservation} currentComponent="ImaginationCafe" />
    </div>
  );
}

export default ImaginationCafe;
