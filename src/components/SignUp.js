import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/Login.css';
import Login from './Login';

//img
import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';

function SiginUp() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Email:', email);
    console.log('Password:', password);
  }

  function handleSignUp() {
    console.log('Email:', email);
    console.log('Password:', password);
  }
return (
    <div className="container">
      <p className="background">DotJari</p>
      <div className="login">
        <br /><br />
        <strong>회원가입</strong>
        <br /><br />
        <div style={{ position: 'relative', height: '40px' }}>
          <input id="btn" type="email" placeholder="이메일을 작성해 주세요" value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
            <input className="email-icon" type="image" src={emailIcon} alt="제출버튼" />
          </div>
        </div>
        <br /><br/>
        <div style={{ position: 'relative', height: '40px' }}>
          <input id="btn" type="password" placeholder="비밀번호를 입력해 주세요" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
          <input className="check-icon" type="image" src={uncheckIcon} alt="제출버튼" />
          </div>
        </div>
        <br /><br /><br />
        <br /><br />
        <button id="btn" onClick={handleSignUp} style={{ background: '#7C00DE', color: '#fff' }}>회원가입</button>
        <br /><br />
        <button id="btn" onClick={handleSignUp}>로그인</button>
        <br /><br />
      </div>
      <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
    </div>
  );
}

ReactDOM.render(<SiginUp />, document.getElementById('root'));
