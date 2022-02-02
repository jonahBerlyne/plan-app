import React, { useState } from 'react';

export default function CreateProject() {

 const initialState = {
  title: '',
  content: ''
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
    <h5 className='grey-text text-darken-3'>Create Project</h5>
    <div className='input-field'>
     <label htmlFor='title'>Title</label>
     <input type="text" id="title" onChange={handleChange}/>
    </div>
    <div className='input-field'>
     <label htmlFor='content'>Project Content</label>
     <textarea className='materialize-textarea' id='content' onChange={handleChange}/>
    </div>
    <div className='input-field'>
     <button className='btn pink lighten-1 z-depth-0'>Create</button>
    </div>
   </form>
  </div>
 );
}
