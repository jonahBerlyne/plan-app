import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectDetails() {

 const { id } = useParams();
 
  return (
   <div className='container section project-details'>
    <div className='card z-depth-0'>
     <div className='card-content'>
      <span className='card-title'>Project Title - {id}</span>
      <p>P element</p>
     </div>
     <div className='card-action grey lighten-4 grey-text'>
      <div>Posted by JB</div>
      <div>2/2/22</div>
     </div>
    </div>
   </div>
  );
}
