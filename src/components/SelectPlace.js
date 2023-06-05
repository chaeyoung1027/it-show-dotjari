import React, { useState } from 'react';
import '../css/SelectPlace.css';
import clubIcon from '../img/club.png';
import clubIcon2 from '../img/club2.png';
import ProjectIcon from '../img/project.png';
import ProjectIcon2 from '../img/project2.png';

function SelectPlace() {
  const [isClubIconHovered, setClubIconHovered] = useState(false);
  const [isProjectIconHovered, setProjectIconHovered] = useState(false);

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

  return (
    <div className="SelectPlaceAll">
      <div className="sub-title">
        <h2>공간 선택하기</h2>
        <h4 className="Explanation">
          &nbsp; 필요 역할에 맞춰 원하는 장소를 빠르고 쉽게 확인하세요.
        </h4>
      </div>
      <div>
        <img
          className={`clubIcon ${isClubIconHovered ? 'hovered' : ''}`}
          src={isClubIconHovered ? clubIcon2 : clubIcon}
          alt="club Icon"
          onMouseEnter={handleClubIconHover}
          onMouseLeave={handleClubIconLeave}
        />
        <img
          className={`ProjectIcon ${isProjectIconHovered ? 'hovered' : ''}`}
          src={isProjectIconHovered ? ProjectIcon2 : ProjectIcon}
          alt="Project Icon"
          onMouseEnter={handleProjectIconHover}
          onMouseLeave={handleProjectIconLeave}
        />
      </div>
      <div className="SelectPlace">
        <div className={`Club ${isClubIconHovered ? 'hovered' : ''}`}>
          <a className="PlaceKind">동아리</a>
          <br />
          <a className="PlaceKindExp">월요일, 수요일 방과후 동아리 시간에 맞춰<br /> 동아리실을 예약하세요.</a>
        </div>
        <div className={`Project ${isProjectIconHovered ? 'hovered' : ''}`}>
          <a className="PlaceKind">프로젝트 회의</a>
          <br />
          <a className="PlaceKindExp">동아리 시간을 제외한 일과 시간 중 미림의<br /> 장소를 자유롭게 예약하세요.</a>
        </div>
      </div>
    </div>
  );
}

export default SelectPlace;
