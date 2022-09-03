import { useState } from 'react'
import styles from './Signup.module.css'


export default function Signup() {
  
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username,email,password)
  }
  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label >
        <span>Username</span>
        <input type="text" 
        onChange={(e)=>{setUsername(e.target.value)}}
        value={username}
        />
      </label>
      <label>
        <span>Email</span>
        <input type="email"
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input type="password" 
        onChange={(e)=>{setPassword(e.target.value)}}
        value={password}
        />
      </label>
      <button type='submit' className='btn'>Sign Up</button>
    </form>
  )
}
