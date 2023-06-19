import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

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
export const auth = firebase.auth();