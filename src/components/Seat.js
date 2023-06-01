// import React, { useState, useEffect } from 'react';

function Seat({ onClick, selected, seatName }) {
    return (
      <div
        onClick={onClick}
        className={`seat ${selected ? 'selected' : 'available'}`}
      >
        <p className="seat-name">{seatName}</p>
      </div>
    );
  }
  
  export default Seat