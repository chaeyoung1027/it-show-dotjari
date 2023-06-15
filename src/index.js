import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyDLpT910n8p3nuPsg-Qe9juh_lWa7UM8dY",
//   authDomain: "dotjari.firebaseapp.com",
//   projectId: "dotjari",
//   storageBucket: "dotjari.appspot.com",
//   messagingSenderId: "612256972189",
//   appId: "1:612256972189:web:b1282ada3d5e6f02348374",
//   measurementId: "G-JNP934S6LJ"
// };

// // Firebase 앱 초기화
// initializeApp(firebaseConfig);
// const auth = getAuth();
// export { auth };

// ReactDOM.render(
//   <React.StrictMode>
//     <App auth={auth} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
