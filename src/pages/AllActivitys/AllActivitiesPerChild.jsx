import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const backendUrl = 'http://localhost:8080/api/v1/activity'

const AllActivitiesPerChild = () => {
    let {childId} = useParams();
    let [activities, setActivities] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${backendUrl}/child/${childId}`)
        .then(res => {
            console.log(res.data)
            setActivities(res.data)
        })
    },[])



  return (
    <div>
        {activities?.map(activity => {
            return(
                <section>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                    <p>{activity.startDate}</p>
                    <button onClick={() => {
                        axios.delete(`${backendUrl}/${activity.id}`)
                        window.location.reload();
                    }}>Remove
                    </button>
                </section>
            )
        })}
    </div>
  )
}

export default AllActivitiesPerChild