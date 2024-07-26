import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ROLE from '../commen/role';
import { RxCross2 } from "react-icons/rx";
import SummaryApi from '../commen';

export const ChangeUserRole = ({
  name,
  email,
  role,
  onClose,
  }) => {
  const [userRole, setUserRole] = useState(role);

  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);
    console.log(e.target.value);
  };

  const updateUserRole = async () => {
    try {
      const fetchResponse = await fetch(SummaryApi.updateUser.url, {
        method: SummaryApi.updateUser.method,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: userRole,
          email: email, // include email or other required fields
        }),
      });

      const responseData = await fetchResponse.json();

      if (fetchResponse.ok) {
        console.log("Role updated", responseData);
        console.log(`Updating role to ${userRole} for user ${email}`);
        // Close the modal or show a success message
        onClose();
      } else {
        console.error("Failed to update role", responseData);
      }
    } catch (error) {
      console.error("An error occurred while updating the role", error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center w-100 h-100" style={{ zIndex: 10 }}>
      <div className="bg-white shadow p-4 w-100" style={{ maxWidth: '300px' }}>
        <div className="d-flex justify-content-end">
          <button className="btn p-0" onClick={onClose}>
            <RxCross2 />
          </button>
        </div>
        <h4 className="pb-2 text-lg font-medium">Change User Role</h4>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
          
        <div className="d-flex align-items-center mb-3">
          <p className="mb-0 me-2">Role:</p>
          <select className="form-select" value={userRole} onChange={handleOnChangeSelect}>
            <option value="" disabled>Select role</option>
            {Object.values(ROLE).map((el, index) => (
              <option key={index} value={el}>{el}</option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={updateUserRole}>Change Role</button>
        </div>
      </div>
    </div>
  );
};


