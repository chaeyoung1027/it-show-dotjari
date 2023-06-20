import SelectDate from './SelectDate';
import '../css/ImaginationCafe.css';
import BottomInfo from './BottomInfo';
import React, { useEffect, useState, useContext } from "react";
import { getDatabase, ref } from "firebase/database";
import { MyContext } from '../App';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import '../css/PersonalPage.css';

/*상상카페 자리 예약*/
function ImaginationCafe() {
  const [SelectedSeats, setSelectedSeats] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    selectedDate,
    setselectedDate,
    selectedTime,
    setSelectedTime,
    selectedMinute,
    setSelectedMinute,
    selectedTime2,
    setSelectedTime2,
    selectedMinute2,
    setSelectedMinute2
  } = useContext(MyContext);

  const handleSeatClick = (seat) => {
    const seatName = seatNames[seatsData.indexOf(seat)];
    if (SelectedSeats.includes(seatName)) {
      setSelectedSeats(SelectedSeats.filter((selectedSeat) => selectedSeat !== seatName));
    } else {
      setSelectedSeats([...SelectedSeats, seatName]);
    }
  };
  
  const seatNames = ['A1', 'A2', 'A3', 'A4','A5','A6', 'B1', 'B2', 'B3','B4','B5','B6', 'C1','C2','C3','C4','D1','D2','D3','D4','E1','E2','E3','E4','F1','F2','F3','F4', ' ', ' ', ' ', ' ', ' ', ' ',];
  const seatsData = [
    //A
    {x: 0, y: 0},
    {x: 190, y: 0},
    {x: 0, y: 65},
    {x: 190, y: 65},
    {x: 0, y: 130},
    {x: 190, y: 130},
    //B
    {x: 0, y: 245},
    {x: 190, y: 245},
    {x: 0, y: 310},
    {x: 190, y: 310},
    {x: 0, y: 375},
    {x: 190, y: 375},
    //C
    {x: 350, y: 65},
    {x: 540, y: 65},
    {x: 350, y: 130},
    {x: 540, y: 130},
    //D
    {x: 350, y: 245},
    {x: 540, y: 245},
    {x: 350, y: 310},
    {x: 540, y: 310},
    //E
    {x: 700, y: 65},
    {x: 890, y: 65},
    {x: 700, y: 130},
    {x: 890, y: 130},
    //F
    {x: 700, y: 245},
    {x: 890, y: 245},
    {x: 700, y: 310},
    {x: 890, y: 310},
    //테이블
    {x: 70, y: 5, width : 105, height : 175},
    {x: 70, y: 250, width : 105, height : 175},
    {x: 420, y: 68, width : 105, height : 110},
    {x: 420, y: 250, width : 105, height : 110},
    {x: 770, y: 68, width : 105, height : 110},
    {x: 770, y: 250, width : 105, height : 110},

  ];
  
  const handleReservation = () =>{
    const reservationData={
      selectedSeats:SelectedSeats
    }
    return reservationData
  }

  useEffect(() => {
    const database = getDatabase();
    const reservationRef = ref(database, 'reservations');
    const db = getFirestore();
  
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'reservations'));
        const reservationData = snapshot.docs.map(doc => doc.data());
        console.log("Firebase Firestore 예약 정보:", reservationData);
  
        if (reservationData.length > 0) {
          setReservation(reservationData);
        } else {
          console.log("예약된 현황이 없습니다.");
        }
        setLoading(false);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };
  
    fetchData();
  }, []);

  const screenSize = { width: 500, height: 600 }    //나중에 조절하기 margin같은거
  return (
    <div className='ImaginationCafeAll'>
      <div className="sub-title">
        <h2>상상카페 : {SelectedSeats.join(", ")}</h2>
        <h4 className="Explanation">
          &nbsp; 원하는 시간대를 검색한 후 남은 좌석을 선택해주세요
        </h4>
      </div>
      <SelectDate />

      <div style={ {width: screenSize.width, height: screenSize.height, position: "relative" } }>
        {
            seatsData.map((s, idx) => {
              const seatName = seatNames[idx];
              const isSeatSelected = SelectedSeats.includes(seatName);
              const isSeatAvailable = !isSeatSelected;
              const seatClassName = `Iseat ${isSeatSelected ? "selected" : isSeatAvailable ? "available" : ""}`;
              if(seatName!==' '){
                return <div 
                className={seatClassName}
                style={{ position: "absolute", left: s.x, top: s.y}}
                onClick={() =>handleSeatClick(s)}
                seleted={SelectedSeats.includes(seatNames[idx])}>
                  {seatNames[idx]}</div>
              }
              else{
                return <div
                style={{position : "absolute", left : s.x, top : s.y, width : s.width, height : s.height}}
                className='table'
                >
                </div>
              }
            })
        }
    </div>
      <BottomInfo onReservation={handleReservation} currentComponent="ImaginationCafe"/>
    </div>
  );
}

export default ImaginationCafe;