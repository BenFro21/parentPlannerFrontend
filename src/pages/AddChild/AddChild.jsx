import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/child';

const AddChild = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${backendUrl}/user/1`, { name })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    navigate('/children');
    window.location.reload();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{fontSize: '36px'}}>
            Child's Name:
          </label>
          <input
            type="text"
            value={name}
            id="name"
            className="form-control"
            onChange={handleNameChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddChild;
