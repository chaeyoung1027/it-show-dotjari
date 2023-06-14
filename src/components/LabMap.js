import React from 'react';
import '../css/Print.css';

//img
import LabPrint from '../img/lab.png';

function PrintLab() {
  return (
    <div className="image-container">
      <img src={LabPrint} className="responsive-image" alt="Lab" />
    </div>
  );
}

export default PrintLab;
