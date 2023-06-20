import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import { getDatabase, ref, child, push, update, onValue } from "firebase/database";
import '../css/PersonalPage.css';

function PersonalPage() {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(null);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // 로그아웃 성공 시 로그인 페이지로 이동
        navigate('/login');
      })
      .catch((error) => {
        // 로그아웃 실패 시 에러 처리
        console.error("로그아웃 오류:", error);
      });
  };

  const handleDeleteAccount = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      deleteUser(user)
        .then(() => {
          // 계정 탈퇴 성공 시 로그인 페이지로 이동 또는 다른 처리
          navigate('/login');
        })
        .catch((error) => {
          // 계정 탈퇴 실패 시 에러 처리
          console.error("계정 탈퇴 오류:", error);
        });
    }
  };

  useEffect(() => {
    const database = getDatabase();
    const reservationRef = ref(database, 'reservationData'); // Firebase 데이터베이스 경로

    // 예약 정보 변경을 감지
    onValue(reservationRef, (snapshot) => {
      const reservationsData = snapshot.val();
      if (reservationsData) {
        // 예약 정보 객체를 배열로 변환
        const reservationsArray = Object.values(reservationsData);
        setReservation(reservationsArray);
      }
    });
  }, []);

  return (
    <div className="PersonalAll">
      <div className="sub-title">
        <h2>예약 현황</h2>
        <h4 className="Explanation">
          &nbsp; 예약된 현황을 확인하고, 일정이 변동되었다면 손 쉽게 취소하세요.
        </h4>
      </div>

      {reservation ? (
        reservation.map((item) => (
          <div className="presInfo" key={item.email}>
            <div>
              <div className="position-date">
                <a className="presPosition">{item.isCafe === 0 ? '상상카페' : '도서관'}</a>
                <a className="presDate">{item.date}</a>
              </div>
              <a className="presTime">{"예약시간: "+item.startHour +"시 "+ item.startMinute +"분\n종료시간: "+item.endHour +"시 "+ item.endMinute}</a>
            </div>
            <button className="cancelButton">취소하기</button>
          </div>
        ))
      ) : (
        <p>로딩 중...</p>
      )}

      <div className="AccountSetting">
        <div className="Logout" onClick={handleLogout}>로그아웃</div>
        <div className="delete" onClick={handleDeleteAccount}>계정 탈퇴하기</div>
      </div>
    </div>
  );
}

export default PersonalPage;
