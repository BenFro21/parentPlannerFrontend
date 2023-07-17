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
      

      <div className="container">
    
        
        <section className="childSection d-flex justify-content-evenly">
          {children?.map(child => {
            return (
              <div key={child.id}>
                <h3 style={{textDecoration: 'underline'}}> {child?.name}</h3>
                <button type="button" className="btn btn-primary">
                  <a href={`/activities/${child?.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                    View Activities
                  </a>
                </button>
                <button
                  type="button" className="btn btn-danger"
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
        <button type="button" className="btn btn-outline-success" aria-disabled="true">
          <a href={`/child/add`} style={{ textDecoration: 'none' }}>
            Add Child
          </a>
        </button>
    
      </div>
      <div>
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWTqjMdQTpgYIK1LR85eiZwcywbEbdwpwHJ4gesavTvfWhIzZ9T5E_q-OYK-ejQG4ebQ&usqp=CAU" alt="family" className='img-fluid' />
      </div>
    </div>
  );
};

export default ShowAllChildren;
