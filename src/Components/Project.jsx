import React from 'react'

const Project = ({project}) => {
  return (
    <>
        <div className="work__box">
            <div className="work__text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="work__list">
                {project.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
              </ul>
              <div className="work__links">
                <a href={project.website} target="_blank" className="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href={project.github} title="View Source Code" target="_blank">
                  <img src="./images/github.svg" className="work__code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src={project.logo} className="work__image" alt="Project 1" />
            </div>
          </div>
    </>
  )
}

export default Project
