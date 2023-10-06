import React from 'react';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            {/* Replace the below paragraph with info about yourself */}
            <p>
              I'm a web developer and designer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialties include TypeScript, React JS, Tailwind CSS, and Styled Components.
            </p>
            <p>
              My background is in teaching and marketing, and I have a bachelor's degree in English from Kings College. I also have five adorable cats.
            </p>
            {/* Provide a link to your resume */}
            <a href="#" className="btn">
              My Resume
            </a>
          </div>

          <div className="about__photo-container">
            {/* Add a nice photo of yourself */}
            <img className="about__photo" src="./images/jane.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
