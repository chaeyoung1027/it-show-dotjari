import React, { useCallback, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';

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

  const handleLogin = useCallback(async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/places');
    } catch (error) {
      setError(error.message);
    }
  }, [email, password, navigate]);

  return (
    <div>
      <h2>Email and Password Login</h2>
      <div>
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Log In</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default EmailPasswordLogin;
