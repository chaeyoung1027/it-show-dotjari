// Import the necessary dependencies
import './App.css';
import React, { createContext, useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import { auth } from './firebase';

// Import the components
import ImaginationCafe from './components/ImaginationCafe';
import ReservPlace from './components/ReservPlace';
import SelectPlace from './components/SelectPlace';
import Library from './components/Library';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PersonalPage from './components/PersonalPage';
import SchoolMap from './components/SchoolMap';
import Floor2Map from './components/Floor2Map';
import Floor3Map from './components/Floor3Map';
import Floor4Map from './components/Floor4Map';

// Import the profile image
import Profile from './img/Profile.jpg';

// Create the context
export const MyContext = createContext();

function Layout() {
  const location = useLocation();
  const isSchoolMap = location.pathname.includes("/places/schoolmap");
  const isPersonalPage = location.pathname.includes("/places/personalpage");
  const { email, setEmail } = useContext(MyContext);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userEmail = user.providerData[0].uid;
      setEmail(userEmail);
    } else {
      setEmail("");
    }
  }, [setEmail]);

  return (
    <div>
      <div className='MainTopStyle'>
        <div className='MainTopStyle'>
          <Link to="/places" className="title">DotJari.</Link>
          <Link to="/places/imaginationcafe" className='selectMenu'> 상상카페 </Link>
          <Link to="/places/library" className='selectMenu'> 도서관 </Link>
          <Link to="/places/schoolmap" className='selectMenu'> 학교 지도 </Link>
          {email ? (
            <Link to="/places/personalpage"><a className='Name'>{email}</a></Link>
          ) : (
            <Link to="/login" className='Name'>로그인해주세요</Link>
          )}
          <Link to="/places/personalpage">
            <img className='profile' alt="profile" src={Profile} />
          </Link>
        </div>
      </div>
      {!isSchoolMap && !isPersonalPage && <ReservPlace />}
      <Outlet />
    </div>
  );
}

function App() {
  const [selectedDate, setSelectedDate] = useState('2023-06-21');
  const [selectedTime, setSelectedTime] = useState('7시');
  const [selectedMinute, setSelectedMinute] = useState('00분');
  const [selectedTime2, setSelectedTime2] = useState('8시');
  const [selectedMinute2, setSelectedMinute2] = useState('00분');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const storedEmail = sessionStorage.getItem('email');
    if (isLoggedIn) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (email) {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('email', email);
    } else {
      sessionStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('email');
    }
  }, [email]);

  return (
    <MyContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        selectedMinute,
        setSelectedMinute,
        selectedTime2,
        setSelectedTime2,
        selectedMinute2,
        setSelectedMinute2,
        email,
        setEmail
      }}
    >
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path="/places" element={<Layout />}>
            <Route index element={<SelectPlace />} />
            <Route path="imaginationcafe" element={<ImaginationCafe />} />
            <Route path="library" element={<Library />} />
            <Route path="schoolmap" element={<SchoolMap />} />
            <Route path="personalpage" element={<PersonalPage />} />
            <Route path="floor2" element={<Floor2Map />} />
            <Route path="floor3" element={<Floor3Map />} />
            <Route path="floor4" element={<Floor4Map />} />
          </Route>
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
