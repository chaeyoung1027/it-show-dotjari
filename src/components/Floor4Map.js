import React from 'react';
import '../css/Print.css';

//img
import Floor4 from '../img/floor4.png';

function Floor4Map() {
  return (
    <div className="image-container">
      <h3>별관 4층</h3>
      <p className='text'>
        실습실 프린터기 위치를 알아보고 빠르고 확실하게 프린트해보세요.<br></br>
        실시간으로 고장난 프린터기를 알려드려, 불필요한 동선을 줄여드립니다.<br></br><br></br>
      </p>
      <img src={Floor4} className="responsive-image" />
    </div>
  );
}

export default Floor4Map;
