import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/activity/child';

const AddActivity = () => {
  const navigate = useNavigate();
  const { childId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleStartDateChange = e => {
    setStartDate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${backendUrl}/${childId}`, { title, description, startDate })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    navigate(`/activities/${childId}`, { replace: true });
    console.log(typeof startDate);
  };

  return (
    <div className='container d-flex align-items-center justify-content-center'>
      <form style={{ width: '300px' }} onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input type='text' id='title' className='form-control' value={title} onChange={handleTitleChange} />
        </div>

        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            type='text'
            id='description'
            className='form-control'
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='startDate' className='form-label'>
            Start Date
          </label>
          <input
            type='date'
            id='startDate'
            className='form-control'
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <button type='submit' className='btn btn-outline-success'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddActivity;
