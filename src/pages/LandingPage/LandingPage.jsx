import React, {useState} from 'react'
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/user'

const LandingPage = ({user, setUser}) => {
// const [user, setUser] = useState('')
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [username, setUsername] = useState('');

const handleEmailChange = (e) => {
  setEmail(e.target.value)
}

const handlePasswordChange = (e) => {
  setPassword(e.target.value)
}

const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value)  
}

const handleUsernameChange = (e) => {
  setUsername(e.target.value)
}

const handleLoginSubmit = (e) => {
  e.preventDefault()
  axios.post(`${backendUrl}/login`, {email, password})
  .then(res => {
    console.log(res.data)
    localStorage.setItem('user', res.data)
    setUser(res.data[0])
    console.log(user)
  })

  .catch(err => console.log(err))
  console.log("finished login")
}

const handleRegisterSubmit = (e) => {
  e.preventDefault()
  if(password === confirmPassword){
    axios.post(`${backendUrl}/register`, {email, password, username})
    .then(res => {
      console.log(res.data)
      alert("registered")
    })
    .catch(err => console.log(err))
  }else {
    console.log("passwords dont match")
  }

}


  return (
    <div className='container-sm'>
        <div className='row'>
          <div className='col-xl-6'>
          <h3 className='formTitle'>Login</h3>
          <form className='login'>
          <label htmlFor='email' className='formLabel'>Email</label>
          <input class="form-control form-control"  type='email' id='email' value={email} onChange={handleEmailChange} />

          <label htmlFor='password' className='formLabel'>Password</label>
          <input class="form-control form-control"  type='password' id='password' value={password} onChange={handlePasswordChange} />
        
          <button type="button" class="btn btn-outline-success" onClick={handleLoginSubmit}>Login</button>
          </form>
       
          
      <h3 className='formTitle'>Register</h3>
      <form className='register'>
        <label htmlFor='email' className='formLabel'>Email</label>
        <input class="form-control form-control"  type='email' id='email' value={email} onChange={handleEmailChange} />

        <label htmlFor='username' className='formLabel'>Username</label>
        <input class="form-control form-control"  type='text' id='username' value={username} onChange={handleUsernameChange} />

        <label htmlFor='password' className='formLabel'>Password</label>
        <input class="form-control form-control"  type='password' id='password' value={password} onChange={handlePasswordChange} />

        <label htmlFor='confirmPassword' className='formLabel'>Confirm Password</label>
        <input class="form-control form-control"  type='password' id='confirmPassword' value={confirmPassword} onChange={handleConfirmPasswordChange} />
        
        <button type="button" class="btn btn-outline-success" onClick={handleRegisterSubmit}>Register</button>
      </form>
      </div>
  
      <div className='col-xl-6'>
        <h1>Parent Planner app</h1>
        <p>Welcome to the parent planner app! A one stop shop to manage all of your childrens activities and events. Please register an account and sign in to start. Once logged in you can add children and activities for said child. Delete the activity when it is completed and add new ones when needed! Please Enjoy!</p>
        <img src='https://previews.123rf.com/images/viyada123rf/viyada123rf1810/viyada123rf181000029/146620426-family-fun-at-home-father-mother-son-and-daughter-are-playing-together-happily-kite-surfing.jpg' alt='family playing' className='img-fluid'></img>      
      </div>
      </div>
    </div>
  )
}

export default LandingPage