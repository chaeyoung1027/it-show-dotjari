import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; // Realtime Database를 사용하기 위해 추가
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../css/Login.css';

//img
import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snumber, setSnumber] = useState('');
  const [sname, setSname] = useState('');

  async function handleSignUp() {
    try {
      // 비밀번호의 길이가 최소 6자 이상인지 확인
      if (password.length < 6) {
        console.log('비밀번호는 최소 6자 이상이어야 합니다.');
        return;
      }
  
      // Firebase 회원가입 처리
      await firebase.auth().createUserWithEmailAndPassword(email, password);
  
      // 이메일과 비밀번호를 Realtime Database에 저장
      await firebase.database().ref('users').push({
        email,
        password
      });
  
      console.log('Email:', email);
      console.log('Password:', password);
    } catch (error) {
      console.log(error);
    }
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
            <input className="check-icon" type="image" src={uncheckIcon} alt="제출버튼" />
          </div>
        </div>
        <br /><br />
        {/* <div style={{ position: 'relative', height: '40px' }}>
          <input id="btn" type="email" placeholder="학번 이름을 입력해주세요(ex. 1101 나미림)" value={snumber}
            onChange={(e) => setSnumber(e.target.value)} />
        </div> */}
        <br /><br />
        <Link to="/login">
        <button id="btn" onClick={handleSignUp} style={{ background: '#7C00DE', color: '#fff' }}>회원가입</button>
        </Link>
      </div>
      <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

export default Signup;
