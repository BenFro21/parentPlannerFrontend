import React, {useState} from 'react'
import axios from 'axios';

const backendUrl = 'http://localhost:8080/api/v1/user'

const LandingPage = () => {
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
    <div>
      <section className='formSection'>
      <h3 className='formTitle'>Login</h3>
      <form className='login'>
        <label htmlFor='email' className='formLabel'>Email</label>
        <input type='email' id='email' value={email} onChange={handleEmailChange} />

        <label htmlFor='password' className='formLabel'>Password</label>
        <input type='password' id='password' value={password} onChange={handlePasswordChange} />
        
        <button className='submitBtn' type='submit' onClick={handleLoginSubmit}>Submit</button>
      </form>

      <h3 className='formTitle'>Register</h3>
      <form className='register'>
        <label htmlFor='email' className='formLabel'>Email</label>
        <input className='formInput' type='email' id='email' value={email} onChange={handleEmailChange} />

        <label htmlFor='username' className='formLabel'>Username</label>
        <input className='formInput' type='text' id='username' value={username} onChange={handleUsernameChange} />

        <label htmlFor='password' className='formLabel'>Password</label>
        <input className='formInput' type='password' id='password' value={password} onChange={handlePasswordChange} />

        <label htmlFor='confirmPassword' className='formLabel'>Confirm Password</label>
        <input className='formInput' type='password' id='confirmPassword' value={confirmPassword} onChange={handleConfirmPasswordChange} />
        
        <button className='submitBtn' type='submit' onClick={handleRegisterSubmit}>Submit</button>
      </form>
      </section>
      <section className='infoSection'>
        <h1 className='infoTitle'>Parent Planner app</h1>
        <p className='infoP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit dolorem perspiciatis molestiae voluptatibus magni sit, iusto nesciunt odio, reprehenderit, laborum quod vitae optio vero perferendis. Dolorem alias suscipit quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id numquam aliquam. Ducimus quas voluptatibus iste? Exercitationem ea iusto iure, saepe voluptatum quod ipsum, dolor pariatur necessitatibus, voluptate officia id.</p>
      </section>
    </div>
  )
}

export default LandingPage