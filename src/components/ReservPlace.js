import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState, useContext } from "react";
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import { getDatabase, ref, remove, get } from "firebase/database";
import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore";
import { MyContext } from '../App';
import '../css/ReservPlace.css';

function ReservPlace() {
  const location = useLocation();
  const navigate = useNavigate();
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {
  email,
  setEmail
  } = useContext(MyContext);
  console.log(email);
  
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

    // 데이터 변경 감지하여 재렌더링
    const unsubscribe = onSnapshot(collection(db, 'reservations'), (snapshot) => {
      const reservationData = snapshot.docs.map(doc => doc.data());
      console.log("Firebase Firestore 예약 정보:", reservationData);

      if (reservationData.length > 0) {
        setReservation(reservationData);
      } else {
        console.log("예약된 현황이 없습니다.");
      }
      setLoading(false);
    });

    fetchData();

    // 컴포넌트 언마운트 시 구독 취소
    return () => unsubscribe();
  }, []);

  const filteredReservations = reservation.filter(item => item.email === email);

  return (
    <div className='ReservAll'>
      <div className="bar"></div>
      <div className="reservText">
        {email}님,<br />
        오늘 <span style={{ color: '#7C00DE' }}>예약된 장소</span>를 확인하세요.
      </div>
      <div className="reservation">
          {loading ? (
            <p>로딩 중...</p>
          ) : filteredReservations.length > 0 ? (
            filteredReservations.map((item) => (
              <div className="presInfo" key={item.email}>
                <div>
                  <div className="position-date">
                    <a className="presPosition">{item.componentOption === 0 ? '상상카페' : '도서관'}</a>
                    <a className="presDate">{item.seat}</a>
                  </div>
                  
                  <a className="presTime">{item.selectedDay+"일 " + item.selectedTime + " " + item.selectedMinute + " ~ " + item.selectedTime2 + " " + item.selectedMinute2}</a>
                </div>
                
              </div>
            ))
          ) : (
            <p>예약된 현황이 없습니다.</p>
          )}
        </div>
    </div>
  );
}

const handleCancelReservation = (reservationId) => {
  
};

export default ReservPlace;
