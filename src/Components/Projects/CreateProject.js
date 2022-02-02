import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../Store/Actions/projectActions';

function CreateProject({createProject}) {

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
  createProject(state);
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

const mapDispatchToProps = dispatch => {
 return {
  createProject: (project) => dispatch(createProject(project))
 }
}

export default connect(null, mapDispatchToProps)(CreateProject);