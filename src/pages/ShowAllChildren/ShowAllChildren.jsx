import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowAllChildren.css'

const backendUrl = 'http://localhost:8080/api/v1/child';

const ShowAllChildren = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/user/1`)
      .then(res => {
        console.log(res.data);
        setChildren(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="container">
        <section className="childSection d-flex flex-wrap justify-content-center">
          {children.map(child => (
            <div key={child.id} className="child card m-3" style={{ width: '18rem'}}>
              <div className="child card-body">
                <h5 className="card-title">{child.name}</h5>
                <button type="button" className="btn btn-primary">
                  <a href={`/activities/${child.id}`} className="text-white" style={{ textDecoration: 'none' }}>
                    View Activities
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={e => {
                    axios.delete(`${backendUrl}/${child.id}`).then(window.location.reload());
                  }}
                >
                  Delete Child
                </button>
              </div>
            </div>
          ))}
        </section>
        <button type="button" className="btn btn-success mb-3">
          <a href={`/child/add`} style={{ textDecoration: 'none', color: 'white' }}>
            Add Child
          </a>
        </button>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWTqjMdQTpgYIK1LR85eiZwcywbEbdwpwHJ4gesavTvfWhIzZ9T5E_q-OYK-ejQG4ebQ&usqp=CAU" alt="family" className="img-fluid" />
      </div>
    </div>
  );
};

export default ShowAllChildren;

