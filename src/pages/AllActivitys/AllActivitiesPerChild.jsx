import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AllActivitys.css'

const backendUrl = 'http://localhost:8080/api/v1/activity';

const AllActivitiesPerChild = () => {
  const { childId } = useParams();
  const navigate = useNavigate();

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}/child/${childId}`).then(res => {
      console.log(res.data);
      setActivities(res.data);
    });
  }, [childId]);
 
  return (
    <div  className="container">
          <button type="button" className="btn btn-lg btn-success mb-3">
          <a href= {`/activities/add/${childId}`} style={{ textDecoration: 'none', color: 'white'}}>
            Add Activity
          </a>
        </button>

      <table  className="table mt-3">
        <thead >
          <tr>
            <th>Activity Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.title}</td>
              <td>{activity.description}</td>
              <td>{activity.startDate}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger me-2"
                  onClick={() => {
                    axios.delete(`${backendUrl}/${activity.id}`).then(() => {
                      window.location.reload();
                    });
                  }}
                >
                  Remove
                </button>
                <Link
                  to={`/activities/update/${activity.id}`}
                  className="btn btn-outline-primary"
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllActivitiesPerChild;
