import React, { useCallback, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

//img
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';

// Firebase 초기화 설정
const firebaseConfig = {
    // Firebase 구성 정보 입력
      apiKey: "AIzaSyDLpT910n8p3nuPsg-Qe9juh_lWa7UM8dY",
      authDomain: "dotjari.firebaseapp.com",
      projectId: "dotjari",
      storageBucket: "dotjari.appspot.com",
      messagingSenderId: "612256972189",
      appId: "1:612256972189:web:b1282ada3d5e6f02348374",
      measurementId: "G-JNP934S6LJ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const EmailPasswordLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 이메일, 비밀번호 확인
  const handleLogin = useCallback(async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('Logged in with:', email,", "+password);
      navigate('/places');
    } catch (error) {
      setError(error.message);
    }
  }, [email, password, navigate]);

  return (
    <div>
      <div style={{ position: 'relative', height: '40px' }}>
          <input
            id="btn"
            type="email"
            placeholder="이메일을 작성해 주세요"
            value={email}
            onChange={handleEmailChange}
          />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
            <input className="email-icon" type="image" src={emailIcon} alt="제출버튼" />
          </div>
        </div>
        <br /><br />
        <div style={{ position: 'relative', height: '40px' }}>
          <input
            id="btn"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={handlePasswordChange}
          />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
            <input className="check-icon" type="image" src={uncheckIcon} alt="제출버튼" />
          </div>
        </div>
        <br></br><br></br><br></br><br></br>
          <button id="btn" onClick={handleLogin} style={{ backgroundColor: "#7C00DE", color: "white" }}>로그인</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default EmailPasswordLogin;
