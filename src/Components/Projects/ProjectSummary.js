import React from 'react';

export default function ProjectSummary ({project}) {
 return (
   <div className='card z-depth-0 project-summary'>
    <div className='card-content grey-text text-darken-3'>
     <span className='card-title'>{project.title}</span>
     <p>Posted by JB</p>
     <p className='grey-text'>2/2/22</p>
    </div>
   </div>  
 );
}