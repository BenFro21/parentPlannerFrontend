import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/child'


const AddChild = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${backendUrl}/user/1`, {name})
        .then(res  => console.log(res))
        .catch(err => console.log(err))
        navigate('/children')
        window.location.reload()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label className='addChildLabel' htmlFor='name'>Child's Name:</label>
            <input type='text' value={name} id='name' onChange={handleNameChange} /> 

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddChild