import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import { getDatabase, ref, remove, get } from "firebase/database";
import { MyContext } from '../App';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import '../css/PersonalPage.css';

function PersonalPage({ userEmail }) {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const {
    email
  } = useContext(MyContext);
  console.log(email);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error("로그아웃 오류:", error);
      });
  };

  const handleDeleteAccount = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      deleteUser(user)
        .then(() => {
          navigate('/login');
        })
        .catch((error) => {
          console.error("계정 탈퇴 오류:", error);
        });
    }
  };

  const handleCancelReservation = (reservationId) => {
    const database = getDatabase();
    const reservationRef = ref(database, 'reservations/' + reservationId);
  
    // Firebase Realtime Database에서 예약 정보 가져오기
    get(reservationRef)
      .then((snapshot) => {
        const reservationData = snapshot.val();
  
        if (reservationData) {
          // 예약 정보의 일치 여부 확인
          if (reservationData.email === email) {
            // 일치하는 경우 예약 정보 삭제
            remove(reservationRef)
              .then(() => {
                console.log("예약 취소 완료:", reservationId);
                // 예약 정보를 새로고침하거나 다른 작업을 수행할 수 있습니다.
              })
              .catch((error) => {
                console.error("예약 취소 오류:", error);
              });
          } else {
            console.log("일치하는 예약 정보가 없습니다.");
          }
        } else {
          console.log("예약 정보를 찾을 수 없습니다.");
        }
      })
      .catch((error) => {
        console.error("예약 정보 가져오기 오류:", error);
      });
  };

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

  const filteredReservations = reservation.filter(item => item.email === email);

  return (
    <div className="PersonalAll">
      <div className="sub-title">
        <h2>예약 현황</h2>
        <h4 className="Explanation">
          &nbsp; 예약된 현황을 확인하고, 일정이 변동되었다면 손 쉽게 취소하세요.
        </h4>
        <div className="reservation">
          {loading ? (
            <p>로딩 중...</p>
          ) : filteredReservations.length > 0 ? (
            filteredReservations.map((item) => (
              <div className="presInfo2" key={item.email}>
                <div>
                  <div className="position-date">
                    <a className="presPosition">{item.componentOption === 0 ? '상상카페' : '도서관'}</a>
                    <a className="presDate">{"좌석 정보"}</a>
                  </div>
                  <a className="presTime">{item.selectedDay+"일 " + item.selectedTime + " " + item.selectedMinute + " ~ " + item.selectedTime2 + " " + item.selectedMinute2}</a>
                  <button className="cancelButton" onClick={() => handleCancelReservation(item.reservationId)}>취소하기</button>
                </div>
              </div>
            ))
          ) : (
            <p>예약된 현황이 없습니다.</p>
          )}
        </div>
      </div>

      <div className="AccountSetting">
        <div className="Logout" onClick={handleLogout}>로그아웃</div>
        <div className="delete" onClick={handleDeleteAccount}>계정 탈퇴하기</div>
      </div>
    </div>
  );
}

export default PersonalPage;