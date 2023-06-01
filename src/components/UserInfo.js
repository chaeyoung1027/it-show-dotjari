import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';

//img
import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';

function UserInfo() {
  const [snumber, setSnumber] = useState('');
  const [sname, setSname] = useState('');

  function handleLogin() {
    console.log('Login button clicked');
    console.log('Email:', snumber);
    console.log('Password:', sname);
  }

  return (
    <div className="container">
      <p className="background">DotJari</p>
      <div className="login">
        <br /><br />
        <strong>정보입력</strong>
        <br /><br />
        <div style={{ position: 'relative', height: '40px' }}>
          <input id="btn" type="email" placeholder="학번을 입력해주세요(ex. 1101)" value={snumber}
            onChange={(e) => setSnumber(e.target.value)} />
        </div>
        <br /><br/>
        <div style={{ position: 'relative', height: '40px' }}>
          <input id="btn" type="text" placeholder="이름을 입력해주세요" value={sname}
            onChange={(e) => setSname(e.target.value)} />
        </div>
        <br /><br /><br />
        <br /><br /><br />
        <br />
        <button id="btn" onClick={handleLogin}>시작하기</button>
      </div>
      <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
    </div>
  );
}


ReactDOM.render(<UserInfo />, document.getElementById('root'));
