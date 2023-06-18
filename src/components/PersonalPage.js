import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import '../css/PersonalPage.css'

function PersonalPage() {
  return (
    <div className="PersonalAll">
      <div className="sub-title">
        <h2>예약 현황</h2>
        <h4 className="Explanation">
          &nbsp; 예약된 현황을 확인하고, 일정이 변동되었다면 손 쉽게 취소하세요.
        </h4>
      </div>

      <div className="presInfo">
        <div>
        <div className="position-date">
          <a className="presPosition">상상카페 B4</a>
          <a className="presDate">2023.04.05</a>
        </div>
          <a className="presTime">2:00~3:00</a>
        </div>
        <button className="cancelButton">취소하기</button>
      </div>

      <div className="AccountSetting">
        <div className="Logout">로그아웃</div>
        <div className="delete">계정 탈퇴하기</div>
      </div>

    </div>
  );
}

export default PersonalPage;
