import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';

//img
import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Login button clicked');
    console.log('Email:', email);
    console.log('Password:', password);
  }

  function handleSignUp() {
    console.log('Sign-up button clicked');
    ReactDOM.render(<SignUp />, document.getElementById('root')); // SignUp 컴포넌트로 렌더링
  }

  return (
    <div className="container">
      <p className="background">DotJari</p>
      <div className="login">
        <br />
        <strong>로그인</strong>
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
          <input id="btn" type="text" placeholder="비밀번호를 입력해 주세요" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
            <input className="check-icon" type="image" src={uncheckIcon} alt="제출버튼" />
          </div>
        </div>
        <br /><br /><br />
        <input type="checkbox" />로봇이 아닙니다.
        <br /><br />
        <button id="btn_login" onClick={handleLogin}>로그인</button>
        <br /><br />
        <button id="btn" onClick={handleSignUp}>회원가입</button>
      </div>
      <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
    </div>
  );
}

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Login button clicked');
    console.log('Email:', email);
    console.log('Password:', password);
    ReactDOM.render(<Login />, document.getElementById('root'));
  }

  function handleSignUp() {
    console.log('Sign-up button clicked');
  }

  return (
    <div className="container">
      <p className="background">DotJari</p>
      <div className="login">
        <br />
          <strong>회원가입</strong>
          <br /><br />
          <div style={{ position: 'relative', height: '40px' }}>
            <input id="btn" type="email" placeholder="이메일을 작성해 주세요" value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
              <input className="email-icon" type="image" src={emailIcon} alt="제출버튼" />
            </div>
          </div>
          <br /><br />
          <div style={{ position: 'relative', height: '40px' }}>
            <input id="btn" type="text" placeholder="비밀번호를 입력해 주세요" value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
              <input className="check-icon" type="image" src={uncheckIcon} alt="제출버튼" />
            </div>
          </div>
          <br/><br/><br/><br/><br/>
        <button id="btn" onClick={handleSignUp}>회원가입</button>
        <br /><br />
        <button id="btn_login" onClick={handleLogin}>로그인</button>
      </div>
      <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
    </div>
  );
}

ReactDOM.render(<Login />, document.getElementById('root'));
