import React from 'react';
import data from '../data.json'
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const WorkSection = () => {
  const projects = data.map((project) => {
    return <Project project={project} key={project.id} />
  })

  return (
    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div 
          data-aos="flip-left"
          data-aos-easing='ease-out-cubic' 
          data-aos-duration='5000'
          className="work__boxes"
        >
          {projects}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
