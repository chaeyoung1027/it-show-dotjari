import React, { useState } from 'react';
import '../css/Print.css';

//img
import ImaginationCafePrint from '../img/imaginationcafe.png';

function ImaginationCafeMap() {

  return (
    <div>
      <div className="image-container">
      <img src={ImaginationCafePrint} className="responsive-image" alt="Lab" />
      </div>
    </div>
  );
}

export default ImaginationCafeMap;