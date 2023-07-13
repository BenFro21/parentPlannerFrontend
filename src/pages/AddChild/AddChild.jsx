import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/child'


const AddChild = () => {
    const navigate = useNavigate();
    const [childName, setChildName] = useState('');

    const handleNameChange = (e) => {
        setChildName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${backendUrl}/user/1`)
        .then(res  => console.log(res))
        .catch(err => console.log(err))
        navigate('/children', {replace: true} )
    }

  return (
    <div>
        <form>
            <label className='addChildLabel' htmlFor='name'>Child's Name:</label>
            <input type='text' value={childName} id='name' onChange={handleNameChange} /> 

            <button type='submit' onClick={handleSubmit} >Submit</button>
        </form>
    </div>
  )
}

export default AddChild