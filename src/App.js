import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import ShowAllChildren from './pages/ShowAllChildren/ShowAllChildren';
import AllActivitiesPerChild from './pages/AllActivitys/AllActivitiesPerChild';



function App() {
 


  return (
    <div className="App">
      <Layout >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/children' element={<ShowAllChildren />} /> 
          <Route path='/activities/:childId' element={<AllActivitiesPerChild />} />

      
        </Routes>

      </Layout>

    </div>
  );
}

export default App;
