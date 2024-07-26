// import React, { useEffect, useState } from 'react';
// import SummaryApi from "../commen"; // Ensure this is correctly imported
// import "./AllService.css";
// import moment from 'moment';

// const AllService = () => {
//   const [allService, setAllService] = useState([]);

//   const fetchAllService = async () => {
//     try {
//       console.log('Fetching all services from:', SummaryApi.allService.url);
//       const dataResponse = await fetch(SummaryApi.allService.url, {
//         method: SummaryApi.allService.method,
//         credentials: 'include',
//       });

//       if (!dataResponse.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await dataResponse.json();
//       console.log('Data received:', data); // Debugging log
//       if (data.success) {
//         setAllService(data.data);
//       } else {
//         console.error('Failed to fetch services:', data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching all services:', error);
//     }
//   };

//   const handleEdit = (serviceId) => {
//     // Implement your edit logic here
//     console.log('Edit service with ID:', serviceId);
//   };

//   const handleDelete = async (serviceId) => {
//     try {
//       const response = await fetch(`${SummaryApi.deleteService.url}/${serviceId}`, {
//         method: SummaryApi.deleteService.method,
//         credentials: 'include',
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       if (result.success) {
//         // Remove the deleted service from the state
//         setAllService(allService.filter(service => service._id !== serviceId));
//         console.log('Service deleted successfully');
//       } else {
//         console.error('Failed to delete service:', result.message);
//       }
//     } catch (error) {
//       console.error('Error deleting service:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAllService();
//   }, []);

//   return (
//     <div>
//       <h2>Request a Service</h2>
//       <table className="usertable">
//         <thead>
//           <tr>
//             <th>Sr.</th>
//             <th>UserName</th>
//             <th>Contact</th>
//             <th>Email Id</th>
//             <th>Service</th>
//             <th>Message</th>
//             <th>Create Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allService.map((service, index) => (
//             <tr key={service._id}>
//               <td>{index + 1}</td>
//               <td>{service.username}</td>
//               <td>{service.contact}</td>
//               <td>{service.email}</td>
//               <td>{service.service}</td>
//               <td>{service.message}</td>
//               <td>{moment(service.createdAt).format('LL')}</td> {/* Corrected here */}
//               <td>
//                 <button onClick={() => handleEdit(service._id)}>Edit</button>
//                 <button onClick={() => handleDelete(service._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllService;

import React, { useEffect, useState } from 'react';
import SummaryApi from "../commen"; // Ensure this is correctly imported
import "./AllService.css";
import moment from 'moment';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const AllService = () => {
  const [allService, setAllService] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchAllService = async () => {
    try {
      console.log('Fetching all services from:', SummaryApi.allService.url);
      const dataResponse = await fetch(SummaryApi.allService.url, {
        method: SummaryApi.allService.method,
        credentials: 'include',
      });

      if (!dataResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await dataResponse.json();
      console.log('Data received:', data); // Debugging log
      if (data.success) {
        setAllService(data.data);
      } else {
        console.error('Failed to fetch services:', data.message);
      }
    } catch (error) {
      console.error('Error fetching all services:', error);
    }
  };

  const handleEdit = (serviceId) => {
    // Redirect to edit page
    navigate(`/edit-service/${serviceId}`);
  };

  const handleDelete = async (serviceId) => {
    try {
      const response = await fetch(`${SummaryApi.deleteService.url}/${serviceId}`, {
        method: SummaryApi.deleteService.method,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.success) {
        // Remove the deleted service from the state
        setAllService(allService.filter(service => service._id !== serviceId));
        console.log('Service deleted successfully');
      } else {
        console.error('Failed to delete service:', result.message);
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  useEffect(() => {
    fetchAllService();
  }, []);

  return (
    <div>
      <h2>Request a Service</h2>
      <table className="usertable">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>UserName</th>
            <th>Contact</th>
            <th>Email Id</th>
            <th>Service</th>
            <th>Message</th>
            <th>Create Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allService.map((service, index) => (
            <tr key={service._id}>
              <td>{index + 1}</td>
              <td>{service.username}</td>
              <td>{service.contact}</td>
              <td>{service.email}</td>
              <td>{service.service}</td>
              <td>{service.message}</td>
              <td>{moment(service.createdAt).format('LL')}</td>
              <td>
                <button onClick={() => handleEdit(service._id)}>Edit</button>
                <button onClick={() => handleDelete(service._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default AllService;

