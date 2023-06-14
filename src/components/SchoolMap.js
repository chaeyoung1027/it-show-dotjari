import './App.css';
import React from "react";
import { BrowserRouter as Link, useLocation } from 'react-router-dom';

function SchoolMap() {
  return (
    <div>
        <Link to="/placesinfo/lab">응용실습실</Link>
        <Link to="/placesinfo/imaginationcafe"> 상상카페 </Link>
        <Link to="/placesinfo/library"> 도서관 </Link>
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/placesinfo" element={<Layout2 />}>
//           <Route path="imaginationcafe" element={<ImaginationCafeMap />} />
//           <Route path="library" element={<LibraryMap />} />
//           <Route path="lab" element={<LabMap />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

export default SchoolMap;
