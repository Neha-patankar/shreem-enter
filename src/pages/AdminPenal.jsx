// import React from 'react';
// import './AdminPenal.css';
// import { FaUserLarge } from "react-icons/fa6";
// import { Link, Outlet } from 'react-router-dom';

// const AdminPenal = () => {
//   return (
//     <div id="admin-penal" className="d-flex flex-column min-vh-100">
//       <div className="d-flex flex-grow-1">
//         <aside className="bg-light min-vh-100 p-3 w-25 shadow-lg">
//           <div className="p-3 d-flex justify-content-center">
//             <FaUserLarge className="admin-icon" />
//           </div>
//           <nav className="nav flex-column">
//             <Link to="all-user" className="nav-link">All Register Users</Link>
//             <Link to="service" className="nav-link">Request a Service</Link>
//           </nav>
         
//         </aside>
        
//         <main className="flex-grow-1 p-3">
//           <Outlet /> {/* This will render the nested routes */}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminPenal;

import React from 'react';
import './AdminPenal.css';
import { FaUserLarge } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';

const AdminPenal = () => {
  return (
    <div id="admin-penal" className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        <aside className="bg-light min-vh-100 p-3 w-25 shadow-lg">
          <div className="p-3 d-flex justify-content-center admin-icon-container">
            <FaUserLarge className="admin-icon" />
            <div className="admin-icon-tooltip">Admin Panel</div>
          </div>
          <nav className="nav flex-column">
            <Link to="all-user" className="nav-link">All Register Users</Link>
            <Link to="service" className="nav-link">Request a Service</Link>
          </nav>
        </aside>
        
        <main className="flex-grow-1 p-3">
          <Outlet /> {/* This will render the nested routes */}
        </main>
      </div>
    </div>
  );
};

export default AdminPenal;

