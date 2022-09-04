import { useState } from 'react'
import {useSignup} from '../../hooks/useSignup'
import styles from './Signup.module.css'


export default function Signup() {
  const {error, isPending,signup}=useSignup();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    signup(email,password,username);
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
      {!isPending && <button type='submit' className='btn'>Sign Up</button>}
      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <p>{error}</p>}
      
    </form>
  )
}
