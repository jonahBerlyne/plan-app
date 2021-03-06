import React, { useState } from 'react';

export default function SignIn() {

 const initialState = {
  email: '',
  password: ''
 }
 const [state, setState] = useState(initialState);

 const handleChange = e => {
  e.preventDefault();
  setState({
   ...state,
   [e.target.id]: e.target.value
  });
 }

 const handleSubmit = e => {
  e.preventDefault();
  console.log(state);
 }

 return (
  <div className='container'>
   <form onSubmit={handleSubmit} className='white'>
    <h5 className='grey-text text-darken-3'>Sign In</h5>
    <div className='input-field'>
     <label htmlFor='email'>Email</label>
     <input type="email" id="email" onChange={handleChange}/>
    </div>
    <div className='input-field'>
     <label htmlFor='password'>Password</label>
     <input type="password" id="password" onChange={handleChange}/>
    </div>
    <div className='input-field'>
     <button className='btn pink lighten-1 z-depth-0'>Login</button>
    </div>
   </form>
  </div>
 );
}
