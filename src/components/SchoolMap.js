import React from "react";
import { Link, useLocation } from 'react-router-dom';

function SchoolMap() {
  return (
    <div>
        <Link to="/placesinfo/lab">응용실습실</Link><br></br>
        <Link to="/placesinfo/imaginationcafe">상상카페</Link><br></br>
        <Link to="/placesinfo/library">도서관</Link>
    </div>
  );
}

export default SchoolMap;
