import React, { useState, useEffect, useContext } from 'react';
import '../css/SelectDate.css';
import { MyContext } from '../App';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SelectDate() {
  const {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedMinute,
    setSelectedMinute,
    selectedTime2,
    setSelectedTime2,
    selectedMinute2,
    setSelectedMinute2
  } = useContext(MyContext);
  const [startDate, setStartDate] = useState(new Date());

  // const getToday = () => {
  //   const today = new Date();
  //   return today.getDate(); // 일(day)을 반환
  // };

  // useEffect(() => {
  //   setSelectedDay(getToday());
  // }, []);

  // const handleDayChange = (e) => {
  //   setSelectedDay(e.target.value);
  // };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleMinuteChange = (e) => {
    setSelectedMinute(e.target.value);
  };

  const handleTimeChange2 = (e) => {
    setSelectedTime2(e.target.value);
  };

  const handleMinuteChange2 = (e) => {
    setSelectedMinute2(e.target.value);
  };
  
  const handleDateChange = (date) => {
    setSelectedDate(`${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}`);
  };
  useEffect(() => {
    setSelectedDate(`${startDate.getFullYear()} ${startDate.getMonth() + 1} ${startDate.getDate()}`);
    }, [startDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Day:', selectedDate);
    console.log('Selected Time:', selectedTime);
    console.log('Selected Minute:', selectedMinute);
    console.log('Selected Time 2:', selectedTime2);
    console.log('Selected Minute 2:', selectedMinute2);
  };

  // const renderDayOptions = () => {
  //   const days = [...Array(31).keys()].map((day) => day + 1);

  //   return days.map((day) => (
  //     <option key={day} value={day}>
  //       {day}일
  //     </option>
  //   ));
  // };

  const renderTimeOptions = () => {
    const times = [
      '7시', '8시', '9시', '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시'
    ];

    return times.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ));
  };
  const renderTimeOptions2 = () => {
    const times = [
      '8시', '9시', '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시', '20시'
    ];

    return times.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ));
  };

  const renderMinuteOptions = () => {
    const minutes = ['00분', '30분'];

    return minutes.map((minute) => (
      <option key={minute} value={minute}>
        {minute}
      </option>
    ));
  };
  const today = new Date();
  return (
    <div className='selection-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className='select-date'
            dateFormat="yyyy/MM/dd" 
            minDate={today}
          />
          {/* <select
            id="day"
            value={selectedDay}
            onChange={handleDayChange}
            required
            className="select-day"
          >
            {renderDayOptions()}
          </select> */}
          <select
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
            className="select-time"
          >
            {renderTimeOptions()}
          </select>
          <select
            id="minute"
            value={selectedMinute}
            onChange={handleMinuteChange}
            required
            className="select-minute"
          >
            {renderMinuteOptions()}
          </select>
          <select
            id="time2"
            value={selectedTime2}
            onChange={handleTimeChange2}
            required
            className="select-time"
          >
            {renderTimeOptions2()}
          </select>
          <select
            id="minute2"
            value={selectedMinute2}
            onChange={handleMinuteChange2}
            required
            className="select-minute"
          >
            {renderMinuteOptions()}
          </select>
          <button type="submit" className="submit-button">
            검색
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectDate;
