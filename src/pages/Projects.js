import React from 'react';
import ProjectItem from '../components/ProjectItems';
// import golfall from '../assets/golfall.PNG';
// import rpgthegame from '../assets/rpgthegame.PNG';
import "../styles/Projects.css";


function Projects() {
  return (
    <div className='projects'>
      <h1> My Group and Personal Projects </h1>
      <div className='listOfProjects'>
        {/* <ProjectItem name="Golf All" image={golfall} /> */}
        {/* <ProjectItem name="RPG the Game" image= {rpgthegame} /> */}
     
      
      </div>
    </div>
  )
}

export default Projects