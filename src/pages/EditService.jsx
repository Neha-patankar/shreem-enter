import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SummaryApi from "../commen";

const EditService = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`${SummaryApi.allService.url}/${serviceId}`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        if (data.success) {
          setService(data.data);
        } else {
          console.error('Failed to fetch service details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching service details:', error);
      }
    };

    fetchService();
  }, [serviceId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${SummaryApi.updateService.url}/${serviceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(service),
        credentials: 'include',
      });
      const result = await response.json();
      if (result.success) {
        navigate('/all-service'); // Redirect after successful update
      } else {
        console.error('Failed to update service:', result.message);
      }
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  return (
    <div>
      <h2>Edit Service</h2>
      <form onSubmit={handleUpdate}>
        <label>
          UserName:
          <input
            type="text"
            value={service.username || ''}
            onChange={(e) => setService({ ...service, username: e.target.value })}
          />
        </label>
        {/* Add other fields similarly */}
        <button type="submit">Update Service</button>
      </form>
    </div>
  );
};

export default EditService;
