import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import { getDatabase, ref, remove } from "firebase/database";
import { MyContext } from '../App';
import { getFirestore, collection, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const confirmed = window.confirm("계정을 탈퇴하시겠습니까?");
  
    if (confirmed) {
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
    }
  };

  const handleCancelReservation = (reservationId) => {
    const db = getFirestore();
    const docRef = doc(db, "reservations", reservationId);
  
    getDoc(docRef)
      .then((snapshot) => {
        const reservationData = snapshot.data();
        console.log("dd");
        if (reservationData) {
          if (reservationData.email === email) {
            deleteDoc(docRef)
              .then(() => {
                console.log("예약 취소 완료:", reservationId);
                const updatedReservation = reservation.filter(item => item.id !== reservationId);
                setReservation(updatedReservation);
                toast.success('예약이 취소되었습니다.', {
                  position: "top-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
                });
              })
              .catch((error) => {
                console.error("예약 취소 오류:", error);
                toast.error('예약 취소 중 오류가 발생했습니다.', {
                  position: "top-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
                });
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
        toast.error('예약 정보를 가져오는 중 오류가 발생했습니다.', {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      });
  };

  useEffect(() => {
    const database = getDatabase();
    const reservationRef = ref(database, 'reservations');
    const db = getFirestore();
  
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'reservations'));
        const reservationData = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        });
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
      <ToastContainer />
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
                    <a className="presDate">{item.seat}</a>
                  </div>
                  <a className="presTime">{item.selectedDay+"일 " + item.selectedTime + " " + item.selectedMinute + " ~ " + item.selectedTime2 + " " + item.selectedMinute2}</a>
                  <button className="cancelButton" onClick={() => handleCancelReservation(item.id)}>취소하기</button>
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
