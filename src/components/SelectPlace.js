import React, {  } from 'react';
import Seat from './Seat'
import '../css/SelectPlace.css'

import clubIcon from '../img/club.png';
import ProjectIcon from '../img/project.png';

/*상상카페 자리 예약*/
function SelectPlace() {
    return (
        <div className='SelectPlaceAll'>
            <div className="sub-title">
                <h2>공간 선택하기</h2>
                <h4 className="Explanation">
                &nbsp; 필요 역할에 맞춰 원하는 장소를 빠르고 쉽게 확인하세요.
                </h4>
            </div>
            <div>
                <img className="clubIcon" src={clubIcon} alt="club Icon" />
                <img className="ProjectIcon" src={ProjectIcon} alt="Project Icon" />
            </div>
            <div className='SelectPlace'>
                <div className='Club'>
                    <a className='PlaceKind'>동아리</a>
                    <br/>
                    <a className='PlaceKindExp'>월요일, 수요일 방과후 동아리 시간에 맞춰<br/> 동아리실을 예약하세요.</a>
                </div>
                <div className='Project'>
                    <a className='PlaceKind'>프로젝트 회의</a>
                    <br/>
                    <a className='PlaceKindExp'>동아리 시간을 제외한 일과 시간 중 미림의<br/> 장소를 자유롭게 예약하세요.</a>
                </div>
            </div>
      </div>
    );
  }
  <Seat />

  export default SelectPlace