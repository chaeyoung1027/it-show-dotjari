import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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
export const firestore = firebase.firestore();
export const saveReservationData = async (
  email,
  seat,
  componentOption,
  selectedDay,
  selectedTime,
  selectedMinute,
  selectedTime2,
  selectedMinute2
) => {
  try {
    const reservationRef = firestore.collection('reservations');
    const reservationDoc = reservationRef.doc();
    await reservationDoc.set({
      email,
      seat,
      componentOption,
      selectedDay,
      selectedTime,
      selectedMinute,
      selectedTime2,
      selectedMinute2
    });
    console.log('Reservation data saved successfully!');
  } catch (error) {
    console.error('Error saving reservation data:', error);
  }
};