import React, { useState } from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useNavigate
} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';

//img
import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';

function Home() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <div className="container">
            <p className="background">DotJari</p>
            <div className="login">
                <br /><br />
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
          <input id="btn" type="password" placeholder="비밀번호를 입력해 주세요" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <div style={{ position: 'relative', left: '33%', bottom: '40px' }}>
          <input className="check-icon" type="image" src={uncheckIcon} alt="제출버튼" />
          </div>
        </div>
        <br /><br /><br />
        <input type="checkbox" />로봇이 아닙니다.
        <br /><br />
                <button id="btn" onClick={() => navigate('/login')} style={{ background: '#7C00DE', color: '#fff' }}>로그인</button>
                <br /><br />
                <button id="btn" onClick={() => navigate('/signup')}>회원가입</button>
            </div>
            <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
    
}
export default Home
//ReactDOM.render(<App />, document.getElementById("root"));
