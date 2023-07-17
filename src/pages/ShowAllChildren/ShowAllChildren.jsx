import React, { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/child';

const ShowAllChildren = () => {
  const [children, setChildren] = useState();

  useEffect(() => {
    axios
      .get(`${backendUrl}/user/1`)
      .then(res => {
        console.log(res.data);
        setChildren(res.data);
        console.log(children[0].name);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <button type="button" className="btn btn-outline-success" aria-disabled="true">
        <a href={`/child/add`} style={{ textDecoration: 'none' }}>
          Add Child
        </a>
      </button>
      <section className="childSection">
        {children?.map(child => {
          return (
            <div key={child.id}>
              <h3> {child?.name}</h3>
              <button type="button" className="btn btn-outline-primary">
                <a href={`/activities/${child?.id}`} style={{ textDecoration: 'none' }}>
                  View Activities
                </a>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={e => {
                  axios.delete(`${backendUrl}/${child.id}`).then(window.location.reload());
                }}
              >
                Delete Child
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ShowAllChildren;
