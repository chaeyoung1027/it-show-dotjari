import React, { useState } from 'react';
import '../css/Print.css';

//img
import LibraryPrint from '../img/library.png';

function LibraryMap() {

  return (
    <div>
      <div className="image-container">
      <img src={LibraryPrint} className="responsive-image" alt="Lab" />
      </div>
    </div>
  );
}

export default LibraryMap;