import React, {useState} from 'react';
import Profile from '../img/Profile.jpg'
import '../css/MainTop.css'

function MainTop(props){
    
    return(
        <div className='MainTopStyle'>
            <a className="title">DotJari.</a>
            <a className='selectMenu'> 상상카페 </a>
            <a className='selectMenu'> 도서관 </a>
            <a className='selectMenu'> 예약현황 </a>
            <a className='Name'>3333 성이름</a>
            <img className='profile' alt = "profile" src = {Profile}/>
        </div>
    )
}

export default MainTop
