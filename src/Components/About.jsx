import React from 'react';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I'm a web developer and designer. I love building apps that solve real-world problems, and that are delightful to use. My specialties include JavaScript, TypeScript, Tailwind CSS and MERN Stack.
            </p>
            <p>
              My background is in Business and IT, and I have a bachelor's degree in Business Information Technology from Kwame Nkrumah University of Science and Technology.
            </p>
            <a href="https://flowcv.com/resume/r8p9dbnsrn" className="btn">
              My Resume
            </a>
          </div>

          <div className="about__photo-container">
            <img className="about__photo" src="./images/photo_2_2023-10-19_10-41-00.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
