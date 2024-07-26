import React, { useEffect, useState } from 'react';
import SummaryApi from "../commen"; // Ensure this is correctly imported
import "./AllUsers.css";
import moment from 'moment';
import { ChangeUserRole } from '../components/ChangeUserRole';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchAllUsers = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.allUsers.url, {
        method: SummaryApi.allUsers.method,
        credentials: 'include',
      });

      if (!dataResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await dataResponse.json();
      if (data.success) {
        setAllUsers(data.data); // Adjust based on actual API response
      } else {
        console.error('Failed to fetch users:', data.message);
      }
    } catch (error) {
      console.error('Error fetching all users:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpenUpdateRole(true);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`${SummaryApi.deleteUser.url}/${userId}`, {
        method: SummaryApi.deleteUser.method,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success) {
        // Remove the deleted user from the state
        setAllUsers(allUsers.filter(user => user._id !== userId));
        console.log('User deleted successfully');
      } else {
        console.error('Failed to delete user:', result.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <table className="usertable">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Role</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{moment(user.createdAt).format('LL')}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        openUpdateRole && selectedUser && (
          <ChangeUserRole
            name={selectedUser.name}
            email={selectedUser.email}
            role={selectedUser.role}
            onClose={() => setOpenUpdateRole(false)}
          />
        )
      }
    </div>
  );
};

export default AllUsers;
