import React, { useState, useEffect, useContext } from 'react';
import SelectDate from './SelectDate';
import '../css/ImaginationCafe.css';
import { MyContext } from '../App';
import BottomInfo from './BottomInfo';
import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore";
import '../css/Library.css';

function Library() {
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

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservation, setReservation] = useState([]);

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

  const handleSeatClick = (seat) => {
    const seatName = seatNames[seatsData.indexOf(seat)];
    const isSeatReserved = reservation.some(
      (reservedSeat) =>
        reservedSeat.componentOption === 1 &&
        reservedSeat.seat === seatName &&
        selectedDate === reservedSeat.selectedDay &&
        (selectedTime === reservedSeat.selectedTime &&
        selectedMinute === reservedSeat.selectedMinute &&
        selectedTime2 === reservedSeat.selectedTime2 &&
        selectedMinute2 === reservedSeat.selectedMinute2)
        //시간같고 분 다르면
    );

    if (isSeatReserved) {
      return;
    }

    if (selectedSeats.includes(seatName)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seatName));
    } else {
      setSelectedSeats([...selectedSeats, seatName]);
    }
  };

  const handleReservation = () => {
    const reservationData = {
      selectedSeats: selectedSeats
    };

    setSelectedSeats([]);

    return reservationData;
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

  const screenSize = { width: 500, height: 600 };

  return (
    <div className='LibraryAll'>
      <div className="Lsub-title">
        <h2>도서관</h2>
        <h4 className="LExplanation">
          &nbsp; 원하는 시간대를 검색한 후 남은 좌석을 선택해주세요
        </h4>
      </div>
      <SelectDate />

      <div style={{ width: screenSize.width, height: screenSize.height, position: "relative" }}>
        {seatsData.map((s, idx) => {
          const seatName = seatNames[idx];
          const isSeatSelected = selectedSeats.includes(seatName);
          const isSeatAvailable = !isSeatSelected;
          const seatClassName = `Lseat ${isSeatSelected ? "selected" : isSeatAvailable ? "available" : ""}`;

          let renderSeat = null;
          if (seatName !== ' ') {
            renderSeat = (
              <div
                className={seatClassName}
                style={{ position: "absolute", left: s.x, top: s.y}}
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

          const reservedSeat = reservation.find(
            (reservationData) =>
              reservationData.componentOption === 1 &&
              reservationData.seat === seatName &&
              selectedDate === reservationData.selectedDay &&
              // Add time condition
              (
                (selectedTime === reservationData.selectedTime && selectedMinute === reservationData.selectedMinute) ||
                (selectedTime2 === reservationData.selectedTime2 && selectedMinute2 === reservationData.selectedMinute2)
              )
          );

          if (reservedSeat) {
            return (
              <div
                className={`Laselected ${reservedSeat.selectedTime === selectedTime && reservedSeat.selectedMinute === selectedMinute ? "selected-time" : ""} ${reservedSeat.selectedTime2 === selectedTime2 && reservedSeat.selectedMinute2 === selectedMinute2 ? "selected-time2" : ""}`}
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
      <BottomInfo onReservation={handleReservation} currentComponent="Library" />
    </div>
  );
}

export default Library;
