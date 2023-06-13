import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import '../css/Login.css';
import Signup from './SignUp';

//img
import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';
import GoogleButton from './GoogleButton';

const clientId = '612256972189-4rots1sjfleh5fhfnfh3loihgrpo14iq.apps.googleusercontent.com';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Email:', email);
    console.log('Password:', password);
  }

  // function handleLogin() {
  //   // 로그인 요청 보내기
  //   fetch('login.php', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email, password }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 응답 데이터 처리
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       // 에러 처리
  //       console.error('Error:', error);
  //     });
  // }
  

  return (
    <div className="container">
      <p className="background">DotJari</p>
      <div className="login">
        <br /><br />
        <strong>로그인</strong>
        <br /><br /><br /><br />
        <GoogleButton/>
        <br /><br /><br /><br />
        <br /><br /><br /><br /><br/>
        <Link to="/signup">
          <button id="btn">회원가입</button>
        </Link>
      </div>
      <img className="circle-icon" src={circleIcon} alt="Circle Icon" />
    </div>
  );
}

// function Signup() {
//   return (
//     <div>
//       <h1>Signup Page</h1>
//       {/* Add your signup form here */}
//     </div>
//   );
// }



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


export default Login