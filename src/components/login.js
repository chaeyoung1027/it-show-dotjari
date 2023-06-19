import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // 추가
import 'react-toastify/dist/ReactToastify.css';
import '../css/Login.css';
import Signup from './SignUp';

import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png'; // 추가
import uncheckIcon from '../img/unchecked.png'; // 추가

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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

initializeApp(firebaseConfig);

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => { // 수정
    try {
      if (!email || !password) {
        toast.error('이메일과 비밀번호를 입력해 주세요.');
        return;
      }

      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      console.log('Email:', email);
      console.log('Password:', password);

      toast.success('로그인에 성공했습니다.'); // 추가
      navigate('/places');
    } catch (error) {
      setError(error.message);
      toast.error('로그인에 실패했습니다.'); // 추가
    }
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  return (
    <div className="container">
      <p className="background">DotJari</p>
      <div className="login">
        <br /><br />
        <strong>로그인</strong>
        <br /><br /><br />
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
        <br /><br /><br /><br />
        <button id="btn" onClick={handleLogin} style={{ backgroundColor: "#7C00DE", color: "white" }}>로그인</button>
        {error && <div>{error}</div>}
        <br /><br></br>
        <Link to="/signup">
          <button id="btn">회원가입</button>
        </Link>
      </div>
      <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

export default Login;
