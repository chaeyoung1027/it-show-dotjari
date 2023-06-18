import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SelectPlace.css';

// img
import clubIcon from '../img/club.png';
import clubIcon2 from '../img/club2.png';
import ProjectIcon from '../img/project.png';
import ProjectIcon2 from '../img/project2.png';
import PracIcon from '../img/prac.png';
import PracIcon2 from '../img/prac2.png';

function SchoolMap() {
  const [isClubIconHovered, setClubIconHovered] = useState(false);
  const [isProjectIconHovered, setProjectIconHovered] = useState(false);
  const [isPracIconHovered, setPracIconHovered] = useState(false);

  const handleClubIconHover = () => {
    setClubIconHovered(true);
  };

  const handleClubIconLeave = () => {
    setClubIconHovered(false);
  };

  const handleProjectIconHover = () => {
    setProjectIconHovered(true);
  };

  const handleProjectIconLeave = () => {
    setProjectIconHovered(false);
  };

  const handlePracIconHover = () => {
    setPracIconHovered(true);
  };

  const handlePracIconLeave = () => {
    setPracIconHovered(false);
  };

  const handleImageDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="SelectPlaceAll">
      <div className="sub-title">
        <h2>공간 선택하기</h2>
        <h4 className="Explanation">
          &nbsp; 필요 역할에 맞춰 원하는 장소를 빠르고 쉽게 확인하세요.
        </h4>
      </div>
      <div>
        <Link to="/places/floor2">
          <img
            className={`clubIcon ${isClubIconHovered ? 'hovered' : ''}`}
            src={isClubIconHovered ? clubIcon2 : clubIcon}
            alt="club Icon"
            onMouseEnter={handleClubIconHover}
            onMouseLeave={handleClubIconLeave}
            onDragStart={handleImageDragStart}
          />
        </Link>
        <Link to="/places/floor4">
        <img
          className={`ProjectIcon ${isProjectIconHovered ? 'hovered' : ''}`}
          src={isProjectIconHovered ? ProjectIcon2 : ProjectIcon}
          alt="Project Icon"
          onMouseEnter={handleProjectIconHover}
          onMouseLeave={handleProjectIconLeave}
          onDragStart={handleImageDragStart}
        />
        </Link>
        <Link to="/places/floor3">
        <img
          className={`PracIcon ${isPracIconHovered ? 'hovered' : ''}`}
          src={isPracIconHovered ? PracIcon2 : PracIcon}
          alt="Project Icon"
          onMouseEnter={handlePracIconHover}
          onMouseLeave={handlePracIconLeave}
          onDragStart={handleImageDragStart}
        />
        </Link>
      </div>
      <div className="SelectPlace">
        <div className={`Club ${isClubIconHovered ? 'hovered' : ''}`}>
          <a className="PlaceKind">도서관</a>
          <br />
          <a className="PlaceKindExp">자유롭게 도서관 자리를 예약해<br/>아이디어 회의, 기획, 스터디 등으로 활용하세요.</a>
        </div>
        <div className={`Project ${isProjectIconHovered ? 'hovered' : ''}`}>
          <a className="PlaceKind">상상카페</a>
          <br />
          <a className="PlaceKindExp">자유롭게 상상카페 자리를 예약해<br/>아이디어 회의, 기획, 스터디 등으로 활용하세요.</a>
        </div>
        <div className={`Prac ${isPracIconHovered ? 'hovered' : ''}`}>
          <a className="PlaceKind">실습실</a>
          <br />
          <a className="PlaceKindExp">실습실 프린터기 위치와<br/>고장 현황을 알아보고 빠르게<br></br>프린트하세요.</a>
        </div>
      </div>
    </div>
  );
}

export default SchoolMap;
