import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const backendUrl = 'http://localhost:8080/api/v1/activity/child'

const AddActivity = () => {
    const navigate = useNavigate();
    const {childId} = useParams()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');


    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value)
        
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${backendUrl}/${childId}`, {title, description, startDate})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate(`/activities/${childId}`, {replace: true})
        console.log(typeof(startDate))

    }
  return (
    <div>
       <form>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' value={title} onChange={handleTitleChange} />

        <label htmlFor='description'>Description</label>
        <input type='text' id='description' value={description} onChange={handleDescriptionChange} />

        <label htmlFor='startDate'>Start Date</label>
        <input type='date' id='startDate' value={startDate} onChange={handleStartDateChange} />

        <button type='submit' onClick={handleSubmit}>Submit</button>
        </form> 
    </div>
  )
}

export default AddActivity