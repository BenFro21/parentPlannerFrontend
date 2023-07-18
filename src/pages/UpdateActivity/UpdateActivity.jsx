import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/activity';

const UpdateActivity = () => {
  const navigate = useNavigate();
  const {activityId} = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [aId, setAId] = useState()
  const [childId, setChildId] = useState(1);

  useEffect(() => {
    axios
      .get(`${backendUrl}/${activityId}`)
      .then(res => {
        const activity = res.data;
        setTitle(activity.title);
        setDescription(activity.description);
        setStartDate(activity.startDate);
        setAId(activityId)
        setChildId(1)
        console.log(activityId)
        console.log(childId)
      })
      .catch(err => console.log(err));
  }, []);

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleStartDateChange = e => {
    setStartDate(e.target.value);
  };

  const id = activityId;
  const handleSubmit = e => {
    e.preventDefault();
    console.log(title, description)
    axios
      .put(`${backendUrl}/${activityId}`, {id, title, description, startDate })
      .then(res => {
        console.log(res);
        navigate(`/activities/${childId}`);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err.message);
        }
      });
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

        <button type='submit' className="btn btn-success mb-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateActivity;
