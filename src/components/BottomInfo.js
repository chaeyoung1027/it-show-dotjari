import React from 'react';
import '../css/BottomInfo.css';

function BottomInfo(){
    return(
        <div className = 'BottomInfoAll'>
            <a className="possible"></a>
            <a className='text'>선택 가능</a>
            <a className="Npossible"></a>
            <a className='text'>선택 불가능</a>
            <button className='ResvButton'>예약하기</button>
        </div>
    )
}

export default BottomInfo;
