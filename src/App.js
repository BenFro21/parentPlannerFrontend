import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import ShowAllChildren from './pages/ShowAllChildren/ShowAllChildren';
import AllActivitiesPerChild from './pages/AllActivitys/AllActivitiesPerChild';
import AddChild from './pages/AddChild/AddChild';
import AddActivity from './pages/AddActivity/AddActivity';
import { useState } from 'react';



function App() {
const [user, setUser] = useState('')





  return (
    <div className="App">
      <Layout user={user} setUser={setUser} >
        <Routes>
          <Route path='/' element={user[0] == 15 ? <ShowAllChildren /> : <LandingPage user={user} setUser={setUser} />} />
          <Route path='/children' element={<ShowAllChildren />} /> 
          <Route path='/activities/:childId' element={<AllActivitiesPerChild />} />
          <Route path='/child/add' element={<AddChild />} />
          <Route path='/activities/add/:childId' element={<AddActivity />} />

      
        </Routes>

      </Layout>

    </div>
  );
}

export default App;
