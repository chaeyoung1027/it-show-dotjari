import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Login.css';
import Signup from './SignUp';

import circleIcon from '../img/circle.png';
import emailIcon from '../img/email.png';
import uncheckIcon from '../img/unchecked.png';
import GoogleButton from './GoogleButton';

const clientId = '612256972189-4rots1sjfleh5fhfnfh3loihgrpo14iq.apps.googleusercontent.com';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      if (!validateEmail(email)) {
        toast.error('유효한 이메일을 입력해 주세요.');
        return;
      }

      if (password.length < 6) {
        toast.error('비밀번호는 최소 6자 이상이어야 합니다.');
        return;
      }

      console.log('Email:', email);
      console.log('Password:', password);

      toast.info('환영합니다.');

      navigate('/login');
    } catch (error) {
      console.log(error);
      toast.error('로그인에 실패했습니다.');
    }
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  return (
    <div className="container">
      <p className="background">DotJari</p>
      <div className="login">
        <br /><br />
        <strong>로그인</strong>
        <br /><br /><br />
        <GoogleButton />
        <br />
        <Link to="/signup">
          <button id="btn">회원가입</button>
        </Link>
        <ToastContainer />
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
    <ToastContainer />
  </Router>,
  document.getElementById('root')
);

export default Login;
