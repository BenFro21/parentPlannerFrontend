import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const backendUrl = 'http://localhost:8080/api/v1/child'

const ShowAllChildren = () => {
const [children, setChildren] = useState()
useEffect(() => {
  axios.get(`${backendUrl}/user/1`)
  .then(res => {
    console.log(res.data)
    setChildren(res.data)
    console.log(children[0].name)
  })
  .catch(err => console.log(err))
}, [])


  return (
    <div>
      <button>Add Child</button>
      <section className='childSection'>
        {children?.map(child => {
          return(
            <div>
              <h3> {child?.name}</h3>
              <button><Link to={`/activities/${child?.id}`}>View Activities</Link></button>
              <button>Delete Child </button>
            </div>
          )
        })}

      </section>
    </div>
  )
}

export default ShowAllChildren