import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/activity';

const AllActivitiesPerChild = () => {
  let { childId } = useParams();
  let [activities, setActivities] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${backendUrl}/child/${childId}`).then(res => {
      console.log(res.data);
      setActivities(res.data);
    });
  }, []);

  return (
    <div className='container'>
      <button type="button" className="btn btn-lg btn-outline-success">
        <Link to={`/activities/add/${childId}`} style={{ textDecoration: 'none', color: 'gold' }}>Add Activity</Link>
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>Activity Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activities?.map(activity => (
            <tr key={activity.id}>
              <td>{activity.title}</td>
              <td>{activity.description}</td>
              <td>{activity.startDate}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    axios.delete(`${backendUrl}/${activity.id}`).then(() => {
                      window.location.reload();
                    });
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllActivitiesPerChild;
