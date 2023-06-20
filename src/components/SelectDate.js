import React, { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/SelectDate.css';
import { MyContext } from '../App';

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

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    console.log('Selected Minute:', selectedMinute);
    console.log('Selected Time 2:', selectedTime2);
    console.log('Selected Minute 2:', selectedMinute2);
  };

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

  const renderMinuteOptions = () => {
    const minutes = ['00분', '30분'];

    return minutes.map((minute) => (
      <option key={minute} value={minute}>
        {minute}
      </option>
    ));
  };

  return (
    <div className='selection-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="select-date"
          />
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
            {renderTimeOptions()}
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
