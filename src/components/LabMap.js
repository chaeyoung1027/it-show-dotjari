import React, { useState } from 'react';
import '../css/Print.css';

function PrintLab() {

  return (
    <div>
        <div className='stairs'>계단</div>
        <div className='room'>응용실습5실</div>
        <div className='room'>응용실습3실</div>
        <div className='stairs'>조교실</div>
        <div className='room'>응용실습1실</div>

        <div className='stairs'>화장실</div>
        <div className='room'>응용실습4실</div>
        <div className='stairs'>계단</div>
        <div className='room'>허브실</div>
        <div className='room'>응용실습2실</div>
    </div>
  );
}

export default PrintLab;