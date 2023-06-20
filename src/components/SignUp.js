import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Login.css';

import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSignUp() {
    try {

      if(!validateEmail(email) && password.length<6) {
        toast.error('이메일과 비밀번호를 입력해주세요.');
        return;
      }

      if (!validateEmail(email)) {
        toast.error('유효한 이메일을 입력해 주세요.');
        return;
      }

      if (password.length < 6) {
        toast.error('비밀번호는 최소 6자 이상이어야 합니다.');
        return;
      }

      else {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
  
        console.log('Email:', email);
        console.log('Password:', password);

        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      toast.error('회원가입에 실패했습니다.');
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
        <strong>회원가입</strong>
        <br /><br /><br />
        <div style={{ position: 'relative', height: '40px' }}>
          <input
            id="btn"
            type="email"
            placeholder="이메일을 작성해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
            <img className="email-icon" src={emailIcon} alt="제출버튼" />
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <br /><br />
        <div style={{ position: 'relative', height: '40px' }}>
          <input
            id="btn"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
            <img className="check-icon" src={uncheckIcon} alt="제출버튼" />
          </div>
        </div>
        <br /><br />
        <br /><br />
        <button id="btn" onClick={handleSignUp} style={{ background: '#7C00DE', color: '#fff' }}>회원가입</button>
      </div>
      <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
      <ToastContainer autoClose={2000}/>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <ToastContainer />
  </Router>,
  document.getElementById('root')
);

export default Signup;
